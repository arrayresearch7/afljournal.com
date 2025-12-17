import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const articlesData = [
  {
    title:
      'Agentic AI for Autonomous CI/CD: Towards Self-Adaptive Financial Infrastructure Pipelines',
    authors: '1st Avinash Reddy Segireddy',
    pages: '9',
    pdfUrl: '/vol-14/9.pdf',
  },
  {
    title: 'Sustainable Housing And Social Equity In Rapidly Urbanizing Regions',
    authors: 'Dr. Franklin John Selvaraj1, Dr. Rishi2, Dr. Sunanda I. Kittali3, Dr. Saurabh Chandra4, Sreedevi5,Akansh Garg6',
    pages: '11',
    pdfUrl: '/Env/1.pdf',
  },
  {
    title: 'Hooked on Hearts: The Role of Social Media Validation in Behavioral Addiction ',
    authors:
      'Payal Jain1, Tehseen Saleem2',
    pages: '8',
    pdfUrl: '/vol-14/1.pdf',
  },
  {
    title: 'A Study On The Effects Of Social Pressure And Personal Control On E-Commerce Adoption ',
    authors: 'Ms. Shakti Shukla1, Deepti Mehlawat2, Dr Anita Singh3, Dr Anubha Vashisht4, Dr Uma5',
    pages: '10',
    pdfUrl: '/vol-14/2.pdf',
  },
  {
    title:'A Prospective Comparative Study Of Proximal Femoral Nailing And Bipolar Hemiarthroplasty In Comminuted Intertrochanteric Fractures',
    authors:
      '1Dr. Chethan Gowda M, 2Dr. Mahesh D V, 3Dr.Rajeevratna Suresh Naik, 4Dr. Vineeth K S',
    pages: '7',
    pdfUrl: '/vol-14/3.pdf',
  },
  {
    title: 'Progressive Bilateral Visual Loss Due To Vincristine Induced Optic Neuropathy ',
    authors: 'Dr Nila C A1, Dr Latha M Sneha2, Dr Roja Raj3, Mr Selvaseelan ',
    pages: '6',
    pdfUrl: '/Env/2.pdf',
  },
  {
    title: 'A Study On Work Life Balance Of Women School Teacher’s Working In Private Schools In Chennai ',
    authors: 'Dr. R. Rethina Bai., Head1, Mrs. K. Hemalatha2 ',
    pages: '10',
    pdfUrl: '/vol-14/7.pdf',
  },
  {
    title:
      'An Observational Study on the Therapeutic Application of Raktamokshana by Ayurvedic Practitioners in Pune City',
    authors: 'Dr. Shrutee Diliprao Lad, Dr. Madhuri P. Bhide, Dr. Swapnil J. Biradar Patil (Author)',
    pages: '6',
    pdfUrl: '/vol-14/5.pdf',
  },
  
];

const Vol_14 = () => {
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
              Vol. 14 (2025)
            </h1>
            <p className="mt-2 text-base text-gray-700">
              <span className="font-semibold">Published:</span> 2025-02-02
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
                        target="_blank"
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

export default Vol_14;