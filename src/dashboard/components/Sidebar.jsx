import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext.jsx';

const icons = {
   
    Blog: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>
    ),
    Registrations: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h8M8 15h8M8 7h8" /></svg>
    ),

  };
  
  const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();

    
    const handleLogout = () => {
      logout();
      // Use replace so back button doesn't return to a protected page
      navigate('/login', { replace: true });
    };

    return (
      <div className="w-64 h-screen bg-gray-900 text-gray-300 flex flex-col fixed">
      
        <div className="p-5 text-2xl font-semibold border-b border-gray-800 text-white flex items-center gap-3 flex-shrink-0">
          <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span>Edukul </span>
        </div>
        

        <nav className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <ul className="py-4" style={{ scrollbarWidth: 'none' }}>
                 
            {/* All Blogs Link */}
            <li>
              <div
                className={`
                  flex items-center gap-4 px-5 py-3 mx-2 my-1 rounded-md
                  text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out
                  ${location.pathname.includes('/dashboard/all-blogs') || location.pathname.includes('/dashboard/blog/edit')
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'hover:bg-gray-700 hover:text-white'
                  }
                `}
                onClick={() => navigate('/dashboard/all-blogs')}
              >
                {icons.Blog}
                <span>All Blogs</span>
              </div>
            </li>

            {/* Registrations Link */}
            <li>
              <div
                className={`
                  flex items-center gap-4 px-5 py-3 mx-2 my-1 rounded-md
                  text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out
                  ${location.pathname.includes('/dashboard/registrations')
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'hover:bg-gray-700 hover:text-white'
                  }
                `}
                onClick={() => navigate('/dashboard/registrations')}
              >
                {icons.Registrations}
                <span>Registrations</span>
              </div>
            </li>

            {/* Create Blog Link */}
            <li>
              <div
                className={`
                  flex items-center gap-4 px-5 py-3 mx-2 my-1 rounded-md
                  text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out
                  ${location.pathname === '/dashboard/create-blog'
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'hover:bg-gray-700 hover:text-white'
                  }
                `}
                onClick={() => navigate('/dashboard/create-blog')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Create Blog</span>
              </div>
            </li>
          </ul>
        </nav>
        
  
        <div className="p-5 border-t border-gray-800 flex flex-col gap-4 flex-shrink-0">
          <button
            onClick={handleLogout}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-700 via-purple-500 to-orange-400 text-white font-bold text-md shadow hover:scale-105 transition-transform duration-200"
          >
            Logout
          </button>
          <p className="text-xs text-gray-500">© 2025 Adryter. All rights reserved.</p>
        </div>
        
        <style>{`
          nav::-webkit-scrollbar {
            display: none;
          }
          nav {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    );
  };
  
  export default Sidebar; 