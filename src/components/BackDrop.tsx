import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FC, memo } from 'react';

interface Props {
  visible: boolean;
  className?: string;
}

export const BackDrop: FC<Props> = memo(({ visible, className }) => (
  <div
    className={clsx(
      'fixed inset-0 bg-gray-900 bg-opacity-30 transition-opacity duration-200',
      visible ? 'opacity-100' : 'opacity-0 pointer-events-none',
      className,
    )}
  />
));

BackDrop.propTypes = {
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

BackDrop.defaultProps = {
  className: '',
};
