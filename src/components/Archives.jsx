import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Archives = () => {
  const volumes = [
    { id: "vol_14", title: "Volume 14 · 2025", published: "Feb 02, 2025" },
    { id: "vol_13", title: "Volume 13 · 2024", published: "May 31, 2024" },
    { id: "vol_12", title: "Volume 12 · 2023", published: "Jul 14, 2023" },
    { id: "vol_11", title: "Volume 11 · 2022", published: "Mar 05, 2022" },
  ];

  return (
    <>
      <Header />
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12 text-slate-900">
            Archives
          </h1>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {volumes.map((vol) => (
              <Link
                key={vol.id}
                to={`/${vol.id}`}
                className="group bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition"
              >
                <h2 className="text-xl font-bold text-slate-900">
                  {vol.title}
                </h2>
                <p className="mt-3 text-slate-500">
                  Published · {vol.published}
                </p>
                <span className="inline-block mt-6 text-indigo-600 font-semibold">
                  View Volume →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Archives;
