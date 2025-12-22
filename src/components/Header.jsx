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
      {/* Brand Strip */}
      <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 py-6">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img
            src="/logo_a.png"
            alt="Applied Finance Insights"
            className="h-16 drop-shadow-xl"
          />
        </div>
      </div>

      {/* Floating Nav */}
      <div className="-mt-6">
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-4 flex justify-between items-center">
          <nav className="flex gap-6 text-sm font-semibold text-slate-700">
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

          <div className="flex gap-3">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 text-sm font-semibold rounded-lg
                  bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-sm font-semibold rounded-lg
                bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
