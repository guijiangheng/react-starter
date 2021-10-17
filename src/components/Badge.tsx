import PropTypes from 'prop-types';

export interface BadgeProps {
  count?: number;
}

export const Badge: React.FC<BadgeProps> = ({ count = 0 }) => (
  <span className="inline-flex items-center justify-center px-2 h-5 text-white text-xs font-medium bg-indigo-500 rounded-sm">
    {count}
  </span>
);

Badge.propTypes = {
  count: PropTypes.number,
};
