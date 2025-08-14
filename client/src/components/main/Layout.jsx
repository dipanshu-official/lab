// components/Layout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {

   const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Header onToggleSidebar={() => setIsCollapsed((prev) => !prev)} />

      <div className="flex">
        {/* Header */}
        <Sidebar isCollapsed={isCollapsed} />

        {/* Main Content Area */}
        <main className="p-4 overflow-y-auto flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
