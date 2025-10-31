import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [testSeriesDropdownOpen, setTestSeriesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMobileOpen((prev) => !prev);
  const closeMenu = () => setIsMobileOpen(false);

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { href: "#courses", label: "Courses" },
    { href: "#testimonial", label: "Testimonial" },
  ];

  const routeLinks = [
    { to: "/day-boarding-benefits", label: "Day Boarding" },
  ];

  return (
    <>
      {/* Fixed, centered navbar wrapper */}
      <div className="fixed left-0 right-0 top-4 z-50 flex justify-center pointer-events-none">
        <header className="w-[80%] max-w-5xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-full pointer-events-auto">
          <nav className="flex items-center justify-between px-8 sm:px-8 py-3">
        
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/website-logo.png"
                alt="Edukul Logo"
                className="h-9 sm:h-10 w-auto"
              />
            </Link>
           <Link
                to="https://east.edukulclasses.com"
                className="text-2xl text-[#076da0]  md:hidden   font-extrabold  transition-colors animate-bounce "
              >
                 E<span className="text-[#ff7637e8]">AST</span>
              </Link>
            {/* Desktop Menu (right) */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="https://east.edukulclasses.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-[#076da0]  font-extrabold hover:text-[#fd9b36] transition-colors animate-bounce"
              >
                   E<span className="text-[#ff7637e8]">AST</span>
              </a>

              {/* Test Series with Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setTestSeriesDropdownOpen(true)}
                onMouseLeave={() => setTestSeriesDropdownOpen(false)}
              >
                <span className="text-[#076da0] font-semibold hover:text-[#fd9b36] transition-colors cursor-pointer">
                  Test Series
                </span>
                
                {/* Dropdown Menu */}
                {testSeriesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-0.5 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link
                      to="/test-series"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#fd9b36] transition-colors"
                      onClick={() => setTestSeriesDropdownOpen(false)}
                    >
                      JEE Test Series
                    </Link>
                    <Link
                      to="/neet-test-series"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#fd9b36] transition-colors"
                      onClick={() => setTestSeriesDropdownOpen(false)}
                    >
                      NEET Test Series
                    </Link>
                  </div>
                )}
              </div>

              {routeLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-[#076da0] font-semibold hover:text-[#fd9b36] transition-colors"
                >
                  {label}
                </Link>
              ))}
              
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavLinkClick(e, href)}
                  className="text-[#076da0] font-semibold hover:text-[#fd9b36] transition-colors cursor-pointer"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`h-0.5 w-6 bg-black transition-transform ${
                  isMobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-black transition-opacity ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-black transition-transform ${
                  isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </nav>
        </header>
      </div>

      {/* Spacer so content isn't hidden behind fixed navbar */}
      <div className="h-20 sm:h-24" />

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden fixed left-1/2 -translate-x-1/2 top-20 z-40 w-[92%] max-w-6xl transition-all duration-300 ${
          isMobileOpen ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-4">
          {/* Test Series with Mobile Dropdown */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setTestSeriesDropdownOpen(!testSeriesDropdownOpen)}
              className="w-full text-center py-3 text-gray-700 font-semibold hover:text-[#fd9b36] transition-colors flex items-center justify-between px-4"
            >
              <span>Test Series</span>
              <svg 
                className={`w-4 h-4 transition-transform ${testSeriesDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {testSeriesDropdownOpen && (
              <div className="pl-4 pb-2">
                <Link
                  to="/test-series"
                  onClick={() => {
                    closeMenu();
                    setTestSeriesDropdownOpen(false);
                  }}
                  className="block py-2 text-gray-600 hover:text-[#fd9b36] transition-colors"
                >
                  → JEE Test Series
                </Link>
                <Link
                  to="/neet-test-series"
                  onClick={() => {
                    closeMenu();
                    setTestSeriesDropdownOpen(false);
                  }}
                  className="block py-2 text-gray-600 hover:text-[#fd9b36] transition-colors"
                >
                  → NEET Test Series
                </Link>
              </div>
            )}
          </div>

          {routeLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenu}
              className="block w-full text-center py-3 text-gray-700 font-semibold hover:text-[#fd9b36] transition-colors border-b border-gray-200"
            >
              {label}
            </Link>
          ))}

          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavLinkClick(e, href)}
              className="block w-full text-center py-2 text-gray-700 hover:text-[#c16f1c] transition-colors cursor-pointer"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
