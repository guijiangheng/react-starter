import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface NotificationProps {
  to: string;
  date: string;
  highlight: string;
  description: string;
}

export const Notification: React.FC<NotificationProps> = ({
  to,
  date,
  highlight,
  description,
}) => (
  <Menu.Item>
    {({ active }) => (
      <li className="last:border-0 border-b border-gray-200">
        <Link
          className={clsx(
            'block px-4 py-2 hover:bg-gray-100',
            active && 'bg-gray-100',
          )}
          to={to}
        >
          <span className="block mb-2 text-sm">
            📣
            <span className="ml-2 text-gray-600 font-medium">{highlight}</span>
            {description}
          </span>
          <span className="block text-gray-400 text-xs font-medium">
            {date}
          </span>
        </Link>
      </li>
    )}
  </Menu.Item>
);

Notification.propTypes = {
  to: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
