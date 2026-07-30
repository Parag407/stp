import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <hr className="text-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://silvertcfitting.in/img/stflogo1.png"
                alt="Silver TC Fitting"
                className="h-10 w-auto drop-shadow-black"
              />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Premium pipes, valves, and fittings for dairy, pharmaceutical, and
              industrial applications since 2010.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-yellow rounded-full inline-block"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Quality", path: "/quality" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200 text-sm hover:text-brand-yellow transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-yellow rounded-full inline-block"></span>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <svg
                  className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+919833251230"
                  className="hover:text-brand-yellow transition-colors"
                >
                  +91 98332 51230
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <svg
                  className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:silvertcfitting@gmail.com"
                  className="hover:text-brand-yellow transition-colors break-all"
                >
                  silvertcfitting@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <svg
                  className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  165 Ground Floor Parvati Bhavan, 3rd Kubharwada, Dr M.G
                  Mahimtura Marg Mumbai, Maharashtra <br/>400 004 <br/>India
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-yellow rounded-full inline-block"></span>
              Business Hours
            </h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white font-medium">
                  9:00 AM - 6:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">
                  9:00 AM - 2:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-brand-yellow font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-blue-300 text-sm">
              &copy; {new Date().getFullYear()} Silver TC Fitting. All rights
              reserved.
            </p>
            <p className="text-blue-400 text-xs">
              Premium Quality Pipes, Valves & Fittings
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
