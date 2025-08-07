import React from "react";
import {
  AntennaIcon,
  BarChart,
  Book,
  ChevronDown,
  ChevronUp,
  List,
  ListCollapse,
  ListIcon,
  ListMinus,
  PowerOffIcon,
  Table,
  TestTube,
  TestTube2Icon,
  User,
  User2,
  User2Icon,
  Users2Icon,
  UserX2Icon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isTestsOpen, setIsTestsOpen] = useState(false);
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `flex items-center px-3 py-2 rounded-md ${
      isActive ? "bg-sky-100 text-sky-700" : "text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <div className="w-74 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <div className="space-y-2">
          {/* New Registration */}
          <NavLink to="/dashboard" className={navLinkClass}>
            <User className="h-4 w-4 mr-3" />
            <span className="text-sm font-medium">New Registration</span>
          </NavLink>

          {/* Analysis */}
          <NavLink to="/analysis" className={navLinkClass}>
            <AntennaIcon className="h-4 w-4 mr-3" />
            <span className="text-sm">Analysis</span>
          </NavLink>

          {/* Other static nav items - convert to NavLink if needed */}
          <NavLink to="/patient-list" className={navLinkClass}>
            <ListMinus className="h-4 w-4 mr-3" />
            Patient List
          </NavLink>

          <NavLink to="/enter-verify" className={navLinkClass}>
            <Table className="h-4 w-4 mr-3" />
            Enter & Verify
          </NavLink>

          <NavLink to="/financial-analysis" className={navLinkClass}>
            <BarChart className="h-4 w-4 mr-3" />
            Financial Analysis
          </NavLink>

          {/* Tests Section */}
          <div>
            <div
              className="flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer"
              onClick={() => setIsTestsOpen(!isTestsOpen)}
            >
              <div className="flex items-center">
                <TestTube2Icon className="h-4 w-4 mr-3" />
                <div className="text-sm font-medium">Tests</div>
              </div>
              <span>
                {isTestsOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </span>
            </div>
            {isTestsOpen && (
              <div className="ml-6 space-y-1">
                <NavLink to="/tests/list" className={navLinkClass}>
                  Test List
                </NavLink>
                <NavLink to="/tests/packages" className={navLinkClass}>
                  Packages
                </NavLink>
                <NavLink
                  to="/tests/outsource"
                  className={({ isActive }) =>
                    `flex items-center px-3 py-1 text-sm rounded hover:bg-gray-100 ${
                      isActive
                        ? "bg-gray-100 text-blue-600 font-medium"
                        : "text-gray-600"
                    }`
                  }
                >
                  Outsource
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-1 rounded">
                    PRO
                  </span>
                </NavLink>
              </div>
            )}
          </div>

          {/* Lab Management Section */}
          <div className="">
            <div
              className="flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer"
              onClick={() => setIsLabOpen(!isLabOpen)}
            >
              <div className="flex items-center">
                <Users2Icon className="h-4 w-4 mr-3" />
                <span className="text-sm font-medium">Lab Management</span>
              </div>
              <span>
                {isLabOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </span>
            </div>
            {isLabOpen && (
              <div className="ml-6 space-y-1">
                <NavLink to="/referrals" className={navLinkClass}>
                  Referral List
                </NavLink>
                <NavLink to="/users" className={navLinkClass}>
                  Manage Users
                </NavLink>
                <NavLink to="/labs" className={navLinkClass}>
                  Processing Lab
                </NavLink>
                <NavLink to="/b2b" className={navLinkClass}>
                  B2B
                </NavLink>
              </div>
            )}
          </div>

          {/* Inventory Section */}
          <div className="">
            <div
              className="flex items-center justify-between px-4 py-2 text-gray-700 cursor-pointer"
              onClick={() => setIsInventoryOpen(!isInventoryOpen)}
            >
              <div className="flex items-center">
                <Book className="h-4 w-4 mr-3" />
                <span className="text-sm font-medium">Inventory</span>
              </div>
              <span>
                {isInventoryOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </span>
            </div>
            {isInventoryOpen && (
              <div className="ml-6 space-y-1">
                <NavLink to="/inventory/dashboard" className={navLinkClass}>
                  Dashboard
                </NavLink>
                <NavLink to="/inventory/stock" className={navLinkClass}>
                  Current Stock
                </NavLink>
                <NavLink to="/inventory/purchase" className={navLinkClass}>
                  Purchase Order
                </NavLink>
              </div>
            )}
          </div>

          {/* Lab Profile */}
          <NavLink
            to="/lab-profile"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md ${
                isActive
                  ? "bg-sky-100 text-sky-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <User2 className="h-4 w-4 mr-3" />
            <span className="text-sm">Lab Profile</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
