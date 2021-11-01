import 'chartjs-adapter-moment';

import {
  Chart,
  ChartData,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useRef } from 'react';

import { colors } from '@/theme';

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

export interface LineChartProps {
  width: number;
  height: number;
  data: ChartData<'line', number[], string>;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  width,
  height,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return noop;

    const chart = new Chart(canvasRef.current, {
      type: 'line',
      data,
      options: {
        backgroundColor: colors.gray[50],
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            display: false,
            beginAtZero: true,
          },
          x: {
            type: 'time',
            time: {
              parser: 'MM-DD-YYYY',
              unit: 'month',
            },
            display: false,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: () => '',
              label: (context) => formatValue(context.parsed.y),
            },
          },
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        maintainAspectRatio: false,
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
