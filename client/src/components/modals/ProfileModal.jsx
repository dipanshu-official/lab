import React from 'react';

const ProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-80 p-4 space-y-4">
        {/* Header */}
        <div>
          <h2 className="font-semibold text-lg">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.phone}</p>
        </div>

        {/* Actions */}
        <ul className="space-y-2">
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded">
            ✏️ Edit Profile
          </li>
          <li className="flex items-center gap-2 px-2 py-1">
            🛡️ Browser Code: <span className="font-mono">{user.browserCode}</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer text-red-600 hover:bg-gray-100 px-2 py-1 rounded">
            🗑️ Delete Account
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded">
            🔓 Logout
          </li>
        </ul>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
