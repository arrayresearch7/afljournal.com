import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const articlesData = [ /* SAME DATA */ ];

const Vol_11 = () => {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  const handleSearch = (q) => {
    q = q.toLowerCase();
    setFilteredArticles(
      articlesData.filter(a => a.title.toLowerCase().includes(q))
    );
  };

  return (
    <>
      <Header />

      <section className="relative bg-slate-50 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-cyan-100 opacity-70" />
        <div className="relative max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold text-slate-900">
            Volume 11 · 2022
          </h1>
          <p className="mt-4 text-slate-600">Published on March 05, 2022</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="lg:col-span-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">Research Articles</h2>

          {filteredArticles.map((a, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl p-8">
              <a href={a.pdfUrl} target="_blank"
                 className="text-xl font-bold hover:text-indigo-600">
                {a.title}
              </a>
              <p className="mt-3 text-slate-600">{a.authors}</p>
              <div className="mt-6 flex justify-between">
                <span className="text-sm text-slate-500">Pages · {a.pages}</span>
                <a href={a.pdfUrl} className="px-6 py-2 rounded-full
                bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                  View PDF
                </a>
              </div>
            </div>
          ))}
        </main>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-6">
            <Search onSearch={handleSearch} />
          </div>
        </aside>
      </section>

      <Footer />
    </>
  );
};

export default Vol_11;
