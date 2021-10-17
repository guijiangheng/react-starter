import { useState } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar visible={sidebarOpen} setVisible={setSidebarOpen} />
      <div className="flex-1 overflow-x-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
}
