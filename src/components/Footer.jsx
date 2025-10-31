const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="about" className="mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Centered logo + underline */}
        <div className="text-center">
          <img
            src="/images/website-logo.png"
            alt="Edukul"
            className="h-12 w-auto inline-block"
          />
          <span className="block h-1 w-24 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#fd9b36] to-[#076da0]" />
        </div>

        {/* Three-column content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold text-[#1d8dc4]">About Us</h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Edukul Aptitude & Science Test (EAST) is a rigorous, 1.5-hour
              examination for students in Classes 6 to 12, designed to assess
              their grasp in Mathematics, Physics, Chemistry, Biology, and
              Aptitude. This two-tier competition rewards top performers with
              cash prizes, scholarships, and certificates, while giving all
              participants recognition and an opportunity to benchmark their
              strengths.
            </p>
          </div>

          {/* For Support */}
          <div>
            <h4 className="text-lg font-semibold text-[#1d8dc4]">
              For Support
            </h4>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>
                Phone Number:
                <a href="tel:6262151600" className="ml-2 hover:text-[#076da0]">
                  6262151600
                </a>
                <span className="mx-1">/</span>
                <a href="tel:6262171800" className="hover:text-[#076da0]">
                  6262171800
                </a>
                <span className="mx-1">/</span>
                <a href="tel:07514904397" className="hover:text-[#076da0]">
                  07514904397
                </a>
              </li>
              <li>
                Mail us:
                <a
                  href="mailto:support@edukulclasses.com"
                  className="ml-2 hover:text-[#076da0]"
                >
                  support@edukulclasses.com
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                Whatsapp Us:
                <a
                  href="https://wa.me/6262171800"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center    "
                >
                  6262171800
                </a>
              </li>
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h4 className="text-lg font-semibold text-[#1d8dc4]">
               Address
            </h4>
            <ul className="mt-3 space-y-3 text-gray-700">
              <li>  
                <p className="text-sm mt-1">
                  Edukul Classes, Kailash Vihar, City Center, Near IT Office,
                  Gwalior (MP)
                </p>
              </li>
              <li>
                <p className="text-sm mt-1">
                  New Chandra Nagar, Maharani Laxmi Bai Colony, Padav, Gwalior,
                  Madhya Pradesh 474002
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rounded bar */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between rounded-2xl border border-violet-200 bg-white px-4 sm:px-6 py-3 shadow-sm">
            <p className="text-sm text-gray-600">
              © {year} Edukul Classes |
              <a href="#" className="mx-2 text-[#1d8dc4] hover:text-[#e6821f]">
                Privacy Policy
              </a>
              |
              <a href="#" className="ml-2 text-[#1d8dc4] hover:text-[#e6821f]">
                T&amp;C
              </a>
            </p>
            <div className="flex items-center gap-4 text-[#1d8dc4]">
              <a
                href="https://www.facebook.com/p/Edukul-61554348219116"
                aria-label="Facebook"
                className="hover:text-[#e6821f] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32V22c4.78-.8 8.44-4.94 8.44-9.94Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/edukulclasses"
                aria-label="Instagram"
                className="hover:text-[#e6821f] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm5.75-.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#e6821f] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.5h4.9V24H.5V8.5Zm7.3 0h4.7v2.1h.1c.7-1.3 2.5-2.7 5.1-2.7c5.5 0 6.6 3.6 6.6 8.2V24h-4.9v-6.9c0-1.6 0-3.7-2.2-3.7c-2.2 0-2.5 1.7-2.5 3.6V24H7.8V8.5Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@EdukulClass"
                aria-label="YouTube"
                className="hover:text-[#e6821f] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5A3.1 3.1 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3.1 3.1 0 0 0 2.2 2.2c1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.2V8.8L15.8 12l-6.2 3.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
