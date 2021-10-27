import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface NotificationItemProps {
  to: string;
  date: string;
  highlight: string;
  description: string;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  to,
  date,
  highlight,
  description,
}) => (
  <Menu.Item>
    {({ active }) => (
      <Menu.Button as="li" className="last:border-0 border-b border-gray-200">
        <Link
          className={clsx(
            'block px-4 py-2 hover:bg-gray-100',
            active && 'bg-gray-100',
          )}
          to={to}
        >
          <span className="block mb-2 text-sm">
            📣{' '}
            <span className="ml-2 text-gray-600 font-medium">{highlight}</span>
            {description}
          </span>
          <span className="block text-gray-400 text-xs font-medium">
            {date}
          </span>
        </Link>
      </Menu.Button>
    )}
  </Menu.Item>
);

NotificationItem.propTypes = {
  to: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

interface NotificationPopperSlot {
  open: boolean;
}

interface NotificationPopperProps {
  children: React.ReactNode;
  reference:
    | React.ReactNode
    | ((slot: NotificationPopperSlot) => React.ReactElement);
}

export const NotificationPopper: React.FC<NotificationPopperProps> = ({
  reference,
  children,
}) => (
  <Menu as="div" className="relative flex">
    {({ open }) => {
      const resolvedReference =
        typeof reference === 'function' ? reference({ open }) : reference;

      return (
        <>
          <Menu.Button as={Fragment}>{resolvedReference}</Menu.Button>
          <Transition
            show={open}
            enter="transition transform duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition transform duration-200 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <Menu.Items className="min-w-80 absolute right-0 top-full mt-1 p-2 bg-white rounded shadow-lg">
              <div className="pb-2 pt-1.5 px-4 text-gray-400 text-xs font-semibold uppercase">
                Notifications
              </div>
              <ul>{children}</ul>
            </Menu.Items>
          </Transition>
        </>
      );
    }}
  </Menu>
);

NotificationPopper.propTypes = {
  children: PropTypes.node,
  reference: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
