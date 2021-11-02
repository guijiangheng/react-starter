import 'chartjs-adapter-moment';

import {
  ArcElement,
  Chart,
  ChartData,
  DoughnutController,
  LegendItem,
  TimeScale,
  Tooltip,
} from 'chart.js';
import clsx from 'clsx';
import { CanvasHTMLAttributes, useEffect, useRef, useState } from 'react';

import { noop } from './utils';

Chart.register(DoughnutController, ArcElement, TimeScale, Tooltip);

export interface DoughnutChartProps
  extends CanvasHTMLAttributes<HTMLCanvasElement> {
  data: ChartData<'doughnut', number[], string>;
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  ...props
}) => {
  const [legends, setLegends] = useState<LegendItem[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<'doughnut', number[], string> | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return noop;

    const chart = new Chart(canvasRef.current, {
      type: 'doughnut',
      data,
      options: {
        cutout: '80%',
        layout: {
          padding: 24,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
      },
      plugins: [
        {
          id: 'htmlLegend',
          afterUpdate(c) {
            setLegends(
              c.options.plugins?.legend?.labels?.generateLabels?.(
                c,
              ) as LegendItem[],
            );
          },
        },
      ],
    });

    chartRef.current = chart;

    return () => {
      chart.destroy();
    };
  }, [data]);

  const onLegendClick = (item: LegendItem) => {
    if (chartRef.current) {
      chartRef.current.toggleDataVisibility((item as any).index);
      chartRef.current.update();
    }
  };

  return (
    <div className="flex flex-col flex-grow justify-center">
      <div>
        <canvas ref={canvasRef} {...props} />
      </div>
      <div className="pb-6 pt-2 px-5">
        <ul className="flex flex-wrap gap-1 justify-center">
          {legends.map((item, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => onLegendClick(item)}
                className={clsx(
                  'btn-xs text-gray-500 bg-white border-gray-200 hover:border-gray-300',
                  item.hidden && 'opacity-30',
                )}
              >
                <span
                  className="w-2 h-2 rounded-sm pointer-events-none"
                  style={{ background: item.fillStyle as string }}
                />
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
