import { memo } from 'react';

import { colors } from '@/theme';

import { BarChart03 } from '../BarChart03';

export const Card11: React.FC = memo(() => {
  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: 'Having difficulties using the product',
        data: [131],
        backgroundColor: colors.indigo[500],
        hoverBackgroundColor: colors.indigo[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Missing features I need',
        data: [100],
        backgroundColor: colors.indigo[800],
        hoverBackgroundColor: colors.indigo[900],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Not satisfied about the quality of the product',
        data: [81],
        backgroundColor: colors['light-blue'][400],
        hoverBackgroundColor: colors['light-blue'][500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'The product doesn’t look as advertised',
        data: [65],
        backgroundColor: colors.green[400],
        hoverBackgroundColor: colors.green[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Other',
        data: [72],
        backgroundColor: colors.gray[200],
        hoverBackgroundColor: colors.gray[300],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="col-span-full bg-white border border-gray-200 rounded-sm shadow-lg xl:col-span-6">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-gray-800 font-semibold">Reason for Refunds</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="mr-2 text-gray-800 text-3xl font-bold">449</div>
          <div className="px-1.5 text-white text-sm font-semibold bg-yellow-500 rounded-full">
            -22%
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <BarChart03 data={chartData} width={595} height={48} />
      </div>
    </div>
  );
});

Card11.displayName = 'Card11';
