import {
  Chart,
  ChartData,
  Filler,
  LegendItem,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip,
} from 'chart.js';
import clsx from 'clsx';
import { CanvasHTMLAttributes, useEffect, useRef, useState } from 'react';

import { formatValue, noop } from './utils';

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
);

export interface LineChart02Props
  extends CanvasHTMLAttributes<HTMLCanvasElement> {
  data: ChartData<'line', number[], string>;
}

export const LineChart02: React.FC<LineChart02Props> = ({ data, ...props }) => {
  const [legends, setLegends] = useState<LegendItem[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<'line', number[], string> | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return noop;

    const chart = new Chart(canvasRef.current, {
      type: 'line',
      data,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value as number),
            },
          },
          x: {
            type: 'time',
            time: {
              parser: 'MM-DD-YYYY',
              unit: 'month',
              displayFormats: {
                month: 'MMM YY',
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => '',
              label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
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
      chartRef.current.setDatasetVisibility(
        item.datasetIndex,
        !chartRef.current.isDatasetVisible(item.datasetIndex),
      );
      chartRef.current.update();
    }
  };

  return (
    <>
      <div className="px-5 py-3">
        <div className="flex flex-wrap items-end justify-between">
          <div className="flex items-start">
            <div className="mr-2 text-gray-800 text-3xl font-bold">$1,482</div>
            <div className="px-1.5 text-white text-sm font-semibold bg-yellow-500 rounded-full">
              -22%
            </div>
          </div>
          <div className="flex-grow mb-1 ml-2">
            <ul className="flex flex-wrap gap-4 justify-end">
              {legends.slice(0, 2).map((item, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => onLegendClick(item)}
                    className={clsx(
                      'inline-flex gap-2 items-center',
                      item.hidden && 'opacity-30',
                    )}
                  >
                    <span
                      className="w-3 h-3 border-4 rounded-full"
                      style={{
                        borderColor: chartRef.current?.data.datasets[
                          item.datasetIndex
                        ].borderColor as string,
                      }}
                    />
                    <span className="text-gray-500 text-sm">{item.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <canvas ref={canvasRef} {...props} />
      </div>
    </>
  );
};
