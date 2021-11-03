import 'chartjs-adapter-moment';

import {
  BarController,
  BarElement,
  Chart,
  ChartData,
  Legend,
  LinearScale,
  TimeScale,
  Tooltip,
} from 'chart.js';
import { CanvasHTMLAttributes, useEffect, useRef } from 'react';

import { formatValue, noop } from './utils';

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
);

export interface BarChart02Props
  extends CanvasHTMLAttributes<HTMLCanvasElement> {
  data: ChartData<'bar', number[], string>;
}

export const BarChart02: React.FC<BarChart02Props> = ({ data, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return noop;

    // eslint-disable-next-line no-unused-vars
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
            stacked: true,
            grid: {
              drawBorder: false,
            },
            beginAtZero: true,
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value as number),
            },
          },
          x: {
            stacked: true,
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
        animation: {
          duration: 200,
        },
        maintainAspectRatio: false,
      },
    });

    return () => chart.destroy();
  }, [data]);

  return <canvas ref={canvasRef} {...props} />;
};
