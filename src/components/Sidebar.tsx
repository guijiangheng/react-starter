import clsx from 'clsx';
import PropTypes from 'prop-types';
import { memo } from 'react';

import { BackDrop } from './BackDrop';

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<Props> = memo(({ visible, setVisible }) => (
  <>
    <BackDrop visible={visible} className="lg:hidden" />
    <div
      className={clsx(
        'absolute left-0 top-0 p-4 w-64 h-screen bg-gray-800 transition-transform duration-200 ease-in-out',
        visible ? 'translate-x-0' : '-translate-x-64',
      )}
    >
      <button
        type="button"
        className="hover:text-gray-400 text-gray-500 lg:hidden"
        onClick={() => setVisible(!visible)}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
        </svg>
      </button>
    </div>
  </>
));

Sidebar.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};
