import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");


  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
    
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blogpage/all`);
      if (res.data && res.data.success) {
        setBlogs(res.data.data);
      }
    } catch (err) {
      toast.error("Could not load blogs.");
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId) => {
   
      try {

        const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/blogpage/${blogId}`);
        if (res.data && res.data.success) {
          setBlogs(blogs.filter((blog) => blog._id !== blogId));
          toast.success("Blog deleted successfully!");
        }
      } catch (err) {
        toast.error("Could not delete blog.");
        console.error("Error deleting blog:", err);
      }
    
  };

  const handleStatusToggle = async (blogId, currentStatus) => {
    try {
     
      const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/blogpage/${blogId}`, {
        isPublished: !currentStatus,
      });
      if (res.data && res.data.success) {
        setBlogs(blogs.map((blog) => 
          blog._id === blogId 
            ? { ...blog, isPublished: !currentStatus }
            : blog
        ));
        toast.success(`Blog ${!currentStatus ? 'published' : 'unpublished'} successfully!`);
      }
    } catch (err) {
      toast.error("Could not update blog status.");
      console.error("Error updating blog status:", err);
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredAndSortedBlogs = blogs
    .filter((blog) => {
      
      return blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (sortField === "createdAt" || sortField === "scheduledFor") {
        aValue = new Date(aValue || 0);
        bValue = new Date(bValue || 0);
      } else if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const getSortIcon = (field) => {
    if (sortField !== field) return "↕";
    return sortDirection === "asc" ? "↑" : "↓";
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Loading blogs...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto py-8">
      <div className=" p-8 ">
        <div className=" flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
          
            <p className="text-gray-600">Manage and view all your blog posts</p>
          </div>
          <div className="mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-purple-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 w-full md:w-64"
            />
          </div>
        </div>

        <div className=" overflow-x-auto">
          <table className="w-[1450px] border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                
                <th 
                  className="text-left p-4 font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort("_id")}
                >
                  ID {getSortIcon("_id")}
                </th>
                <th 
                  className="text-left p-4 font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort("title")}
                >
                  Title {getSortIcon("title")}
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">Image</th>
                <th 
                  className="text-left p-4 font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort("category")}
                >
                  Category {getSortIcon("category")}
                </th>
                <th 
                  className="text-left p-4 font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort("author")}
                >
                  Author {getSortIcon("author")}
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">Created By</th>
           
                <th 
                  className="text-left p-4 font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort("isPublished")}
                >
                  Status {getSortIcon("isPublished")}
                </th>
                <th 
                  className="text-left p-4 font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort("date")}
                >
                  Date {getSortIcon("date")}
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedBlogs.length === 0 ? (
                <tr>
                  <td colSpan="11" className="text-center py-8 text-gray-500">
                    {searchTerm ? "No blogs found matching your search." : "No blogs created yet."}
                  </td>
                </tr>
              ) : (
                filteredAndSortedBlogs.map((blog) => (
                  <tr key={blog._id} className="border-b border-gray-100 hover:bg-gray-50">
                   
                    <td className="p-4 text-sm text-gray-600">{blog._id.slice(-4)}</td>
                    <td className="p-4">
                      <div className="max-w-xs">
                        <div className="font-medium text-gray-900 truncate">
                          {blog.title}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-16 h-12 object-cover rounded border"
                        />
                      ) : (
                        <div className="w-16 h-12 bg-gray-200 rounded border flex items-center justify-center text-xs text-gray-500">
                          NO IMAGE
                        </div>
                      )}
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                        {blog.category}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{blog.author}</td>
                    <td className="p-4 text-sm text-gray-600">admin</td>
                   
                    <td className="p-4">
                      {blog.isScheduled && new Date(blog.scheduledFor) > new Date() ? (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Scheduled
                        </span>
                      ) : (
                        <button
                          onClick={() => handleStatusToggle(blog._id, blog.isPublished)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                            blog.isPublished || (blog.isScheduled && new Date(blog.scheduledFor) <= new Date())
                              ? "bg-green-100 text-green-800 hover:bg-green-200"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                        >
                          {blog.isPublished || (blog.isScheduled && new Date(blog.scheduledFor) <= new Date()) 
                            ? "Published" 
                            : "Draft"}
                        </button>
                      )}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {blog.isScheduled && blog.scheduledFor ? (
                        <span title={new Date(blog.scheduledFor).toLocaleString()}>
                          {new Date(blog.scheduledFor) > new Date() ? (
                            <>
                              {new Date(blog.scheduledFor).toLocaleDateString()} {new Date(blog.scheduledFor).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </>
                          ) : (
                            <>
                              Published: {new Date(blog.scheduledFor).toLocaleDateString()} {new Date(blog.scheduledFor).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </>
                          )}
                        </span>
                      ) : (
                        <>
                          Published: {blog.date}
                        </>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                      
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                          title="Delete"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                        <button
                          onClick={() => navigate(`/dashboard/blog/edit/${blog._id}`)}
                          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                          title="Edit"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                  
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing {filteredAndSortedBlogs.length} of {blogs.length} blogs
          </div>
          <div className="text-sm text-gray-600">
            Total blogs: {blogs.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
