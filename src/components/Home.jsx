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

      {/* LIGHT HERO + PLATFORM LAYOUT */}
      <main className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* MAIN CONTENT */}
            <div className="lg:col-span-2 space-y-12">
              {/* HERO BLOCK */}
              <div className="pl-6 border-l-4 border-blue-500">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                  Applied Finance Insights
                </h1>

                <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600">
                  This journal is an independent academic platform created to support the dissemination of research and scholarly discussion in finance, economics, and related interdisciplinary areas. The journal aims to provide a neutral space for researchers, educators, and professionals to share original ideas and analytical insights. The platform operates independently and does not represent or claim affiliation with any university, institution, or existing academic journal.
                </p>
              </div>

              {/* CURRENT ISSUE */}
              <div className="pt-10 border-t border-slate-200">
                <h2 className="text-3xl font-bold text-slate-900">
                  Current Issue
                </h2>

                <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
                  <CurrentIssue />
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-4">
                <Search
                  onSearch={() => navigate("/current")}
                  className="bg-transparent"
                />
              </div>
            </aside>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
