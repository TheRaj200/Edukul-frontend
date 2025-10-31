import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AllBlogs from './components/AllBlogs';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import AllRegistrations from './components/AllRegistrations';



const DashboardContent = () => {
  return (
    <div className="flex-1 p-10 ml-64">
      <Routes>
        {/* Default redirect when visiting /dashboard */}
        <Route index element={<Navigate to="registrations" replace />} />

        <Route path="all-blogs" element={
          <div>
            <h1 className="text-3xl font-bold mb-5">All Blogs</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <AllBlogs />
            </div>
          </div>
        } />
        <Route path="registrations" element={
          <div>
            <h1 className="text-3xl font-bold mb-5">Registrations</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <AllRegistrations />
            </div>
          </div>
        } />
        <Route path="create-blog" element={
          <div>
            
            <div className="">
              <CreateBlog />
            </div>
          </div>
        } />
        <Route path="blog/edit/:id" element={
          <div>
            <div className="">
              <EditBlog />
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex border-gray-100 min-h-screen">
      <Sidebar />
      <div className="w-[100%] h-screen m-auto">
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard; 