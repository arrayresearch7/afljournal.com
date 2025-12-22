import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const articles = [
  {
    title:
      "FinTech and Financial Inclusion: Empirical Evidence from Emerging Markets",
    authors:
      "Dr. Islam LEBCIR, CS Ankit Shah, Appa Rao Nagubandi, Dr. Satish Manikrao Dhoke, Dr. Gurmeet Singh Sikh, Prof Manoj Kumar Mishra",
    pages: "81–87",
    pdfUrl: "/vol-14/16.pdf",
  },
  {
    title:
      "Cryptocurrency Market Spillovers: Risk Contagion Across Global Financial Systems",
    authors:
      "Dr. Hardeep Singh, Dr. Debanjalee Bose, Appa Rao Nagubandi, S. Prabhu, Shrikanta Ganapati Naik",
    pages: "70–80",
    pdfUrl: "/vol-14/15.pdf",
  },
  {
    title:
      "ESG Investments and Firm Value: A Global Comparative Study",
    authors: "Dhiraj Sharma, Sumit Kushwaha, Ashish Gupta, Dr. Poonam",
    pages: "60–69",
    pdfUrl: "/vol-14/14.pdf",
  },
  {
    title:
      "Investor Behavior and Market Trends in the Global Green Bond and Climate Finance Landscape",
    authors:
      "Dr. R. Krishna Vardhan Reddy, Dr. B. Anjan Kumar, Dr. K. Kiran Kumar, Dr. S. Sreekanth",
    pages: "52–59",
    pdfUrl: "/vol-14/13.pdf",
  },
  {
    title:
      "Behavioural Biases in Retail Investing: Insights from Post-Pandemic Trading Patterns",
    authors: "Dr. Paladugu Yadaiah, Dr. Putti Selvaraj",
    pages: "42–51",
    pdfUrl: "/vol-14/12.pdf",
  },
  {
    title:
      "Green Bonds and Climate Finance: Market Trends and Investor Behavior",
    authors: "Aadya Jakhmola",
    pages: "33–41",
    pdfUrl: "/vol-14/11.pdf",
  },

  // 🔽 YE 2 MISSING WALE (AB FIX)
  {
    title:
      "Exploring the Evolution of FinTech and Technology Acceptance: Bibliometric Analysis of Research Trends and Future Gaps",
    authors: "Dr. Rachna Jain, Dr. Shikha Sharma",
    pages: "10–32",
    pdfUrl: "/vol-14/10.pdf",
  },
  {
    title:
      "Agentic AI for Autonomous CI/CD: Towards Self-Adaptive Financial Infrastructure Pipelines",
    authors: "1st Avinash Reddy Segireddy",
    pages: "1–9",
    pdfUrl: "/vol-14/9.pdf",
  },
];

const Current = () => {
  return (
    <>
      <Header />

      <main className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-purple-800">
              Vol. 14 (2025)
            </h1>
            <p className="mt-2 text-slate-600">
              Published: 2025-05-21
            </p>
          </div>

          <h2 className="text-xl font-semibold text-purple-700 mb-6">
            Articles submitted to regular issue
          </h2>

          {/* ARTICLE LIST */}
          <div className="space-y-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
              >
                <div>
                  <h3 className="text-lg font-bold text-purple-700">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm">
                    {article.authors}
                  </p>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <span className="text-sm text-slate-500">
                    Pages: {article.pages}
                  </span>

                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow hover:shadow-lg transition"
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

export default Current;
