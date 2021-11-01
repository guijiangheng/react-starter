import { Menu as HeadlessMenu } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';

import { Menu } from './Menu';

interface TSlot {
  active: boolean;
}

interface MenuItemProps {
  children: React.ReactNode | ((props: TSlot) => React.ReactElement);
}

const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
  <HeadlessMenu.Item>
    {({ active }) => (
      <HeadlessMenu.Button as="li">
        {typeof children === 'function' ? children({ active }) : children}
      </HeadlessMenu.Button>
    )}
  </HeadlessMenu.Item>
);

export const EditMenuRoot: React.FC = ({ children }) => (
  <Menu
    reference={({ open }) => (
      <button
        type="button"
        className={clsx(
          'text-gray-400 hover:text-gray-500 rounded-full',
          open && 'bg-gray-100 text-gray-500',
        )}
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="2" />
          <circle cx="10" cy="16" r="2" />
          <circle cx="22" cy="16" r="2" />
        </svg>
      </button>
    )}
  >
    <ul className="min-w-36">{children}</ul>
  </Menu>
);

export const EditMenu = Object.assign(EditMenuRoot, { MenuItem });
