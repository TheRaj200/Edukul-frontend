import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const limit = 10; // fixed page size

  useEffect(() => {
    fetchPage(page);
  }, [page]);

  const fetchPage = async (p = 1) => {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/registration?page=${p}&limit=${limit}`);
      if (res.data && res.data.success) {
        setRegistrations(res.data.data || []);
        setPages(res.data.meta?.pages || 1);
        setPage(res.data.meta?.page || p);
      }
    } catch (err) {
      console.error('Error fetching registrations', err);
      toast.error('Could not load registrations');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this registration?')) return;
    try {
      const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/registration/${id}`);
      if (res.data && res.data.success) {
        toast.success('Registration deleted');
        // refresh page
        fetchPage(page);
      }
    } catch (err) {
      console.error('Delete error', err);
      toast.error('Could not delete registration');
    }
  };

  if (loading) return (
    <div className="py-12"><div className="text-center text-gray-600">Loading registrations...</div></div>
  );

  return (
    <div className="max-w-8xl mx-auto py-8">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Registrations</h1>
            <p className="text-sm text-gray-600">View and manage registrations (10 per page)</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-3 text-left font-semibold text-gray-700">ID</th>
                <th className="p-3 text-left font-semibold text-gray-700">Name</th>
                <th className="p-3 text-left font-semibold text-gray-700">Email</th>
                <th className="p-3 text-left font-semibold text-gray-700">Phone</th>
                <th className="p-3 text-left font-semibold text-gray-700">Class</th>
                <th className="p-3 text-left font-semibold text-gray-700">Stream</th>
                <th className="p-3 text-left font-semibold text-gray-700">City</th>
                <th className="p-3 text-left font-semibold text-gray-700">Exam Date</th>
                <th className="p-3 text-left font-semibold text-gray-700">Registered At</th>
                <th className="p-3 text-left font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length === 0 ? (
                <tr>
                  <td colSpan={10} className="text-center py-8 text-gray-500">No registrations found.</td>
                </tr>
              ) : (
                registrations.map((r) => (
                  <tr key={r._id} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-sm text-gray-600">{r._id.slice(-6)}</td>
                    <td className="p-3 font-medium text-gray-900">{r.fullName}</td>
                    <td className="p-3 text-sm text-gray-600 break-all">{r.email}</td>
                    <td className="p-3 text-sm text-gray-600">{r.phone}</td>
                    <td className="p-3 text-sm text-gray-600">{r.class || 'N/A'}</td>
                    <td className="p-3 text-sm text-gray-600">{r.stream || 'N/A'}</td>
                    <td className="p-3 text-sm text-gray-600">{r.city || 'N/A'}</td>
                    <td className="p-3 text-sm text-gray-600">{r.examDate ? new Date(r.examDate).toLocaleDateString() : 'N/A'}</td>
                    <td className="p-3 text-sm text-gray-600">{r.createdAt ? new Date(r.createdAt).toLocaleString() : '-'}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button onClick={() => handleDelete(r._id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">Page {page} of {pages}</div>
          <div className="flex items-center gap-2">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1} className={`px-3 py-1 rounded ${page <= 1 ? 'bg-gray-200 text-gray-400' : 'bg-white border'}`}>Prev</button>
            <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={page >= pages} className={`px-3 py-1 rounded ${page >= pages ? 'bg-gray-200 text-gray-400' : 'bg-white border'}`}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRegistrations;
