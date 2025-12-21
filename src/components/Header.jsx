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
    <header className="bg-[#0b1f17] text-gray-100 shadow-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <img
          src="/logo_a.png"
          alt="Journal Logo"
          className="h-14 rounded-lg bg-[#0b1f17]"
        />

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-xl font-bold text-[#d4af37]"
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
                className="px-5 py-2 rounded-full text-sm font-semibold bg-[#d4af37] text-[#0b1f17] hover:bg-[#c9a635] transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-5 py-2 rounded-full text-sm font-semibold border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0b1f17] transition"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-full text-sm font-semibold bg-[#d4af37] text-[#0b1f17] hover:bg-[#c9a635] transition"
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
        } lg:flex items-center gap-8 px-6 pb-5 font-semibold text-sm`}
      >
        <Link
          to="/"
          className={`hover:text-[#d4af37] transition ${
            isActive("/") ? "text-[#d4af37]" : ""
          }`}
        >
          Home
        </Link>

        <Link
          to="/editorial-team"
          className={`hover:text-[#d4af37] transition ${
            isActive("/editorial-team") ? "text-[#d4af37]" : ""
          }`}
        >
          Current
        </Link>

        <Link
          to="/archives"
          className={`hover:text-[#d4af37] transition ${
            isActive("/archives") ? "text-[#d4af37]" : ""
          }`}
        >
          Archives
        </Link>

        <Link
          to="/announcements"
          className={`hover:text-[#d4af37] transition ${
            isActive("/announcements") ? "text-[#d4af37]" : ""
          }`}
        >
          Announcements
        </Link>

        {/* About dropdown */}
        <div className="relative">
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className={`hover:text-[#d4af37] transition ${
              isAboutActive ? "text-[#d4af37]" : ""
            }`}
          >
            About ▾
          </button>

          {aboutOpen && (
            <div className="absolute mt-3 w-56 rounded-xl bg-[#122d23] border border-gray-700 shadow-xl overflow-hidden z-50">
              <Link
                to="/about"
                className="block px-4 py-3 text-sm text-gray-200 hover:bg-[#1f3a2e] transition"
              >
                About the Journal
              </Link>
              <Link
                to="/submissions"
                className="block px-4 py-3 text-sm text-gray-200 hover:bg-[#1f3a2e] transition"
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
