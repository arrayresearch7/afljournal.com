import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ArticleDetail = () => {
  const { volume, index } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative bg-slate-50 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-cyan-100 opacity-70" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
            Article Details
          </h1>
          <p className="mt-4 text-slate-600">
            Volume {volume} · Article {index}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">
        {/* ABSTRACT */}
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Abstract
          </h2>
          <p className="text-slate-700 leading-relaxed">
            This article presents an academic investigation into contemporary
            issues relevant to finance, economics, and interdisciplinary
            research. The study contributes original insights intended to
            support scholarly discussion and practical understanding.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-xl border border-slate-300
            hover:bg-slate-100 transition"
          >
            ← Back to Volume
          </button>

          <a
            href={`/vol-${volume}/${index}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-center font-semibold
            text-white bg-gradient-to-r from-indigo-500 to-cyan-500
            shadow hover:shadow-xl transition"
          >
            Download PDF
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ArticleDetail;
