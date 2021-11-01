import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

interface MenuSlot {
  open: boolean;
}

interface MenuProps {
  children: React.ReactNode;
  reference: React.ReactNode | ((slot: MenuSlot) => React.ReactElement);
}

export const Menu: React.FC<MenuProps> = ({ reference, children }) => (
  <HeadlessMenu as="div" className="relative inline-flex">
    {({ open }) => {
      const resolvedReference =
        typeof reference === 'function' ? reference({ open }) : reference;

      return (
        <>
          <HeadlessMenu.Button as={Fragment}>
            {resolvedReference}
          </HeadlessMenu.Button>
          <Transition
            show={open}
            enter="transition transform duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition transform duration-150 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <HeadlessMenu.Items className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg">
              {children}
            </HeadlessMenu.Items>
          </Transition>
        </>
      );
    }}
  </HeadlessMenu>
);

Menu.propTypes = {
  children: PropTypes.node,
  reference: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
