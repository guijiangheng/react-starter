import clsx from 'clsx';
import PropTypes from 'prop-types';
import { memo, useState } from 'react';

export interface HeaderProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = memo(({ setSidebarOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky z-30 top-0 flex items-center justify-between -mb-px px-4 h-16 bg-white border-b border-gray-200 sm:px-6 lg:px-8">
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600 lg:hidden"
        onClick={() => setSidebarOpen((open) => !open)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="5" width="16" height="2" />
          <rect x="4" y="11" width="16" height="2" />
          <rect x="4" y="17" width="16" height="2" />
        </svg>
      </button>

      <div className="flex gap-8 items-center">
        <button
          type="button"
          className={clsx(
            'flex items-center justify-center ml-3 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-150',
            searchOpen && 'bg-gray-200',
          )}
          onClick={() => setSearchOpen(true)}
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="text-gray-500 fill-current"
              d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
            />
            <path
              className="text-gray-400 fill-current"
              d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
});

Header.propTypes = {
  setSidebarOpen: PropTypes.func.isRequired,
};
