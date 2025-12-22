import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  return (
    <header className="relative z-50">

      {/* BRAND STRIP (CLEAN & SLIM) */}
      <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <img
            src="/logo_a.png"
            alt="Applied Finance Insights"
            className="h-12 drop-shadow-lg"
          />
          <span className="text-white font-bold text-lg tracking-tight">
            Applied Finance Insights
          </span>
        </div>
      </div>

      {/* FLOATING NAV BAR */}
      <div className="-mt-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl px-8 py-4 flex items-center justify-between">

            {/* NAV LINKS */}
            <nav className="flex gap-2 text-sm font-semibold text-slate-700">
              {[
                ["/", "Home"],
                ["/editorial-team", "Current"],
                ["/archives", "Archives"],
                ["/announcements", "Announcements"],
                ["/about", "About"],
              ].map(([path, label]) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2 rounded-full transition ${
                    isActive(path)
                      ? "bg-indigo-100 text-indigo-700"
                      : "hover:bg-slate-100"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* AUTH ACTIONS */}
            <div className="flex gap-3">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-semibold text-indigo-600
                    hover:bg-indigo-50 rounded-lg transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-5 py-2 text-sm font-semibold rounded-lg
                    bg-gradient-to-r from-indigo-500 to-cyan-500
                    text-white shadow-md hover:shadow-lg transition"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 text-sm font-semibold rounded-lg
                  bg-gradient-to-r from-indigo-500 to-cyan-500
                  text-white shadow-md"
                >
                  Logout
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
