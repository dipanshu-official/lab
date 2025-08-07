import React, { useState } from 'react';
import { Search, Download, Plus, Eye, Edit2, Trash2 } from 'lucide-react';

export default function RefrallistPage() {
  const [selectedTab, setSelectedTab] = useState('Referring Doctor');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCenter, setSelectedCenter] = useState('Select B2B Center');

  const tabs = [
    'Referring Doctor',
    'Referring Hospital', 
    'Second Referral',
    'PRO',
    'TPA',
    'Government Panel',
    'Phlebotomist'
  ];

  const doctorsData = [
    {
      id: 1,
      name: 'testDoctor',
      contact: '1234567890',
      commission: '10%',
      email: 'hellodrahul@gmail.com',
      b2b: '',
      loginAccess: true
    },
    {
      id: 2,
      name: 'DR Dipanshu',
      contact: '8434300472',
      commission: '12%',
      email: 'dil@gmail.com',
      b2b: '',
      loginAccess: true
    },
    {
      id: 3,
      name: 'DR Sarah Johnson',
      contact: '9876543210',
      commission: '15%',
      email: 'sarah.johnson@hospital.com',
      b2b: '',
      loginAccess: false
    },
    {
      id: 4,
      name: 'DR Michael Chen',
      contact: '7890123456',
      commission: '8%',
      email: 'mchen@medcenter.org',
      b2b: '',
      loginAccess: true
    },
    {
      id: 5,
      name: 'DR Priya Sharma',
      contact: '9123456789',
      commission: '14%',
      email: 'priya.sharma@clinic.in',
      b2b: '',
      loginAccess: true
    }
  ];

  const filteredDoctors = doctorsData.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleLoginAccess = (id) => {
    // In a real app, this would update the backend
    console.log(`Toggling login access for doctor ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  selectedTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Header Controls */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <select
                value={selectedCenter}
                onChange={(e) => setSelectedCenter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Select B2B Center</option>
                <option>Center A</option>
                <option>Center B</option>
                <option>Center C</option>
              </select>
              
              <button className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              
              <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sr. No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commission (%)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  B2B
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Login Access
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commission
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDoctors.map((doctor, index) => (
                <tr key={doctor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {doctor.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {doctor.contact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {doctor.commission}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    {doctor.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {doctor.b2b}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleLoginAccess(doctor.id)}
                      className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      style={{
                        backgroundColor: doctor.loginAccess ? '#3B82F6' : '#D1D5DB'
                      }}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          doctor.loginAccess ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="flex items-center px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                      <Plus className="w-3 h-3 mr-1" />
                      Add
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-green-600 hover:bg-green-100 rounded">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-100 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No doctors found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}