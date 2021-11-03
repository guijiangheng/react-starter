import 'chartjs-adapter-moment';

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartData,
  Legend,
  LegendItem,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { CanvasHTMLAttributes, useEffect, useRef, useState } from 'react';

import { noop } from './utils';

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
);

export interface BarChart03Props
  extends CanvasHTMLAttributes<HTMLCanvasElement> {
  data: ChartData<'bar', number[], string>;
}

export const BarChart03: React.FC<BarChart03Props> = ({ data, ...props }) => {
  const [legends, setLegends] = useState<LegendItem[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart<'bar', number[], string> | null>(null);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (!canvasRef.current) return noop;

    const values = data.datasets.map((x) => x.data.reduce((a, b) => a + b));
    const maxValue = values.reduce((a, b) => a + b);
    setMax(maxValue);

    const chart = new Chart(canvasRef.current, {
      type: 'bar',
      data,
      options: {
        indexAxis: 'y',
        layout: {
          padding: {
            top: 12,
            bottom: 12,
            left: 20,
            right: 20,
          },
        },
        scales: {
          x: {
            stacked: true,
            display: false,
            max: maxValue,
          },
          y: {
            stacked: true,
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => '',
              label: (context) => String(context.parsed.x),
            },
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

    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col flex-grow justify-center">
      <div>
        <canvas ref={canvasRef} {...props} />
      </div>
      <div className="pb-2 pt-2 px-5">
        <ul className="text-sm divide-gray-100 divide-y">
          {legends.map((item, index) => (
            <li key={index} className="flex items-center justify-between p-2.5">
              <div className="flex items-center">
                <span
                  className="mr-3 w-3 h-3 rounded-sm"
                  style={{ backgroundColor: item.fillStyle as string }}
                />
                <span>{item.text}</span>
              </div>
              <div
                className="font-medium"
                style={{
                  color:
                    item.text === 'Other'
                      ? 'text-gray-400'
                      : (item.fillStyle as string),
                }}
              >
                {(
                  ((chartRef.current?.data.datasets[
                    item.datasetIndex
                  ].data.reduce((a, b) => a + b, 0) || 0) /
                    max) *
                  100
                ).toFixed(2)}
                %
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
