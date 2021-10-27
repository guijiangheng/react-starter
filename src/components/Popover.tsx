import { Popover as HeadlessPopover, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

interface PopoverSlot {
  open: boolean;
}

interface PopoverProps {
  children: React.ReactNode;
  reference: React.ReactNode | ((slot: PopoverSlot) => React.ReactElement);
}

export const Popover: React.FC<PopoverProps> = ({ reference, children }) => (
  <HeadlessPopover as="div" className="relative inline-flex">
    {({ open }) => {
      const resolvedReference =
        typeof reference === 'function' ? reference({ open }) : reference;

      return (
        <>
          <HeadlessPopover.Button as={Fragment}>
            {resolvedReference}
          </HeadlessPopover.Button>
          <Transition
            show={open}
            enter="transition transform duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition transform duration-200 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <HeadlessPopover.Panel className="absolute right-0 top-full mt-1 p-2 bg-white border border-gray-200 rounded shadow-lg">
              {children}
            </HeadlessPopover.Panel>
          </Transition>
        </>
      );
    }}
  </HeadlessPopover>
);

Popover.propTypes = {
  children: PropTypes.node,
  reference: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
