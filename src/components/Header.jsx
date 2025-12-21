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
    <header className="bg-[#145a45] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <img src="/logo_a.png" alt="Journal Logo" className="h-16 rounded-xl" />

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className="hidden lg:flex gap-4">
          {!isLoggedIn ? (
            <>
              <Link to="/register" className="bg-yellow-500 px-4 py-2 rounded-full text-black font-bold">Register</Link>
              <Link to="/login" className="bg-purple-100 px-4 py-2 rounded-full text-purple-800 font-bold">Login</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="bg-yellow-500 px-4 py-2 rounded-full text-black font-bold">
              Logout
            </button>
          )}
        </div>
      </div>

      <nav className={`${menuOpen ? "block" : "hidden"} lg:flex gap-6 px-6 pb-4 font-bold`}>
        <Link to="/" className={isActive("/") ? "text-yellow-400" : ""}>Home</Link>
        <Link to="/editorial-team" className={isActive("/editorial-team") ? "text-yellow-400" : ""}>Current</Link>
        <Link to="/archives" className={isActive("/archives") ? "text-yellow-400" : ""}>Archives</Link>
        <Link to="/announcements" className={isActive("/announcements") ? "text-yellow-400" : ""}>Announcements</Link>

        <div className="relative">
          <button onClick={() => setAboutOpen(!aboutOpen)} className={isAboutActive ? "text-yellow-400" : ""}>
            About ▾
          </button>

          {aboutOpen && (
            <div className="absolute bg-white text-black mt-2 rounded shadow w-56">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About the Journal</Link>
              <Link to="/submissions" className="block px-4 py-2 hover:bg-gray-100">Submissions</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
