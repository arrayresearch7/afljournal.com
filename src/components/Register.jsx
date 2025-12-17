import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav=useNavigate();
  const [formData, setFormData] = useState({
    givenName: "",
    familyName: "",
    country: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/v1/register", formData);
      alert(res.data.message);
      setFormData({
        givenName: "",
        familyName: "",
        country: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
      });
      nav('/login');
    } catch (err) {
      alert(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <>
      <Header />
      <main className="py-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Register</h1>

            <form className="space-y-4 max-w-2xl" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Given Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="givenName"
                    value={formData.givenName}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Family Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="familyName"
                    value={formData.familyName}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <label className="block text-sm font-medium mb-1">
                    Repeat Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a href="/login" className="text-blue-700 underline">
                  Login
                </a>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[#344d85] text-white"
                >
                  Register
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

export default Register;
