import { Popover as HeadlessPopover, Transition } from '@headlessui/react';
import { Instance } from '@popperjs/core';
import PropTypes from 'prop-types';
import { Fragment, useEffect, useRef } from 'react';

import { createPopper, noop, REM } from './utils';

interface PopoverSlot {
  open: boolean;
}

interface PopoverProps {
  children: React.ReactNode;
  reference: React.ReactNode | ((slot: PopoverSlot) => React.ReactElement);
}

export const Popover: React.FC<PopoverProps> = ({ reference, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const popperInstanceRef = useRef<Instance | null>(null);

  useEffect(() => {
    if (!containerRef.current || !popperRef.current) return noop;

    popperInstanceRef.current = createPopper(
      containerRef.current,
      popperRef.current,
      {
        placement: 'bottom-end',
        modifiers: [
          {
            name: 'preventOverflow',
          },
          {
            name: 'offset',
            options: {
              offset: [0, 0.25 * REM],
            },
          },
        ],
      },
    );
    return () => {
      popperInstanceRef.current?.destroy();
    };
  }, []);

  const togglePopperEventListeners = (open: boolean) => {
    if (!popperInstanceRef.current) return;

    popperInstanceRef.current.setOptions((options) => ({
      ...options,
      modifiers: [
        ...(options.modifiers || []),
        { name: 'eventListeners', enabled: open },
      ],
    }));

    popperInstanceRef.current.update();
  };

  return (
    <HeadlessPopover as={Fragment}>
      {({ open }) => {
        const resolvedReference =
          typeof reference === 'function' ? reference({ open }) : reference;

        togglePopperEventListeners(open);

        return (
          <div ref={containerRef} className="relative inline-flex">
            <HeadlessPopover.Button as="div" className="inline-flex">
              {resolvedReference}
            </HeadlessPopover.Button>
            <div ref={popperRef} className="z-10 inline-flex">
              <Transition
                as={Fragment}
                show={open}
                enter="transition transform duration-200 ease-out"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition transform duration-150 ease-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
              >
                <HeadlessPopover.Panel className="bg-white border border-gray-200 rounded shadow-lg">
                  {children}
                </HeadlessPopover.Panel>
              </Transition>
            </div>
          </div>
        );
      }}
    </HeadlessPopover>
  );
};

Popover.propTypes = {
  children: PropTypes.node,
  reference: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
