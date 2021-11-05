import { memo } from 'react';

export const Card13 = memo(() => (
  <div className="col-span-full bg-white border border-gray-200 rounded-sm shadow-lg xl:col-span-6">
    <header className="px-5 py-4 border-b border-gray-100">
      <h2 className="text-gray-800 font-semibold">Income/Expenses</h2>
    </header>
    <div className="p-3">
      {/* "Today" group */}
      <div>
        <header className="p-2 text-gray-400 text-xs font-semibold bg-gray-50 rounded-sm uppercase">
          Today
        </header>
        <ul className="my-1">
          {/* Item */}
          <li className="flex px-2">
            <div className="flex-shrink-0 mr-3 my-2 w-9 h-9 bg-red-500 rounded-full">
              <svg
                className="w-9 h-9 text-red-50 fill-current"
                viewBox="0 0 36 36"
              >
                <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
              </svg>
            </div>
            <div className="flex flex-grow items-center py-2 text-sm border-b border-gray-100">
              <div className="flex flex-grow justify-between">
                <div className="self-center">
                  <a
                    className="text-gray-800 hover:text-gray-900 font-medium"
                    href="#0"
                  >
                    Qonto
                  </a>{' '}
                  billing
                </div>
                <div className="flex-shrink-0 self-start ml-2">
                  <span className="text-gray-800 font-medium">-$49.88</span>
                </div>
              </div>
            </div>
          </li>
          {/* Item */}
          <li className="flex px-2">
            <div className="flex-shrink-0 mr-3 my-2 w-9 h-9 bg-green-500 rounded-full">
              <svg
                className="w-9 h-9 text-green-50 fill-current"
                viewBox="0 0 36 36"
              >
                <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
              </svg>
            </div>
            <div className="flex flex-grow items-center py-2 text-sm border-b border-gray-100">
              <div className="flex flex-grow justify-between">
                <div className="self-center">
                  <a
                    className="text-gray-800 hover:text-gray-900 font-medium"
                    href="#0"
                  >
                    Cruip.com
                  </a>{' '}
                  Market Ltd 70 Wilson St London
                </div>
                <div className="flex-shrink-0 self-start ml-2">
                  <span className="text-green-500 font-medium">+249.88</span>
                </div>
              </div>
            </div>
          </li>
          {/* Item */}
          <li className="flex px-2">
            <div className="flex-shrink-0 mr-3 my-2 w-9 h-9 bg-green-500 rounded-full">
              <svg
                className="w-9 h-9 text-green-50 fill-current"
                viewBox="0 0 36 36"
              >
                <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
              </svg>
            </div>
            <div className="flex flex-grow items-center py-2 text-sm border-b border-gray-100">
              <div className="flex flex-grow justify-between">
                <div className="self-center">
                  <a
                    className="text-gray-800 hover:text-gray-900 font-medium"
                    href="#0"
                  >
                    Notion Labs Inc
                  </a>
                </div>
                <div className="flex-shrink-0 self-start ml-2">
                  <span className="text-green-500 font-medium">+99.99</span>
                </div>
              </div>
            </div>
          </li>
          {/* Item */}
          <li className="flex px-2">
            <div className="flex-shrink-0 mr-3 my-2 w-9 h-9 bg-green-500 rounded-full">
              <svg
                className="w-9 h-9 text-green-50 fill-current"
                viewBox="0 0 36 36"
              >
                <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
              </svg>
            </div>
            <div className="flex flex-grow items-center py-2 text-sm border-b border-gray-100">
              <div className="flex flex-grow justify-between">
                <div className="self-center">
                  <a
                    className="text-gray-800 hover:text-gray-900 font-medium"
                    href="#0"
                  >
                    Market Cap Ltd
                  </a>
                </div>
                <div className="flex-shrink-0 self-start ml-2">
                  <span className="text-green-500 font-medium">+1,200.88</span>
                </div>
              </div>
            </div>
          </li>
          {/* Item */}
          <li className="flex px-2">
            <div className="flex-shrink-0 mr-3 my-2 w-9 h-9 bg-gray-200 rounded-full">
              <svg
                className="w-9 h-9 text-gray-400 fill-current"
                viewBox="0 0 36 36"
              >
                <path d="M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z" />
              </svg>
            </div>
            <div className="flex flex-grow items-center py-2 text-sm border-b border-gray-100">
              <div className="flex flex-grow justify-between">
                <div className="self-center">
                  <a
                    className="text-gray-800 hover:text-gray-900 font-medium"
                    href="#0"
                  >
                    App.com
                  </a>{' '}
                  Market Ltd 70 Wilson St London
                </div>
                <div className="flex-shrink-0 self-start ml-2">
                  <span className="text-gray-800 line-through font-medium">
                    +$99.99
                  </span>
                </div>
              </div>
            </div>
          </li>
          {/* Item */}
          <li className="flex px-2">
            <div className="flex-shrink-0 mr-3 my-2 w-9 h-9 bg-red-500 rounded-full">
              <svg
                className="w-9 h-9 text-red-50 fill-current"
                viewBox="0 0 36 36"
              >
                <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
              </svg>
            </div>
            <div className="flex flex-grow items-center py-2 text-sm">
              <div className="flex flex-grow justify-between">
                <div className="self-center">
                  <a
                    className="text-gray-800 hover:text-gray-900 font-medium"
                    href="#0"
                  >
                    App.com
                  </a>{' '}
                  Market Ltd 70 Wilson St London
                </div>
                <div className="flex-shrink-0 self-start ml-2">
                  <span className="text-gray-800 font-medium">-$49.88</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
));

Card13.displayName = 'Card13';
