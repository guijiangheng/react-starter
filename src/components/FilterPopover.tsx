import { Popover } from './Popover';

export const FilterPopover: React.FC = () => (
  <Popover
    reference={
      <button
        type="button"
        className="btn text-gray-500 hover:text-gray-600 bg-white border-gray-200 hover:border-gray-300"
        aria-haspopup="true"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
      </button>
    }
  >
    <div className="pb-2 pt-1.5 px-4 text-gray-400 text-xs font-semibold uppercase">
      Filters
    </div>
    <ul className="min-w-56">
      {[
        'Top Channels',
        'Direct VS Indirect',
        'Real Time Value',
        'Sales VS Refunds',
        'Last Order',
        'Total Spent',
      ].map((item, index) => (
        <li key={index} className="px-3 py-1">
          <label className="flex gap-2 items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-sm font-medium">{item}</span>
          </label>
        </li>
      ))}
    </ul>
  </Popover>
);
