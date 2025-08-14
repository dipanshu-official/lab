import React, { useState } from "react";
import {
  AntennaIcon,
  BarChart,
  Book,
  ChevronDown,
  ListMinus,
  Table,
  TestTube2Icon,
  User,
  User2,
  Users2Icon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isCollapsed }) => {
  const [isTestsOpen, setIsTestsOpen] = useState(false);
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center px-3 py-2 rounded-md transition-colors ${
      isActive ? "bg-sky-100 text-sky-700" : "text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <div
      className={`bg-white border-r border-gray-200 min-h-screen transition-all duration-300 overflow-hidden ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="">
        <div className="space-y-2">
          {/* New Registration */}
          <NavLink to="/dashboard" className={navLinkClass}>
            <User className="h-6 w-6 mr-3" />
            {!isCollapsed && <span className="text-sm font-medium">New Registration</span>}
          </NavLink>

          {/* Analysis */}
          <NavLink to="/analysis" className={navLinkClass}>
            <AntennaIcon className="h-6 w-6 mr-3" />
            {!isCollapsed && <span className="text-sm">Analysis</span>}
          </NavLink>

          {/* Patient List */}
          <NavLink to="/patient-list" className={navLinkClass}>
            <ListMinus className="h-6 w-6 mr-3" />
            {!isCollapsed && "Patient List"}
          </NavLink>

          {/* Enter & Verify */}
          <NavLink to="/enter-verify" className={navLinkClass}>
            <Table className="h-6 w-6 mr-3" />
            {!isCollapsed && "Enter & Verify"}
          </NavLink>

          {/* Financial Analysis */}
          <NavLink to="/financial-analysis" className={navLinkClass}>
            <BarChart className="h-6 w-6 mr-3" />
            {!isCollapsed && "Financial Analysis"}
          </NavLink>

          {/* Tests Section */}
          <div>
            <div
              className="flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer"
              onClick={() => setIsTestsOpen(!isTestsOpen)}
            >
              <div className="flex items-center">
                <TestTube2Icon className="h-6 w-6 mr-3" />
                {!isCollapsed && <div className="text-sm font-medium">Tests</div>}
              </div>
              {!isCollapsed && (
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isTestsOpen ? "rotate-180" : ""}`}
                />
              )}
            </div>
            {isTestsOpen && !isCollapsed && (
              <div className="ml-6 space-y-1">
                <NavLink to="/test-list" className={navLinkClass}>
                  Test List
                </NavLink>
                <NavLink to="/test-packages" className={navLinkClass}>
                  Packages
                </NavLink>
                <NavLink to="/test-outsource" className={navLinkClass}>
                  Outsource
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-1 rounded">
                    PRO
                  </span>
                </NavLink>
              </div>
            )}
          </div>

          {/* Lab Management Section */}
          <div>
            <div
              className="flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer"
              onClick={() => setIsLabOpen(!isLabOpen)}
            >
              <div className="flex items-center">
                <Users2Icon className="h-4 w-4 mr-3" />
                {!isCollapsed && <span className="text-sm font-medium">Lab Management</span>}
              </div>
              {!isCollapsed && (
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isLabOpen ? "rotate-180" : ""}`}
                />
              )}
            </div>
            {isLabOpen && !isCollapsed && (
              <div className="ml-6 space-y-1">
                <NavLink to="/lab-referrals" className={navLinkClass}>
                  Referral List
                </NavLink>
                <NavLink to="/lab-manageuser" className={navLinkClass}>
                  Manage Users
                </NavLink>
                <NavLink to="/lab-processing" className={navLinkClass}>
                  Processing Lab
                </NavLink>
                <NavLink to="/b2b" className={navLinkClass}>
                  B2B
                </NavLink>
              </div>
            )}
          </div>

          {/* Inventory Section */}
          <div>
            <div
              className="flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer"
              onClick={() => setIsInventoryOpen(!isInventoryOpen)}
            >
              <div className="flex items-center">
                <Book className="h-4 w-4 mr-3" />
                {!isCollapsed && <span className="text-sm font-medium">Inventory</span>}
              </div>
              {!isCollapsed && (
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isInventoryOpen ? "rotate-180" : ""}`}
                />
              )}
            </div>
            {isInventoryOpen && !isCollapsed && (
              <div className="ml-6 space-y-1">
                <NavLink to="/inventory/dashboard" className={navLinkClass}>
                  Dashboard
                </NavLink>
                <NavLink to="/inventory/current-stock" className={navLinkClass}>
                  Current Stock
                </NavLink>
                <NavLink to="/inventory/purchase" className={navLinkClass}>
                  Purchase Order
                </NavLink>
              </div>
            )}
          </div>

          {/* Lab Profile */}
          <NavLink to="/lab-profile" className={navLinkClass}>
            <User2 className="h-6 w-6 mr-3 " />
            {!isCollapsed && <span className="text-sm">Lab Profile</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
