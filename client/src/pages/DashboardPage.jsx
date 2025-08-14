import React, { useState } from "react";
import { Search, Menu, Bell, Settings, User, Plus, X } from "lucide-react";


const DashboardPage = () => {
  const [formData, setFormData] = useState({
    patientId: "250804001",
    designation: "MR",
    firstName: "",
    lastName: "",
    age: "",
    ageType: "Year",
    gender: "Male",
    referringDoctor: "",
    rateListType: "Main",
    dispatchMethods: ["Email", "Hardcopy", "SMS", "WhatsApp"],
    manualWhatsApp: false,
  });

  const [selectedDispatchMethods, setSelectedDispatchMethods] = useState([
    "Email",
    "Hardcopy",
    "SMS",
    "WhatsApp",
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDispatchMethodToggle = (method) => {
    setSelectedDispatchMethods((prev) => {
      if (prev.includes(method)) {
        return prev.filter((m) => m !== method);
      } else {
        return [...prev, method];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar and Main Content */}
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header with search and buttons */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search patient by phone number or name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors">
                📄 Quotation
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Bulk Registration
              </button>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Patient ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Patient ID
                </label>
                <input
                  type="text"
                  name="patientId"
                  value={formData.patientId}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  readOnly
                />
              </div>

              {/* Designation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Designation
                </label>
                <select
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="MR">MR</option>
                  <option value="MRS">MRS</option>
                  <option value="MS">MS</option>
                  <option value="DR">DR</option>
                </select>
              </div>

              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </div>

              {/* Age Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age Type
                </label>
                <select
                  name="ageType"
                  value={formData.ageType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="Year">Year</option>
                  <option value="Month">Month</option>
                  <option value="Day">Day</option>
                </select>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-sky-600 focus:ring-sky-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-sky-600 focus:ring-sky-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Female</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-sky-600 focus:ring-sky-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Other</span>
                  </label>
                </div>
              </div>

              {/* Referring Doctor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Referring Doctor
                </label>
                <div className="flex">
                  <input
                    type="text"
                    name="referringDoctor"
                    placeholder="Select"
                    value={formData.referringDoctor}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                  <button className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-200">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Rate List Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rate List Type
                </label>
                <select
                  name="rateListType"
                  value={formData.rateListType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="Main">Main</option>
                </select>
              </div>

              {/* Dispatch Methods */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dispatch Methods
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Email", "Hardcopy", "SMS", "WhatsApp"].map((method) => (
                    <span
                      key={method}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        selectedDispatchMethods.includes(method)
                          ? "bg-sky-100 text-sky-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {method}
                      <button
                        onClick={() => handleDispatchMethodToggle(method)}
                        className="ml-1 text-red-500 hover:text-red-700"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.manualWhatsApp}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          manualWhatsApp: e.target.checked,
                        }))
                      }
                      className="h-3 w-3 text-sky-600 focus:ring-sky-500 rounded"
                    />
                    <span className="ml-1 text-xs text-gray-700">
                      Manual WhatsApp
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors">
                Go to Billing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2"
          width="40rem"
          height="40rem"
          fill="none"
          viewBox="0 0 640 640"
        >
          <defs>
            <radialGradient
              id="radial-herobg"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(0 -276.97894 276.97894 0 320 320)"
            >
              <stop stopColor="#38bdf8"></stop>
              <stop offset="1" stopColor="#10b981" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
          <rect
            width="640"
            height="640"
            rx="320"
            fill="url(#radial-herobg)"
          ></rect>
        </svg>
      </div>
    </div>
  );
};

export default DashboardPage;
