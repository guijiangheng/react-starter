import 'chartjs-adapter-moment';

import { Chart, ChartData } from 'chart.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { takeLast } from 'rambda';
import { CanvasHTMLAttributes, useEffect, useMemo, useRef } from 'react';

import { formatValue, noop } from './utils';

export interface RealtimeChartProps
  extends CanvasHTMLAttributes<HTMLCanvasElement> {
  data: ChartData<'bar', number[], Date>;
}

export const RealtimeChart: React.FC<RealtimeChartProps> = ({
  data,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const info = useMemo(() => {
    const [pre = 0, cur = 0] = takeLast(2, data.datasets[0].data);
    const growthRate = ((cur - pre) / pre) * 100;
    return {
      currentValue: cur,
      growthRate,
      growthRateStr: `${growthRate > 0 ? '+' : ''}${growthRate.toFixed(2)}%`,
    };
  }, [data]);

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
            suggestedMin: 30,
            suggestedMax: 80,
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(Number(value)),
            },
          },
          x: {
            type: 'time',
            time: {
              parser: 'hh:mm:ss',
              unit: 'second',
              tooltipFormat: 'MMM DD, H:mm:ss a',
              displayFormats: {
                second: 'H:mm:ss',
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
            titleFont: {
              weight: '600',
            },
            callbacks: {
              label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: false,
        maintainAspectRatio: false,
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <>
      <div className="px-5 py-3">
        <div className="flex gap-2 items-start">
          <div className="text-gray-800 text-3xl tabular-nums font-bold">
            {info.currentValue}
          </div>
          <div
            className={clsx(
              'px-1.5 text-white text-sm font-semibold rounded-full',
              info.growthRate > 0 ? 'bg-red-500' : 'bg-green-500',
            )}
          >
            {info.growthRateStr}
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <canvas ref={canvasRef} {...props} />
      </div>
    </>
  );
};

RealtimeChart.propTypes = {
  data: PropTypes.object.isRequired as any,
};
