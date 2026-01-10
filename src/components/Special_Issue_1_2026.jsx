import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const articles = [
  {
    title:
      "Digital Training Programs and Their Influence on Employee Productivity in the Technology Sector",
    authors:
      "MR.RANABIR GHOSHY, DR. BYJU JOHN",
    pages: "112–119",
    pdfUrl: "/vol-15/2.pdf",
  },
  {
    title:
      "Effect of Social Media, Influencer Marketing, and Digital Technologies on Cosmetic Buying Behaviour",
    authors:
      "MR. SUBHASIS BANDYOPADHYAY, DR. BYJU JOHN",
    pages: "105–111",
    pdfUrl: "/vol-15/1.pdf",
  },
];

const Special_Issue_1_2026 = () => {
  return (
    <>
      <Header />

      {/* DIFFERENT BACKGROUND */}
      <main className="min-h-screen py-24 bg-gradient-to-br from-slate-100 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER STYLE DIFFERENT */}
          <div className="mb-14">
            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
              Special Issue 1 2026
            </h1>
            <p className="mt-3 text-sm text-indigo-600 font-medium">
              Volume 15 · 2026 
            </p>
          </div>

          {/* GRID – SAME STRUCTURE, DIFFERENT CARD LOOK */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl
                border border-indigo-100
                shadow-[0_10px_30px_rgba(99,102,241,0.12)]
                hover:shadow-[0_20px_45px_rgba(99,102,241,0.25)]
                transition-all duration-300
                flex flex-col justify-between"
              >
                {/* TOP ACCENT BAR */}
                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-t-3xl" />

                <div className="p-7 space-y-4">
                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-semibold text-slate-900
                    hover:text-indigo-600 transition"
                  >
                    {article.title}
                  </a>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.authors}
                  </p>
                </div>

                {/* FOOTER DIFFERENT BUTTON STYLE */}
                <div className="px-7 py-5 border-t border-indigo-50
                flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Pages: {article.pages}
                  </span>

                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold rounded-full
                    bg-indigo-600 text-white
                    hover:bg-indigo-700 transition"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Special_Issue_1_2026;
