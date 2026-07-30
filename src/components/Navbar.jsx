import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import QuotationModal from "./QuotationModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Quality", path: "/quality" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuotation, setShowQuotation] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 700);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${location.pathname === "/" && !scrolled ? "bg-transparent lg:bg-white shadow-none lg:shadow-sm" : "bg-white shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="https://silvertcfitting.in/img/stflogo1.png"
                alt="Silver TC Fitting"
                className="h-10 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
  {navLinks.map((link) => {
    const isActive = location.pathname === link.path;
    return (
      <Link
        key={link.path}
        to={link.path}
        className={`relative px-4 py-2 text-[18px] font-medium transition-colors duration-200 ${
          isActive
            ? "text-brand-blue"
            : "text-gray-600 hover:text-brand-blue"
        }`}
      >
        {link.name}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue transform origin-left transition-transform duration-300 ease-out ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}></span>
      </Link>
    );
  })}
</div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowQuotation(true)}
                className="hidden lg:flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-brand-blue-light transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Quotation
              </button>
              <a
                href="tel:+919833251230"
                className="hidden sm:flex items-center gap-2 bg-brand-yellow text-brand-blue px-4 py-2 rounded-lg font-semibold text-sm hover:bg-brand-yellow-dark transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 98332 51230
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all ${location.pathname === "/" && !scrolled ? "text-white hover:text-white/80" : "text-gray-600 hover:text-brand-blue"}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
      )}

      <div className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-2xl lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full pt-20">
          <div className="flex items-center justify-between px-5 h-20 border-b border-gray-100">
            <img
              src="https://silvertcfitting.in/img/stflogo1.png"
              alt="Silver TC Fitting"
              className="h-8 w-auto"
            />
            {/* <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> */}
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-brand-blue text-white shadow-md"
                      : "text-gray-600 hover:text-brand-blue hover:bg-blue-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="px-4 pb-6 border-t border-gray-100 pt-4 space-y-3">
            <button
              onClick={() => { setShowQuotation(true); setIsOpen(false); }}
              className="flex items-center justify-center gap-2 w-full bg-brand-blue text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-brand-blue-light transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Get Quotation
            </button>
            <a
              href="tel:+919833251230"
              className="flex items-center justify-center gap-2 w-full bg-brand-yellow text-brand-blue px-4 py-3 rounded-xl font-semibold text-sm hover:bg-brand-yellow-dark transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 98332 51230
            </a>
          </div>
        </div>
      </div>

      <QuotationModal isOpen={showQuotation} onClose={() => setShowQuotation(false)} />
    </>
  );
}
