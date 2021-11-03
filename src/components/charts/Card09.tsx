import { memo } from 'react';

import { colors } from '@/theme';

import { BarChart02 } from '../BarChart02';
import { Tooltip } from '../Tooltip';

export const Card09: React.FC = memo(() => {
  const chartData = {
    labels: [
      '12-01-2020',
      '01-01-2021',
      '02-01-2021',
      '03-01-2021',
      '04-01-2021',
      '05-01-2021',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Stack 1',
        data: [6200, 9200, 6600, 8800, 5200, 9200],
        backgroundColor: colors.indigo[500],
        hoverBackgroundColor: colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Stack 2',
        data: [-4000, -2600, -5350, -4000, -7500, -2000],
        backgroundColor: colors.indigo[200],
        hoverBackgroundColor: colors.indigo[300],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full bg-white border border-gray-200 rounded-sm shadow-lg sm:col-span-6">
      <header className="flex gap-2 items-center px-5 py-4 border-b border-gray-100">
        <h2 className="text-gray-800 font-semibold">Sales VS Refunds</h2>
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
          <div className="p-3 min-w-80 text-sm">
            Sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim.
          </div>
        </Tooltip>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="mr-2 text-gray-800 text-3xl font-bold">+$6,796</div>
          <div className="px-1.5 text-white text-sm font-semibold bg-yellow-500 rounded-full">
            -34%
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart02 data={chartData} width={595} height={248} />
      </div>
    </div>
  );
});

Card09.displayName = 'Card09';
