import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;
  const aboutRoutes = ["/about", "/submissions"];
  const isAboutActive = aboutRoutes.includes(location.pathname);

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <img
          src="/logo_a.png"
          alt="Journal Logo"
          className="h-12 rounded-lg"
        />

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-2xl font-bold text-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Auth buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="px-5 py-2 rounded-xl text-sm font-semibold
                bg-gradient-to-r from-blue-500 to-blue-600 text-white
                shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="px-5 py-2 rounded-xl text-sm font-semibold
                border border-blue-500 text-blue-600
                hover:bg-blue-50 transition"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-xl text-sm font-semibold
              bg-gradient-to-r from-blue-500 to-blue-600 text-white
              shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex items-center gap-8 px-6 pb-4 font-medium text-sm text-slate-700`}
      >
        <Link
          to="/"
          className={`transition hover:text-blue-600 ${
            isActive("/") ? "text-blue-600 font-semibold" : ""
          }`}
        >
          Home
        </Link>

        <Link
          to="/editorial-team"
          className={`transition hover:text-blue-600 ${
            isActive("/editorial-team") ? "text-blue-600 font-semibold" : ""
          }`}
        >
          Current
        </Link>

        <Link
          to="/archives"
          className={`transition hover:text-blue-600 ${
            isActive("/archives") ? "text-blue-600 font-semibold" : ""
          }`}
        >
          Archives
        </Link>

        <Link
          to="/announcements"
          className={`transition hover:text-blue-600 ${
            isActive("/announcements") ? "text-blue-600 font-semibold" : ""
          }`}
        >
          Announcements
        </Link>

        {/* About dropdown */}
        <div className="relative">
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className={`transition hover:text-blue-600 ${
              isAboutActive ? "text-blue-600 font-semibold" : ""
            }`}
          >
            About ▾
          </button>

          {aboutOpen && (
            <div className="absolute mt-3 w-56 rounded-xl bg-white
            border border-slate-200 shadow-xl overflow-hidden z-50">
              <Link
                to="/about"
                className="block px-4 py-3 text-sm text-slate-700
                hover:bg-slate-50 transition"
              >
                About the Journal
              </Link>
              <Link
                to="/submissions"
                className="block px-4 py-3 text-sm text-slate-700
                hover:bg-slate-50 transition"
              >
                Submissions
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
