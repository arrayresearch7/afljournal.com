import React from 'react';
import Header from './Header';
import CurrentIssue from './CurrentIssue';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* Dark Hero + Premium Layout */}
      <main className="bg-[#0b1f17] min-h-screen">
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div className="border-l-4 border-[#d4af37] pl-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#f5f5f5]">
                  Applied Finance-Letters
                </h1>
                <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-300">
                  Applied Finance Letters is an open-access journal publishing mainly empirical research with implications and relevance for academia and the finance industry. The aim is to encourage high-quality contributions that foster discussions among academics, policymakers, and financial practitioners. The Journal welcomes submissions from all fields of finance and is especially interested in innovative and original contributions. Applied Finance Letters is B-ranked on the 2022 ABDC Journal Ranking List, is indexed by EconLit and DOAJ, and has a self-computed 2023 Impact Factor of 0.72.
                </p>
              </div>

              <div className="pt-8 border-t border-gray-700">
                <h2 className="text-3xl font-bold text-[#d4af37]">
                  Current Issue
                </h2>
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                  <CurrentIssue />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-[#122d23] border border-gray-700 rounded-xl shadow-lg p-4">
                <Search
                  onSearch={() => navigate('/current')}
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
