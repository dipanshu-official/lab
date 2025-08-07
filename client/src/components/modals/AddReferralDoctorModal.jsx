import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

export default function AddReferralDoctorModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    degree: '',
    phone: '',
    email: '',
    commission: '0'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Form data:', formData);
    // Handle save logic here
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button 
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Add Referral Doctor</h2>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Form Content */}
        <div className="p-4 space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              <span className="text-red-500">*</span> Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Degree Field */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Degree</label>
            <input
              type="text"
              placeholder="Degree"
              value={formData.degree}
              onChange={(e) => handleInputChange('degree', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
            <div className="flex">
              <div className="relative">
                <button className="flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-sm">
                  <span className="mr-1">🇮🇳</span>
                  <span>+91</span>
                  <ChevronDown size={16} className="ml-1 text-gray-400" />
                </button>
              </div>
              <input
                type="tel"
                placeholder="Contact"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Commission Field */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Commission (%)</label>
            <input
              type="number"
              value={formData.commission}
              onChange={(e) => handleInputChange('commission', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}