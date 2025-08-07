import React, { useState } from 'react';

const LabProfilePage = () => {
  const [formData, setFormData] = useState({
    labName: 'Dipanshu pathology',
    ownerName: 'Dipanshu Kumar',
    contact: '7049711475',
    email: 'hellodipanshu47@gmail.com',
    city: '',
    website: 'https://flabslis.com/',
    address: 'Betaura Beur Anishabad Patna -2',
    username: '',
    accountNumber: '0000000000',
    holderName: 'Dipanshu kumar',
    ifscCode: 'jjjakajks',
    emailId: 'admin@gmail.com'
  });

  const [activeTab, setActiveTab] = useState('Lab Details');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const tabs = ['Lab Details', 'Report Details', 'Bill Details', 'Doctor Details'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Form Section */}
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Lab Information Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> Lab Name
                </label>
                <input
                  type="text"
                  value={formData.labName}
                  onChange={(e) => handleInputChange('labName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> Owner Name
                </label>
                <input
                  type="text"
                  value={formData.ownerName}
                  onChange={(e) => handleInputChange('ownerName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">*</span> Contact
                </label>
                <div className="flex">
                  <div className="flex items-center px-3 py-2 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='14'%3E%3Crect width='20' height='14' fill='%23ff9933'/%3E%3Crect y='4.67' width='20' height='4.67' fill='%23fff'/%3E%3Crect y='9.33' width='20' height='4.67' fill='%23138808'/%3E%3C/svg%3E" alt="IN" className="w-5 h-3 mr-2" />
                    <span className="text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={formData.contact}
                    onChange={(e) => handleInputChange('contact', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Id
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select City</option>
                  <option value="patna">Patna</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md text-sm text-gray-500">
                    https://
                  </span>
                  <input
                    type="text"
                    value={formData.website.replace('https://', '')}
                    onChange={(e) => handleInputChange('website', 'https://' + e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                maxLength={100}
              />
              <div className="text-xs text-gray-500 mt-1 text-right">31 / 100</div>
            </div>

            {/* Login Password Section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Set Login Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> Username
                  </label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-end">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            {/* Razorpay Integration Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-medium text-gray-900">Razorpay Integration</h3>
                <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">i</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> Account Number
                  </label>
                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> Holder Name
                  </label>
                  <input
                    type="text"
                    value={formData.holderName}
                    onChange={(e) => handleInputChange('holderName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> IFSC Code
                  </label>
                  <input
                    type="text"
                    value={formData.ifscCode}
                    onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> Email Id
                  </label>
                  <input
                    type="email"
                    value={formData.emailId}
                    onChange={(e) => handleInputChange('emailId', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-end">
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Request Pending
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 space-y-6">
            {/* Free Trial Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">FREE TRIAL</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subscription Plan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subscription End Date</span>
                  <span className="text-blue-600 font-medium">09/08/2025</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Preview Bill
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Preview Report
              </button>
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabProfilePage;