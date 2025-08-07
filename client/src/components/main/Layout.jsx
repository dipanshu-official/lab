// components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Header />

      <div className="flex">
        {/* Header */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="p-4 overflow-y-auto flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
