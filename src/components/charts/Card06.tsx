import { memo } from 'react';

import { colors } from '@/theme';

import { DoughnutChart } from '../DoughnutChart';

export const Card06: React.FC = memo(() => {
  const chartData = {
    labels: ['United States', 'Italy', 'Other'],
    datasets: [
      {
        label: 'Top Countries',
        data: [35, 30, 35],
        backgroundColor: [
          colors.indigo[500],
          colors.blue[400],
          colors.indigo[800],
        ],
        hoverBackgroundColor: [
          colors.indigo[600],
          colors.blue[500],
          colors.indigo[900],
        ],
        hoverBorderColor: colors.white,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full bg-white border border-gray-200 rounded-sm shadow-lg sm:col-span-6 xl:col-span-4">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-gray-800 font-semibold">Top Countries</h2>
      </header>
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
});

Card06.displayName = 'Card06';
