import React from "react";

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

const SpecialIssue12026 = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900">
          Special Issue 1 2026
        </h1>
        <p className="mt-2 text-slate-600">
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8
            transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <h2 className="text-lg font-bold text-slate-900 leading-snug">
              {article.title}
            </h2>

            <p className="mt-3 text-sm text-slate-600">
              {article.authors}
            </p>

            {/* FOOTER */}
            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Pages · {article.pages}
              </span>

              <a
                href={article.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-sm font-semibold text-white
                bg-gradient-to-r from-indigo-500 to-cyan-500
                shadow hover:shadow-lg"
              >
                View PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialIssue12026;
