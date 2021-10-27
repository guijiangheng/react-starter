import { Menu as HeadlessMenu } from '@headlessui/react';

import UserAvatar from '@/assets/user-avatar-32.png';

import { Link } from './Link';
import { Menu } from './Menu';

export const UserMenu: React.FC = () => (
  <Menu
    reference={
      <button type="button" className="group inline-flex items-center">
        <img
          className="w-8 h-8 rounded-full"
          src={UserAvatar}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="ml-2 group-hover:text-gray-800 text-sm font-medium truncate">
            Acme Inc.
          </span>
          <svg
            className="flex-shrink-0 ml-1 w-3 h-3 text-gray-400 fill-current"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>
    }
  >
    <div className="mb-1 pb-2 pt-0.5 px-3 border-b border-gray-200">
      <div className="text-gray-800 font-medium">Acme Inc.</div>
      <div className="text-gray-500 text-xs italic">Administrator</div>
    </div>
    <ul className="min-w-44 mt-2">
      <HeadlessMenu.Item>
        {({ active }) => (
          <HeadlessMenu.Button as="li">
            <Link to="#0" active={active} className="px-3 py-2">
              Settings
            </Link>
          </HeadlessMenu.Button>
        )}
      </HeadlessMenu.Item>
      <HeadlessMenu.Item>
        {({ active }) => (
          <HeadlessMenu.Button as="li">
            <Link to="#0" active={active} className="px-3 py-1">
              Sign Out
            </Link>
          </HeadlessMenu.Button>
        )}
      </HeadlessMenu.Item>
    </ul>
  </Menu>
);
