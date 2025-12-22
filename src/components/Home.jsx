import React from "react";
import Header from "./Header";
import CurrentIssue from "./CurrentIssue";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative bg-slate-50 py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-cyan-100 opacity-70" />
        <div className="relative max-w-6xl mx-auto text-center px-6">
          <h1 className="text-6xl font-extrabold text-slate-900">
            Applied Finance Insights
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-600">
            An independent platform for contemporary research, analysis,
            and insights in finance and economics.
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT */}
        <main className="lg:col-span-8 space-y-10">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Current Issue
            </h2>
            <button
              onClick={() => navigate("/archives")}
              className="text-sm font-semibold text-indigo-600 hover:underline"
            >
              View Archives →
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <CurrentIssue />
          </div>
        </main>

        {/* RIGHT FLOATING TOOLS */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-6">
            <Search onSearch={() => navigate("/current")} />
          </div>
        </aside>
      </section>

      <Footer />
    </>
  );
};

export default Home;
