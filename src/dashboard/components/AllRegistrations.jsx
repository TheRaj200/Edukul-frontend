import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
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

  const labelMap = useMemo(
    () => ({
      _id: 'ID',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
      address: 'Address',
      city: 'City',
      state: 'State',
      pincode: 'Pincode',
      class: 'Class',
      stream: 'Stream',
      schoolName: 'School Name',
      schoolBoard: 'School Board',
      previousPercentage: 'Previous Percentage',
      examMode: 'Exam Mode',
      examDate: 'Exam Date',
      
      __v: 'Version',
    }),
    []
  );

  const formatValue = (key, value) => {
    if (value === null || value === undefined || value === '') return '—';
    const isDateKey = ['dateOfBirth', 'examDate', 'createdAt', 'updatedAt'].includes(key);
    if (isDateKey) {
      const d = new Date(value);
      if (!isNaN(d.getTime())) {
        return key === 'dateOfBirth' || key === 'examDate' ? d.toLocaleDateString() : d.toLocaleString();
      }
    }
    if (Array.isArray(value)) return value.join(', ');
    if (typeof value === 'object') return JSON.stringify(value, null, 2);
    return String(value);
  };

  const openDetails = (reg) => {
    setSelected(reg);
    setOpen(true);
  };

  const closeDetails = () => {
    setOpen(false);
    // Delay clearing selected to allow close animation (if any)
    setTimeout(() => setSelected(null), 150);
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
                        <button onClick={() => openDetails(r)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
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
      {open && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal
          role="dialog"
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeDetails();
          }}
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeDetails} />
          <div className="relative z-10 w-full max-w-4xl rounded-lg bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <h2 className="text-lg font-semibold">Registration Details</h2>
              <button
                onClick={closeDetails}
                className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto px-5 py-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {Object.entries(selected)
                  .filter(([k]) => !['__v', 'ipAddress', 'userAgent', 'source', 'createdAt', 'updatedAt'].includes(k))
                  .map(([key, val]) => (
                    <div key={key} className="rounded border bg-white p-3">
                      <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
                        {labelMap[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                      </div>
                      <div className="mt-1 whitespace-pre-wrap break-words text-sm text-gray-900">
                        {formatValue(key, val)}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 border-t px-5 py-3">
              <button
                onClick={closeDetails}
                className="rounded border px-4 py-2 text-sm hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllRegistrations;
