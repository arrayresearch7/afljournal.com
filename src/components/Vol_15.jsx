import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const articlesData = [
  {
    title:
      "Digital Training Programs and Their Influence on Employee Productivity in the Technology Sector",
    authors: "MR. RANABIR GHOSHY, DR. BYJU JOHN",
    pages: "1–10",
    pdfUrl: "/vol-15/1.pdf",
  },
  {
    title:
      "Effect of Social Media, Influencer Marketing, and Digital Technologies on Cosmetic Buying Behaviour",
    authors: "MR. SUBHASIS BANDYOPADHYAY, DR. BYJU JOHN",
    pages: "11–20",
    pdfUrl: "/vol-15/2.pdf",
  },
];

const Vol_15 = () => {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    setFilteredArticles(
      articlesData.filter((a) => a.title.toLowerCase().includes(q))
    );
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative bg-slate-50 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-cyan-100 opacity-70" />
        <div className="relative max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold text-slate-900">
            Volume 15 · 2026
          </h1>
          <p className="mt-4 text-slate-600">
            Published in 2026
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="lg:col-span-8 space-y-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Research Articles
          </h2>

          <div className="space-y-8">
            {filteredArticles.map((article, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl p-8 transition transform hover:-translate-y-1"
              >
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-slate-900 hover:text-indigo-600"
                >
                  {article.title}
                </a>

                <p className="mt-3 text-slate-600">{article.authors}</p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Pages · {article.pages}
                  </span>

                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full font-semibold text-white
                    bg-gradient-to-r from-indigo-500 to-cyan-500 shadow hover:shadow-lg"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
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

export default Vol_15;
