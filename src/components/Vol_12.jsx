import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const articlesData = [
  {
    title: 'The Impact Of Digital Transformation On The Development Of Logistic Service: A Case Study Of Pt Sindu Wahana Berkah',
    authors: 'Bagas Muhammad Habibie, Ratih Hendayani (Author)',
    pages: '1-14',
    pdfUrl: '/vol-12/1.pdf',
  },
  {
    title: 'A Measurement Tool For Purchase Intention And Its Factors In Environmental And Marketing Contexts',
    authors: 'Saskia Tami Auziawati, Indrawati (Author)',
    pages: '15-21',
    pdfUrl: '/vol-12/2.pdf',
  },
  {
    title: 'A NOVEL HYBRID CNN-LSTM FRAMEWORK FOR PREDICTING ALZHEIMER’S PROGRESSION USING SMART IOT SENSORS',
    authors:
      'MANOJ KUMAR BEURIA, DR JITENDER TANWAR, ALOK KAPIL, VALIVETI DATTATREYA, MRS. THOKALA SRIVALLI, DR. KRITI SRIVASTAVA (Author)',
    pages: '34-43',
    pdfUrl: '/vol-12/3.pdf',
  },
  {
    title:
      'A Study To Assess Level of Visual Acuity(VA) among patients with Type-II Diabetes Mellitus in selected villages under Rural Heath and Training Centre, Vayalanallur',
    authors: 'Dr. Poongodi Ramalingam, M. Sumathi, Dr. Aruna Subramaniam (Author)',
    pages: '44-49',
    pdfUrl: '/vol-12/4.pdf',
  },
  // {
  //   title: 'Progressive Bilateral Visual Loss Due To Vincristine Induced Optic Neuropathy ',
  //   authors: 'Dr Nila C A1, Dr Latha M Sneha2, Dr Roja Raj3, Mr Selvaseelan4',
  //   pages: '50-64',
  //   pdfUrl: '/vol-12/5.pdf',
  // },
  {
    title: 'Green Computing: Advancing Energy-Efficient Data Centers With AI',
    authors:
      'M Rambabu, Dr. Kunchanapalli Rama Krishna, Dr Mano Ashish Tripathi, Jyoti Kataria, Priyanka Srivastava, Ajay Dixit (Author)',
    pages: '65-74',
    pdfUrl: '/vol-12/6.pdf',
  },
  {
    title: 'Federated Learning and Cryptography: A Secure Framework for IoT Data Privacy',
    authors:
      'Shashi Raj K, Dr. M.Manicka Raja, Ch G V N Prasad, Mallareddy Adudhodla, Shashank Shekhar Tiwari, Dr.Gaganjot Kaur (Author)',
    pages: '75-81',
    pdfUrl: '/vol-12/7.pdf',
  },
  {
    title: 'Performance Study On Inverted Anaerobic Sludge Blanket Reactor For High Fat Content Wastewater',
    authors: 'Mr. V. Karthikeyan, Dr. N. Ashokkumar (Author)',
    pages: '82-91',
    pdfUrl: '/vol-12/8.pdf',
  },
  {
    title: 'Surviving Through Identity Shift: An Expression Of Complicated Grief In Colson Whitehead’s The Nickel Boys',
    authors: 'Ms. Jemima Joshuin T, Dr. G. Arul Selvi Mariya (Author)',
    pages: '92-97',
    pdfUrl: '/vol-12/9.pdf',
  },
  {
    title:
      'Synergistic Effect of Cacao Extract and Pregabalin on TNF-α and ERK MAPK Expression in a Rat Model of Neuropathic Pain',
    authors:
      'Mario Alexander Suyadi, Herdiani Sulistyo Putri, Prananda Surya Airlangga, Maulydia, Christrijogo Sumartono W., Mahmudah (Author)',
    pages: '98-114',
    pdfUrl: '/vol-12/10.pdf',
  },
  {
    title: 'Reviewing the socioeconomic status of women collective groups',
    authors: 'Pushp Gautam, Simran Malik, Sanjay Bhayana (Author)',
    pages: '115-122',
    pdfUrl: '/vol-12/11.pdf',
  },
];

const Vol_12 = () => {
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
              Vol. 12 (2023)
            </h1>
            <p className="mt-2 text-base text-gray-700">
              <span className="font-semibold">Published:</span> 2023-07-14
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

export default Vol_12;