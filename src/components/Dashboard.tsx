import { useState } from 'react';

import { Sidebar } from './Sidebar';

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar visible={sidebarOpen} setVisible={setSidebarOpen} />
      <div onClick={() => setSidebarOpen((val) => !val)}>toggle sidebar</div>
    </div>
  );
}
