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
  const isAboutActive = ["/about", "/submissions"].includes(location.pathname);

  return (
    <header className="bg-[#f5f9ff] border-b border-[#dbeafe]">
      {/* Top */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <img
          src="/logo_a.png"
          alt="Applied Finance Insights"
          className="h-14 rounded-xl"
        />

        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className="hidden lg:flex gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
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
        } lg:flex max-w-7xl mx-auto px-6 pb-4 gap-6 text-gray-700 font-semibold`}
      >
        {[
          { path: "/", label: "Home" },
          { path: "/editorial-team", label: "Current" },
          { path: "/archives", label: "Archives" },
          { path: "/announcements", label: "Announcements" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded-md transition ${
              isActive(item.path)
                ? "text-blue-600 bg-blue-50"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            {item.label}
          </Link>
        ))}

        {/* About */}
        <div className="relative">
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className={`px-3 py-2 rounded-md transition ${
              isAboutActive
                ? "text-blue-600 bg-blue-50"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            About ▾
          </button>

          {aboutOpen && (
            <div className="absolute mt-2 w-56 bg-white border border-blue-100 rounded-md shadow-lg">
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-blue-50"
              >
                About the Journal
              </Link>
              <Link
                to="/submissions"
                className="block px-4 py-2 hover:bg-blue-50"
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
