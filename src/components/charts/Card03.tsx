import { ChartData } from 'chart.js';
import clsx from 'clsx';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import Icon from '@/assets/icon-03.svg';
import { colors } from '@/theme';

import { EditMenu } from '../EditMenu';
import { LineChart01 } from '../LineChart01';
import { hexToRGB } from '../utils';

export const Card03: React.FC = memo(() => {
  const data: ChartData<'line', number[], string> = {
    labels: [
      '12-01-2020',
      '01-01-2021',
      '02-01-2021',
      '03-01-2021',
      '04-01-2021',
      '05-01-2021',
      '06-01-2021',
      '07-01-2021',
      '08-01-2021',
      '09-01-2021',
      '10-01-2021',
      '11-01-2021',
      '12-01-2021',
      '01-01-2022',
      '02-01-2022',
      '03-01-2022',
      '04-01-2022',
      '05-01-2022',
      '06-01-2022',
      '07-01-2022',
      '08-01-2022',
      '09-01-2022',
      '10-01-2022',
      '11-01-2022',
      '12-01-2022',
      '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          540, 466, 540, 466, 385, 432, 334, 334, 289, 289, 200, 289, 222, 289,
          289, 403, 554, 304, 289, 270, 134, 270, 829, 344, 388, 364,
        ],
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
      // Gray line
      {
        data: [
          689, 562, 477, 477, 477, 477, 458, 314, 430, 378, 430, 498, 642, 350,
          145, 145, 354, 260, 188, 188, 300, 300, 282, 364, 660, 554,
        ],
        borderColor: colors.gray[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: colors.gray[300],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full bg-white border border-gray-200 rounded-sm shadow-lg sm:col-span-6 xl:col-span-4">
      <div className="pt-5 px-5">
        <header className="flex justify-between mb-2">
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          <EditMenu>
            <EditMenu.MenuItem>
              {({ active }) => (
                <Link
                  to="#0"
                  className={clsx(
                    'flex px-3 py-1 text-gray-600 hover:text-gray-800 text-sm font-medium',
                    active && 'text-gray-800',
                  )}
                >
                  Option 1
                </Link>
              )}
            </EditMenu.MenuItem>
            <EditMenu.MenuItem>
              {({ active }) => (
                <Link
                  to="#0"
                  className={clsx(
                    'flex px-3 py-1 text-gray-600 hover:text-gray-800 text-sm font-medium',
                    active && 'text-gray-800',
                  )}
                >
                  Option 2
                </Link>
              )}
            </EditMenu.MenuItem>
            <EditMenu.MenuItem>
              {({ active }) => (
                <Link
                  to="#0"
                  className={clsx(
                    'flex px-3 py-1 text-red-500 hover:text-red-600 text-sm font-medium',
                    active && 'text-red-600',
                  )}
                >
                  Option 3
                </Link>
              )}
            </EditMenu.MenuItem>
          </EditMenu>
        </header>
        <h2 className="mb-2 text-gray-800 text-lg font-semibold">
          Acme Professional
        </h2>
        <div className="mb-1 text-gray-400 text-xs font-semibold uppercase">
          Sales
        </div>
        <div className="flex items-start">
          <div className="mr-2 text-gray-800 text-3xl font-bold">$9,962</div>
          <div className="px-1.5 text-white text-sm font-semibold bg-green-500 rounded-full">
            +49%
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <LineChart01 data={data} width={400} height={128} />
      </div>
    </div>
  );
});

Card03.displayName = 'Card03';
