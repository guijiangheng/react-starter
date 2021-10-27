import { Menu as HeadlessMenu } from '@headlessui/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { range } from 'rambda';
import React, { forwardRef, memo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from './Menu';
import { Notification } from './Notification';
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
  onClick: PropTypes.func,
};

interface HelpLinkProps {
  to: string;
}

const HelpLink: React.FC<HelpLinkProps> = ({ to, children }) => (
  <HeadlessMenu.Item>
    {({ active }) => (
      <HeadlessMenu.Button as="li">
        <Link
          to={to}
          className={clsx(
            'flex items-center px-3 py-1 text-indigo-500 hover:text-indigo-700 text-sm font-medium',
            active && 'text-indigo-700',
          )}
        >
          {children}
        </Link>
      </HeadlessMenu.Button>
    )}
  </HeadlessMenu.Item>
);

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

          {/* Notification Menu */}
          <Menu
            reference={({ open }) => (
              <Button badge active={open}>
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
              </Button>
            )}
          >
            <div className="pb-2 pt-1.5 px-4 text-gray-400 text-xs font-semibold uppercase">
              Notifications
            </div>
            <ul className="min-w-80">
              {range(1, 5).map((index) => (
                <Notification
                  key={index}
                  to="#0"
                  highlight="Edit your information in a swipe"
                  description="Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
                  date="Feb 12, 2021"
                />
              ))}
            </ul>
          </Menu>

          {/* Help Menu */}
          <Menu
            reference={({ open }) => (
              <Button active={open}>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="text-gray-500 fill-current"
                    d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
                  />
                </svg>
              </Button>
            )}
          >
            <div className="pb-2 pt-1.5 px-4 text-gray-400 text-xs font-semibold uppercase">
              Need Help?
            </div>
            <ul className="min-w-44">
              <HelpLink to="#0">
                <svg
                  className="flex-shrink-0 mr-2 w-3 h-3 text-indigo-300 fill-current"
                  viewBox="0 0 12 12"
                >
                  <rect y="3" width="12" height="9" rx="1" />
                  <path d="M2 0h8v2H2z" />
                </svg>
                <span>Documentation</span>
              </HelpLink>
              <HelpLink to="#0">
                <svg
                  className="flex-shrink-0 mr-2 w-3 h-3 text-indigo-300 fill-current"
                  viewBox="0 0 12 12"
                >
                  <path d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z" />
                </svg>
                <span>Support Site</span>
              </HelpLink>
              <HelpLink to="#0">
                <svg
                  className="flex-shrink-0 mr-2 w-3 h-3 text-indigo-300 fill-current"
                  viewBox="0 0 12 12"
                >
                  <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
                </svg>
                <span>Contact us</span>
              </HelpLink>
            </ul>
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
