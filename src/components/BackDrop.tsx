import clsx from 'clsx';
import PropTypes from 'prop-types';
import { HTMLAttributes, memo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  visible: boolean;
}

export const BackDrop: React.FC<Props> = memo(
  ({ visible, className, ...props }) => (
    <div
      className={clsx(
        'fixed inset-0 bg-gray-900 bg-opacity-30 transition-opacity duration-200',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        className,
      )}
      {...props}
    />
  ),
);

BackDrop.displayName = 'BackDrop';

BackDrop.propTypes = {
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

BackDrop.defaultProps = {
  className: '',
};
