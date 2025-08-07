import React from "react";
import { Search, Menu, Bell, Settings, User } from "lucide-react";

const header = () => {
  return (
    <div>
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Menu className="h-6 w-6 text-gray-500 mr-4" />
              <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded transform rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-slate-900">
                Pathology <span className="gradient-text">LIS</span>
              </span>
            </div>

            {/* Center - Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search patient by contact, name, IDs"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm"
                />
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                <option>Testing</option>
              </select>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700">Testing</span>
              </div>
              <Bell className="h-5 w-5 text-gray-500" />
              <button className="text-gray-500 hover:text-gray-700">
                Help
              </button>
              <Settings className="h-5 w-5 text-gray-500" />
              <Bell className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default header;
