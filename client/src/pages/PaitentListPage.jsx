import React, { useState } from "react";
import {
  Search,
  Filter,
  FileSpreadsheet,
  MoreHorizontal,
  FileText,
  Download,
} from "lucide-react";

const PaitentListPage = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [dateRange, setDateRange] = useState({
    start: "2025-08-06",
    end: "2025-08-06",
  });

  const tabs = [
    { name: "All", count: 0, active: true },
    { name: "Pending Dispatch", count: 0 },
    { name: "Dispatched", count: 0 },
    { name: "Due", count: 0 },
    { name: "Outsource", count: 0 },
    { name: "Refunded", count: 0 },
    { name: "Discount", count: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex space-x-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  selectedTab === tab.name
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span>{tab.name}</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {tab.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-wrap items-center gap-4 justify-between">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search patient by Name/Barcode/UHID"
              className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Date Range Picker */}
            <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-3 py-2">
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) =>
                  setDateRange({ ...dateRange, start: e.target.value })
                }
                className="text-sm text-gray-600 border-none outline-none"
              />
              <span className="text-gray-400">→</span>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) =>
                  setDateRange({ ...dateRange, end: e.target.value })
                }
                className="text-sm text-gray-600 border-none outline-none"
              />
            </div>

            {/* Filters Button */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Filters</span>
            </button>

            {/* Worksheet Button */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <FileSpreadsheet className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Worksheet</span>
            </button>

            {/* More Button */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <span className="text-sm text-gray-700">More</span>
              <MoreHorizontal className="w-4 h-4 text-gray-500" />
            </button>

            {/* Export Button */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Export</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <span>Bill Date</span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </div>
            <div>ID</div>
            <div>Patient Info</div>
            <div>Referral</div>
            <div>Tests</div>
            <div>Amount</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg font-medium mb-2">No data</p>
            <p className="text-gray-400 text-sm">
              No billing records found for the selected criteria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaitentListPage;
