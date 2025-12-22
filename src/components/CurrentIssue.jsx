import React from "react";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    title: "FinTech and Financial Inclusion: Empirical Evidence from Emerging Markets",
    authors: "Dr. Islam LEBCIR, CS Ankit Shah, Appa Rao Nagubandi, Dr. Satish Manikrao Dhoke, Dr. Gurmeet Singh Sikh, Prof Manoj Kumar Mishra",
    pages: "81-87",
    pdfUrl: "/vol-14/16.pdf",
  },
  {
    title: "Cryptocurrency Market Spillovers: Risk Contagion Across Global Financial Systems",
    authors: "Dr. Hardeep Singh, Dr. Debanjalee Bose, Appa Rao Nagubandi, S. Prabhu, Shrikanta Ganapati Naik",
    pages: "70-80",
    pdfUrl: "/vol-14/15.pdf",
  },
  {
    title: "ESG Investments and Firm Value: A Global Comparative Study",
    authors: "Dhiraj Sharma, Sumit Kushwaha , Ashish Gupta , DR. POONAM",
    pages: "60-69",
    pdfUrl: "/vol-14/14.pdf",
  },
  {
    title: "Investor Behavior and Market Trends in the Global Green Bond and Climate Finance Landscape",
    authors: "Dr. R. Krishna Vardhan Reddy, Dr. B. Anjan Kumar, Dr K. Kiran Kumar, Dr S. Sreekanth",
    pages: "52-59",
    pdfUrl: "/vol-14/13.pdf",
  },
  {
    title: "Behavioural Biases in Retail Investing: Insights from Post-Pandemic Trading Patterns",
    authors: "Dr.Paladugu Yadaiah, Dr.Putti Selvaraj",
    pages: "42-51",
    pdfUrl: "/vol-14/12.pdf",
  },
  {
    title: "Green Bonds and Climate Finance: Market Trends and Investor Behavior",
    authors: "Aadya Jakhmola",
    pages: "33-41",
    pdfUrl: "/vol-14/11.pdf",
  },
  {
    title: "Exploring the Evolution of FinTech and Technology Acceptance: Bibliometric Analysis of Research Trends and Future Gaps",
    authors: "Dr. Rachna Jain, Dr. Shikha Sharma",
    pages: "10-32",
    pdfUrl: "/vol-14/10.pdf",
  },
  {
    title: "Agentic AI for Autonomous CI/CD: Towards Self-Adaptive Financial Infrastructure Pipelines",
    authors: "1st Avinash Reddy Segireddy",
    pages: "1-9",
    pdfUrl: "/vol-14/9.pdf",
  },
  {
    title: "Sustainable Housing And Social Equity In Rapidly Urbanizing Regions",
    authors: "Dr. Franklin John Selvaraj1, Dr. Rishi2, Dr. Sunanda I. Kittali3, Dr. Saurabh Chandra4, Sreedevi5,Akansh Garg6",
    pages: "1-11",
    pdfUrl: "/Env/1.pdf",
  },
  {
    title: "Progressive Bilateral Visual Loss Due To Vincristine Induced Optic Neuropathy",
    authors: "Dr Nila C A1, Dr Latha M Sneha2, Dr Roja Raj3, Mr Selvaseelan",
    pages: "12-17",
    pdfUrl: "/Env/2.pdf",
  },
  {
    title: "The Role Of GST Reforms In Promoting Efficient Tax Administration And Public Policy Outcomes",
    authors: "1Rakesh Kumar Jain, * Dr. Anjali Gokhru2",
    pages: "18-35",
    pdfUrl: "/Env/3.pdf",
  },
  {
    title: "How Do Occupational Therapists in Israel Perceive the Impact of Health Systems Management on their Profession",
    authors: "Fatemah Ehaj Akariya",
    pages: "36-44",
    pdfUrl: "/Env/4.pdf",
  },
  {
    title: "Life Cycle Assessment Of Electric Vehicles: A Comparative Study On Environmental Impact With Conventional Automobiles",
    authors: "Dr. Pareshkumar D. Patel1, Dr. Sanjay Maganlal Patel2* ,Dr. Samarth Jayeshbhai Shelat3, Dr. NimitM. Patel4 , Dr. Vipul R. Bhatt5",
    pages: "41-52",
    pdfUrl: "/Env/5.pdf",
  },
  {
    title: "Organic Fermented Liquids, Eco-Friendly Approach For Sustainable Agriculture: A Review",
    authors: "Pooja Singh Sikarwar1, Sangeeta Tomar2, Pankaj Kumar Sahu",
    pages: "53-63",
    pdfUrl: "/Env/6.pdf",
  },
];

const CurrentIssue = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Current Issue
          </h2>
          <span className="text-sm text-slate-500">
            Vol. 14 (2025) · Published: 2025-05-21
          </span>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200
              shadow-sm hover:shadow-xl transition-all duration-300
              flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  className="block text-lg font-semibold text-slate-900
                  group-hover:text-blue-600 transition"
                >
                  {article.title}
                </a>

                <p className="text-sm text-slate-600 line-clamp-3">
                  {article.authors}
                </p>
              </div>

              <div className="px-6 py-4 border-t border-slate-100
              flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Pages: {article.pages}
                </span>

                <a
                  href={article.pdfUrl}
                  target="_blank"
                  className="text-sm font-semibold text-blue-600
                  hover:text-blue-700"
                >
                  View PDF →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="mt-12 flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/current")}
            className="px-6 py-3 rounded-xl text-sm font-semibold
            border border-slate-300 bg-white
            hover:bg-slate-50 transition"
          >
            View All Issues
          </button>

          <button
            onClick={() => navigate("/submissions")}
            className="px-6 py-3 rounded-xl text-sm font-semibold
            bg-gradient-to-r from-blue-500 to-blue-600
            text-white shadow hover:shadow-lg transition"
          >
            Make a Submission
          </button>
        </div>

      </div>
    </section>
  );
};

export default CurrentIssue;
