import { useState } from 'react';
import { Link } from 'react-router-dom';

import UserImage1 from '@/assets/user-36-01.jpg';
import UserImage2 from '@/assets/user-36-02.jpg';
import UserImage3 from '@/assets/user-36-03.jpg';
import UserImage4 from '@/assets/user-36-04.jpg';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar visible={sidebarOpen} setVisible={setSidebarOpen} />
      <div className="flex-1 overflow-x-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="px-4 py-8">
          {/* Welcome Banner */}
          <div className="relative mb-8 p-4 bg-indigo-200 rounded-sm overflow-hidden sm:p-6">
            <div className="absolute right-0 top-0 hidden -mt-4 mr-16 pointer-events-none xl:block">
              <svg
                width="319"
                height="198"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
                  <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
                  <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="welcome-b"
                  >
                    <stop stopColor="#A5B4FC" offset="0%" />
                    <stop stopColor="#818CF8" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="24.537%"
                    x2="50%"
                    y2="100%"
                    id="welcome-c"
                  >
                    <stop stopColor="#4338CA" offset="0%" />
                    <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g transform="rotate(64 36.592 105.604)">
                    <mask id="welcome-d" fill="#fff">
                      <use xlinkHref="#welcome-a" />
                    </mask>
                    <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
                    <path
                      fill="url(#welcome-c)"
                      mask="url(#welcome-d)"
                      d="M64-24h80v152H64z"
                    />
                  </g>
                  <g transform="rotate(-51 91.324 -105.372)">
                    <mask id="welcome-f" fill="#fff">
                      <use xlinkHref="#welcome-e" />
                    </mask>
                    <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
                    <path
                      fill="url(#welcome-c)"
                      mask="url(#welcome-f)"
                      d="M40.333-15.147h50v95h-50z"
                    />
                  </g>
                  <g transform="rotate(44 61.546 392.623)">
                    <mask id="welcome-h" fill="#fff">
                      <use xlinkHref="#welcome-g" />
                    </mask>
                    <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
                    <path
                      fill="url(#welcome-c)"
                      mask="url(#welcome-h)"
                      d="M40.333-15.147h50v95h-50z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="relative">
              <h1 className="mb-1 text-gray-800 text-2xl font-bold md:text-3xl">
                Good afternoon, Acme Inc. 👋
              </h1>
              <p>Here is what’s happening with your projects today:</p>
            </div>
          </div>

          {/* Dashboard actions */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex -space-x-3">
              {[UserImage1, UserImage2, UserImage3, UserImage4].map(
                (image, index) => (
                  <Link key={index} className="inline-flex" to="#0">
                    <img
                      className="rounded-full"
                      src={image}
                      alt="user-avatar"
                      width="36"
                      height="36"
                    />
                  </Link>
                ),
              )}
              <button
                type="button"
                className="flex items-center justify-center ml-2 w-9 h-9 text-indigo-500 bg-white border border-gray-200 hover:border-gray-300 rounded-full shadow-sm transition duration-150"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
              </button>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="btn flex gap-2 items-center text-white bg-indigo-500 hover:bg-indigo-600"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4 fill-current opacity-50"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden sm:block">Add view</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
