import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';

const SearchIcon = (
  <svg viewBox="0 0 16 16">
    <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
  </svg>
);

const DocumentIcon = (
  <svg viewBox="0 0 16 16">
    <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
  </svg>
);

interface ListItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const ListItem: React.FC<ListItemProps> = ({ icon, children, onClick }) => (
  <li>
    <Link
      className="group flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded"
      to="#0"
      onClick={onClick}
    >
      <div className="flex-shrink-0 mr-3 w-4 h-4 text-gray-400 group-hover:text-white group-hover:text-opacity-50 fill-current">
        {icon}
      </div>
      <span>{children}</span>
    </Link>
  </li>
);

ListItem.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export interface SearchModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchModal: React.FC<SearchModalProps> = memo(
  ({ open, setOpen }) => (
    <Transition show={open} as={Fragment}>
      <Dialog
        onClose={setOpen}
        className="fixed z-40 inset-0 flex items-start justify-center"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <div className="z-10 mt-20 w-full max-w-2xl bg-white rounded shadow-lg overflow-auto">
            <form className="relative border-b border-gray-200">
              <input
                type="text"
                className="placeholder-gray-400 pl-10 pr-4 py-3 w-full border-0 focus:outline-none appearance-none focus:ring-transparent"
                placeholder="Search Anything"
              />
              <button
                className="group absolute inset-0 right-auto"
                type="submit"
              >
                <svg
                  className="flex-shrink-0 ml-4 mr-2 w-4 h-4 text-gray-400 group-hover:text-gray-500 fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
            <div className="flex flex-col gap-3 px-2 py-4">
              {/* Recent searchs */}
              <div>
                <div className="mb-2 px-2 text-gray-400 text-xs font-semibold uppercase">
                  Recent searches
                </div>
                <ul className="text-sm">
                  {[
                    'Form Builder - 23 hours on-demand video',
                    'Access Mosaic on mobile and TV',
                    'Product Update - Q4 2021',
                    'Master Digital Marketing Strategy course',
                    'Dedicated forms for products',
                    'Product Update - Q4 2021',
                  ].map((label, index) => (
                    <ListItem
                      onClick={() => setOpen(false)}
                      icon={SearchIcon}
                      key={index}
                    >
                      {label}
                    </ListItem>
                  ))}
                </ul>
              </div>
              {/* Recent pages */}
              <div>
                <div className="mb-2 px-2 text-gray-400 text-xs font-semibold uppercase">
                  Recent pages
                </div>
                <ul className="text-sm">
                  {[
                    <>
                      <span className="text-gray-800 group-hover:text-white font-medium">
                        Messages
                      </span>{' '}
                      - Conversation / … / Mike Mills
                    </>,
                    <>
                      <span className="text-gray-800 group-hover:text-white font-medium">
                        Messages
                      </span>{' '}
                      - Conversation / … / Eva Patrick
                    </>,
                  ].map((label, index) => (
                    <ListItem
                      onClick={() => setOpen(false)}
                      icon={DocumentIcon}
                      key={index}
                    >
                      {label}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  ),
);

SearchModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
