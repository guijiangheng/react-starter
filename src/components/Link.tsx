import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

export interface LinkProps {
  to: string;
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  to,
  active = false,
  className,
  children,
}) => (
  <RouterLink
    to={to}
    className={clsx(
      'flex items-center text-indigo-500 hover:text-indigo-700 text-sm font-medium',
      active && 'text-indigo-700',
      className,
    )}
  >
    {children}
  </RouterLink>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};
