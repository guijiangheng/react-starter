import 'chartjs-adapter-moment';

import {
  BarController,
  BarElement,
  Chart,
  ChartData,
  Legend,
  LegendItem,
  LinearScale,
  TimeScale,
  Tooltip,
} from 'chart.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { CanvasHTMLAttributes, useEffect, useRef, useState } from 'react';

import { formatValue, noop } from './utils';

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
);

export interface BarChart01Props
  extends CanvasHTMLAttributes<HTMLCanvasElement> {
  data: ChartData<'bar', number[], string>;
}

export const BarChart01: React.FC<BarChart01Props> = ({ data, ...props }) => {
  const [legends, setLegends] = useState<LegendItem[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart<'bar', number[], string> | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return noop;

    const chart = new Chart(canvasRef.current, {
      type: 'bar',
      data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(Number(value)),
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
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
      },
      plugins: [
        {
          id: 'htmlLegend',
          afterUpdate: (c) => {
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
        <ul className="flex flex-wrap gap-4">
          {legends.map((legend, index) => (
            <li key={index}>
              <button
                onClick={() => onLegendClick(legend)}
                type="button"
                className={clsx(
                  'inline-flex gap-2 items-center',
                  legend.hidden && 'opacity-30',
                )}
              >
                <span
                  className="block w-3 h-3 border-4 rounded-full"
                  style={{ borderColor: legend.fillStyle as string }}
                />
                <span className="text-gray-800 text-3xl font-bold">
                  {formatValue(
                    chartRef.current?.data.datasets?.[
                      legend.datasetIndex
                    ].data.reduce((a, b) => a + b, 0) as number,
                  )}
                </span>
                <span className="text-gray-500 text-sm">{legend.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow">
        <canvas ref={canvasRef} {...props} />
      </div>
    </>
  );
};

BarChart01.propTypes = {
  data: PropTypes.object.isRequired as any,
};
