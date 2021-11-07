import { range, slice } from 'ramda';
import { memo, useEffect, useMemo, useState } from 'react';

import { colors } from '@/theme';

import { RealtimeChart } from '../RealtimeChart';
import { Tooltip } from '../Tooltip';
import { hexToRGB } from '../utils';

const data = [
  57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87, 53.73,
  56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25, 65.91, 64.44,
  65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92, 50.95, 49.65, 48.09,
  49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42, 50.91, 58.52, 53.37, 57.58,
  59.09, 59.36, 58.71, 59.42, 55.93, 57.71, 50.62, 56.28, 57.37, 53.08, 55.94,
  55.82, 53.94, 52.65, 50.25,
];

export const Card05: React.FC = memo(() => {
  const [tick, setTick] = useState(0);
  const [dataRange, setDataRange] = useState([0, 35]);
  const [dates, setDates] = useState(() => {
    const now = new Date().getTime();
    return range(0, 35)
      .map((index) => new Date(now - 2000 * index))
      .reverse();
  });

  const chartData = useMemo(() => {
    const [a, b] = dataRange;
    return {
      labels: dates,
      datasets: [
        {
          data:
            b < a
              ? [...slice(a, Infinity, data), ...slice(0, b, data)]
              : slice(a, b, data),
          fill: true,
          backgroundColor: `rgba(${hexToRGB(colors.blue[500])}, 0.08)`,
          borderColor: colors.indigo[500],
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: colors.indigo[500],
          clip: 20,
        },
      ],
    };
  }, [dataRange, dates]);

  useEffect(() => {
    setDataRange(([a, b]) => [(a + 1) % data.length, (b + 1) % data.length]);
    setDates(([_, ...rest]) => [...rest, new Date()]);
  }, [tick]);

  useEffect(() => {
    const interval = setInterval(setTick, 2000, (val) => val + 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col col-span-full bg-white border border-gray-200 rounded-sm shadow-lg sm:col-span-6">
      <header className="flex gap-2 items-center px-5 py-4 border-b border-gray-100">
        <h2 className="text-gray-800 font-semibold">Real Time Value</h2>
        <Tooltip
          reference={
            <svg
              className="w-4 h-4 text-gray-400 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
            </svg>
          }
        >
          <div className="p-3 text-center whitespace-nowrap text-sm">
            Built with{' '}
            <a
              className="underline"
              href="https://www.chartjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              Chart.js
            </a>
          </div>
        </Tooltip>
      </header>
      <RealtimeChart data={chartData} width={595} height={248} />
    </div>
  );
});

Card05.displayName = 'Card05';
