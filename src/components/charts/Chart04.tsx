import { memo } from 'react';

import { colors } from '@/theme';

import { BarChart01 } from '../BarChart01';

export const Chart04 = memo(() => {
  const data = {
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
        label: 'Direct',
        data: [800, 1600, 900, 1300, 1950, 1700],
        backgroundColor: colors.blue[400],
        hoverBackgroundColor: colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Indirect',
        data: [4900, 2600, 5350, 4800, 5200, 4800],
        backgroundColor: colors.indigo[500],
        hoverBackgroundColor: colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };
  return (
    <div className="flex flex-col col-span-full bg-white border border-gray-200 rounded-sm shadow-lg sm:col-span-6">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-gray-800 font-semibold">Direct VS Indirect</h2>
      </header>
      <BarChart01 data={data} width={595} height={248} />
    </div>
  );
});

Chart04.displayName = 'Chart04';
