import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/v1/login", formData);

      // Save JWT token in localStorage
      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

      // Redirect to homepage
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Header />
      <main className="py-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Login</h1>

            <form className="space-y-4 max-w-xl" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <a href="#" className="text-blue-700 underline text-sm">
                  Forgot your password?
                </a>
              </div>

              <div className="flex items-center gap-2">
                <input id="keep" type="checkbox" className="h-4 w-4" defaultChecked />
                <label htmlFor="keep" className="text-sm">
                  Keep me logged in
                </label>
              </div>

              <div className="flex items-center gap-4">
                <a href="/register" className="text-blue-700 underline">
                  Register
                </a>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[#344d85] text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <Search />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
