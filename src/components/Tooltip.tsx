import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import { Hover, HoverSlot } from './Hover';

export enum Placement {
  Top = 'top',
  Bottom = 'bottom',
}

interface TooltipSlot {
  open: boolean;
}

interface TooltipProps {
  placement?: Placement;
  children: React.ReactNode | ((slot: HoverSlot) => React.ReactElement);
  reference: React.ReactNode | ((slot: TooltipSlot) => React.ReactElement);
}

export const Tooltip: React.FC<TooltipProps> = ({
  placement = Placement.Top,
  reference,
  children,
}) => (
  <Hover>
    {(props) => {
      // eslint-disable-next-line react/prop-types
      const { hover: open } = props;
      const resolvedReference =
        typeof reference === 'function' ? reference({ open }) : reference;
      const resolvedChildren =
        typeof children === 'function' ? children(props) : children;

      return (
        <div className="relative inline-flex">
          {resolvedReference}
          <Transition
            show={open}
            className={clsx(
              'absolute z-10 left-1/2 -translate-x-1/2',
              placement === Placement.Top ? 'bottom-full' : 'top-full',
            )}
            enter="transition transform duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition transform duration-150 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <div
              className={clsx(
                'bg-white border border-gray-200 rounded shadow-lg',
                placement === Placement.Top ? 'mb-2' : 'mt-2',
              )}
            >
              {resolvedChildren}
            </div>
          </Transition>
        </div>
      );
    }}
  </Hover>
);

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
  placement: PropTypes.oneOf(Object.values(Placement)),
  reference: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
