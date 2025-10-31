import React from 'react';
import Sidebar from './components/Sidebar';
import { useLocation } from 'react-router-dom';

const DashboardWrapper = ({ children }) => {
  const location = useLocation();
  
 
  const getSelectedMenuItem = () => {
    if (location.pathname.includes('/dashboard/blog/edit/')) {
      return '/dashboard/all-blogs'; 
    }
    return '/dashboard/all-blogs'; 
  };

  const selected = getSelectedMenuItem();

  return (
    <div className="flex border-gray-100 min-h-screen">
      <Sidebar />
      <div className="w-[100%] h-screen m-auto">
        <div className="flex-1 p-10 ml-64">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
