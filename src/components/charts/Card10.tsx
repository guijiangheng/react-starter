import Image01 from '@/assets/user-36-05.jpg';
import Image02 from '@/assets/user-36-06.jpg';
import Image03 from '@/assets/user-36-07.jpg';
import Image04 from '@/assets/user-36-08.jpg';
import Image05 from '@/assets/user-36-09.jpg';

export const Card10: React.FC = () => {
  const customers = [
    {
      id: '0',
      image: Image01,
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      location: '🇺🇸',
      spent: '$2,890.66',
    },
    {
      id: '1',
      image: Image02,
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      location: '🇩🇪',
      spent: '$2,767.04',
    },
    {
      id: '2',
      image: Image03,
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      location: '🇫🇷',
      spent: '$2,996.00',
    },
    {
      id: '3',
      image: Image04,
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      location: '🇮🇹',
      spent: '$1,220.66',
    },
    {
      id: '4',
      image: Image05,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      location: '🇬🇧',
      spent: '$1,890.66',
    },
  ];

  return (
    <div className="col-span-full bg-white border border-gray-200 rounded-sm shadow-lg xl:col-span-6">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-gray-800 font-semibold">Customers</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-gray-400 text-xs font-semibold bg-gray-50 uppercase">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="text-left font-semibold">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="text-left font-semibold">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="text-left font-semibold">Spent</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="text-left font-semibold">Country</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-gray-100 divide-y">
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-2 w-10 h-10 sm:mr-3">
                        <img
                          className="rounded-full"
                          src={customer.image}
                          width="40"
                          height="40"
                          alt={customer.name}
                        />
                      </div>
                      <div className="text-gray-800 font-medium">
                        {customer.name}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{customer.email}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left text-green-500 font-medium">
                      {customer.spent}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center text-lg">
                      {customer.location}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
