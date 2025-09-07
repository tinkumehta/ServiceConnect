import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({...user});

  const handleSave = () => {
    // In a real app, you would save the changes to your backend here
    console.log("Saving changes:", editedUser);
    setIsEditing(false);
    // Update user context if needed
  };

  const handleChange = (field, value) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Profile Header with Gradient */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center relative">
          <div className="absolute top-4 right-4">
            <span className="bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {user.role || 'Member'}
            </span>
          </div>
          
          <div className="relative inline-block">
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-36 h-36 rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
            <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          
          <h1 className="text-3xl font-bold text-white mt-4">My Profile</h1>
          <p className="text-blue-100 mt-2">Welcome to your personal space</p>
        </div>

        {/* Profile Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Personal Information
              </h2>
              
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={editedUser.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Username</label>
                    <input
                      type="text"
                      value={editedUser.username}
                      onChange={(e) => handleChange('username', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                    <input
                      type="email"
                      value={editedUser.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-600">Name:</span> 
                    <span className="block mt-1 text-lg font-medium text-gray-800">{user.name}</span>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-600">Username:</span> 
                    <span className="block mt-1 text-lg font-medium text-gray-800">@{user.username}</span>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-600">Email:</span> 
                    <span className="block mt-1 text-lg font-medium text-gray-800">{user.email}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Account Details
              </h2>
              
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-600">Member Since:</span> 
                  <span className="block mt-1 text-gray-800">August 2025</span>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-600">Status:</span> 
                  <span className="block mt-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </span>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-600">Last Login:</span> 
                  <span className="block mt-1 text-gray-800">Today at 10:30 AM</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            {isEditing ? (
              <>
                <button 
                  onClick={handleSave}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Save Changes
                </button>
                <button 
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-medium rounded-xl shadow-md hover:from-gray-500 hover:to-gray-600 transition-all duration-300"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}