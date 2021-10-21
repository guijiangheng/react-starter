import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef, memo, useState } from 'react';

import { SearchModal } from './SearchModal';

interface ButtonProps {
  active?: boolean;
  badge?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ active = false, badge = false, children, onClick }, ref) => (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={clsx(
        'relative flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full transition',
        active && 'bg-gray-200',
      )}
    >
      {children}
      {badge && (
        <div className="absolute right-0 top-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
      )}
    </button>
  ),
);

Button.propTypes = {
  active: PropTypes.bool,
  badge: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export interface HeaderProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = memo(({ setSidebarOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
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

        <div className="flex gap-3 items-center">
          <Button onClick={() => setSearchOpen(true)} active={searchOpen}>
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
          </Button>

          <Menu as="div" className="relative flex">
            {({ open }) => (
              <>
                <Menu.Button as={Button} badge active={open}>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="text-gray-500 fill-current"
                      d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
                    />
                    <path
                      className="text-gray-400 fill-current"
                      d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
                    />
                  </svg>
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition transform duration-300 ease-out"
                  enterFrom="opacity-0 -translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition transform duration-200 ease-out"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-2"
                >
                  <Menu.Items className="absolute right-0 top-full mt-2 py-2 bg-white focus:outline-none shadow-lg origin-top-right">
                    <Menu.Item as="div">sdf</Menu.Item>
                    <Menu.Item as="div">sdf</Menu.Item>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </header>

      <SearchModal open={searchOpen} setOpen={setSearchOpen} />
    </>
  );
});

Header.propTypes = {
  setSidebarOpen: PropTypes.func.isRequired,
};
