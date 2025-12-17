import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const articles = [
   {
  title: 'FinTech and Financial Inclusion: Empirical Evidence from Emerging Markets',
  authors: 'Dr. Islam LEBCIR, CS Ankit Shah, Appa Rao Nagubandi, Dr. Satish Manikrao Dhoke, Dr. Gurmeet Singh Sikh, Prof Manoj Kumar Mishra',
  pages: '81-87',
  pdfUrl: '/vol-14/16.pdf',
},      
   {
  title: 'Cryptocurrency Market Spillovers: Risk Contagion Across Global Financial Systems',
  authors: 'Dr. Hardeep Singh, Dr. Debanjalee Bose, Appa Rao Nagubandi , S. Prabhu ,Shrikanta Ganapati Naik',
  pages: '70-80',
  pdfUrl: '/vol-14/15.pdf',
},
   {
  title: 'ESG Investments and Firm Value: A Global Comparative Study',
  authors: 'Dhiraj Sharma, Sumit Kushwaha , Ashish Gupta , DR. POONAM',
  pages: '60-69',
  pdfUrl: '/vol-14/14.pdf',
},
   {
  title: 'Investor Behavior and Market Trends in the Global Green Bond and Climate Finance Landscape',
  authors: 'Dr. R. Krishna Vardhan Reddy, Dr. B. Anjan Kumar, Dr K. Kiran Kumar, Dr S. Sreekanth',
  pages: '52-59',
  pdfUrl: '/vol-14/13.pdf',
},
   {
  title: 'Behavioural Biases in Retail Investing:Insights from Post-Pandemic Trading Patterns',
  authors: 'Dr.Paladugu Yadaiah, Putti Selvaraj',
  pages: '42-51',
  pdfUrl: '/vol-14/12.pdf',
},
   {
  title: 'Green Bonds and Climate Finance: Market Trends and Investor Behavior',
  authors: 'Aadya Jakhmola',
  pages: '33-41',
  pdfUrl: '/vol-14/11.pdf',
},
  {
  title: 'Exploring the Evolution of FinTech and Technology Acceptance: Bibliometric Analysis of Research Trends and Future Gaps',
  authors: 'Dr. Rachna Jain, Dr. Shikha Sharma',
  pages: '10-32',
  pdfUrl: '/vol-14/10.pdf',
},
  {
    title: 'Agentic AI for Autonomous CI/CD: Towards Self-Adaptive Financial Infrastructure Pipelines',
    authors: '1st Avinash Reddy Segireddy',
    pages: '1-9',
    pdfUrl: '/vol-14/9.pdf',
  },
  {
    title: 'Sustainable Housing And Social Equity In Rapidly Urbanizing Regions',
    authors: 'Dr. Franklin John Selvaraj1, Dr. Rishi2, Dr. Sunanda I. Kittali3, Dr. Saurabh Chandra4, Sreedevi5,Akansh Garg6',
    pages: '1-11',
    pdfUrl: '/Env/1.pdf',
  },
  {
    title: 'Progressive Bilateral Visual Loss Due To Vincristine Induced Optic Neuropathy ',
    authors: 'Dr Nila C A1, Dr Latha M Sneha2, Dr Roja Raj3, Mr Selvaseelan ',
    pages: '12-17',
    pdfUrl: '/Env/2.pdf',
  },
  {
    title: 'The Role Of GST Reforms In Promoting Efficient Tax Administration And Public Policy Outcomes ',
    authors: '1Rakesh Kumar Jain, * Dr. Anjali Gokhru2',
    pages: '18-35',
    pdfUrl: '/Env/3.pdf',
  },
  {
    title: 'How Do Occupational Therapists in Israel Perceive the Impact of Health Systems Management on their Profession ',
    authors: 'Fatemah Ehaj Akariya',
    pages: '36-44',
    pdfUrl: '/Env/4.pdf',
  },
  {
    title: 'Life Cycle Assessment Of Electric Vehicles: A Comparative Study On Environmental Impact With Conventional Automobiles',
    authors: 'Dr. Pareshkumar D. Patel1, Dr. Sanjay Maganlal Patel2* ,Dr. Samarth Jayeshbhai Shelat3, Dr. NimitM. Patel4 , Dr. Vipul R. Bhatt5 ',
    pages: '41-52',
    pdfUrl: '/Env/5.pdf',
  },
  {
    title: 'Organic Fermented Liquids, Eco-Friendly Approach For Sustainable Agriculture: A Review ',
    authors: 'Pooja Singh Sikarwar1, Sangeeta Tomar2, Pankaj Kumar Sahu',
    pages: '53-63',
    pdfUrl: '/Env/6.pdf',
  },
];

const Current = () => {
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearch = (query) => {
    const results = articles.filter((a) =>
      a.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticles(results);
  };

  return (
    <>
      <Header />
      <main className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-purple-900 tracking-tight">
              Vol. 14 (2025)
            </h1>
            <p className="mt-2 text-base text-gray-700">
              <span className="font-semibold">Published:</span> 2025-05-21
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-purple-900">
                  Articles submitted to regular issue
                </h2>
                <div className="flex-1 border-t border-purple-300" />
              </div>

              <ul className="mt-6 space-y-6">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article, index) => (
                    <li
                      key={index}
                      className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <a
                        href={article.pdfUrl}
                        className="block text-lg font-bold text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                      >
                        {article.title}
                      </a>
                      <p className="mt-2 text-base text-gray-700">{article.authors}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <a
                          href={article.pdfUrl}
                          className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-gray-900 text-base font-bold transition-all duration-200 transform hover:scale-105"
                        >
                          PDF
                        </a>
                        <span className="text-base text-gray-600">Pages: {article.pages}</span>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="py-6 text-base text-gray-500">No articles found</p>
                )}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Search
              onSearch={handleSearch}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-4"
            />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Current;
