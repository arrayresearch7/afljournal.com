import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const articlesData = [
  {
    title: 'Ethical AI Through Bias Mitigation In Large Language Models: A Review',
    authors:
      'Anindita Chakraborty, Sampurna Mandal, Suvojit Mukhopadhyay, Tiyasa Saha, Durjay Barman, Partha Sarothi Roy, Gulshan Kumar Sinha (Author)',
    pages: '1-6',
    pdfUrl: '/vol-11/1.pdf',
  },
  {
    title: 'Performance Evaluation Of AAC Blocks Incorporating GSA And Foundry Waste As Partial Replacements',
    authors: 'Adnya Manjarekar, Pranav Balasaheb Bagal (Author)',
    pages: '7-12',
    pdfUrl: '/vol-11/2.pdf',
  },
  {
    title: 'Experimental Evaluation Of Flexural Response In Steel Fiber Enhanced High Performance Concrete Beams',
    authors:
      'Swapneel Satone, Dr. K.V. Boobala Krishnan, Dr. M. Palanisamy, K. Jeevanandan, Dr. Prasoon P P, Y. Dasthagir (Author)',
    pages: '13-18',
    pdfUrl: '/vol-11/3.pdf',
  },
  {
    title: 'A Study To Assess Level of Visual Acuity(VA) among patients with Type-II Diabetes Mellitus in selected villages under Rural Heath and Training Centre, Vayalanallur',
    authors: 'Dr. Poongodi Ramalingam1, M.Sumathi2 and Dr. Aruna Subramaniam',
    pages: '19-25',
    pdfUrl: '/vol-11/4.pdf',
  },
  {
    title: 'A Review On The Plant Containing Medicinal Important Glycyrrhizin',
    authors: 'Anand Mahalwar, Nishi Sadaphal (Author)',
    pages: '26-30',
    pdfUrl: '/vol-11/5.pdf',
  },
];

const Vol_11 = () => {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  const handleSearch = (query) => {
    const results = articlesData.filter((a) =>
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
              Vol. 11 (2022)
            </h1>
            <p className="mt-2 text-base text-gray-700">
              <span className="font-semibold">Published:</span> 2022-03-05
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
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {article.title}
                      </a>
                      <p className="mt-2 text-base text-gray-700">{article.authors}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <a
                          href={article.pdfUrl}
                          className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-gray-900 text-base font-bold transition-all duration-200 transform hover:scale-105"
                          target="_blank"
                          rel="noopener noreferrer"
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

export default Vol_11;