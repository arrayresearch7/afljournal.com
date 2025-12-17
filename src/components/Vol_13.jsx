import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const articlesData = [
  {
    title: 'Building Organizational Capacity For Rural Enterprise Management: A Study Of Government Agency Performance In Indonesia',
    authors: 'Sitti Hadijah, Nurdin Nara (Author)',
    pages: '697-704',
    pdfUrl: '/vol-13/1.pdf',
  },
  {
    title: 'The Impact Of Air And Noise Pollution On Honeybee (Apis Mellifera L.) Productivity Across Multiple Habitats',
    authors: 'Maryam Ahmed Hussein, Dereen Jaladat Mustafa, Bayan Hazim Ahmed (Author)',
    pages: '705-710',
    pdfUrl: '/vol-13/2.pdf',
  },
  {
    title: 'Do Green Practices Drive Firm Value In The Energy And Mining Sector',
    authors:
      'Rasyid Ridha Kurniawan, Rahmawati, Siti Rochmah Ika, Nindyo Cahyo Kresnanto, Ari Kuncara Widagdo, Junaid M. Shaikh, Agus Dwianto (Author)',
    pages: '711-714',
    pdfUrl: '/vol-13/3.pdf',
  },
  {
    title: 'A Review of Accident Prevention Strategies in Hazardous Industrial Operations',
    authors: 'Dr Mohd Zafar shaikh (Author)',
    pages: '715-721',
    pdfUrl: '/vol-13/4.pdf',
  },
  {
    title: 'Assessment Of Fetal Lung Maturity Using Pulmonary Artery Doppler Indices: A Review Article',
    authors:
      'Mohamad Abdelrahman Mohamad, Ahmed Abdelrady Ali, Ahmed Hashem Abdellah, Mahmoud Ibraheem Elmolakab bel Elrashidy, Nagwan ibrahim Rashwan (Author)',
    pages: '722-735',
    pdfUrl: '/vol-13/5.pdf',
  },
  {
    title:
      'Quality By Design Driven, Development And Assessment Of A Nanoemulsion Based Gel Comprising Of Fenticonazole Nitrate And Clary Sage Oil Loaded For The Effective Treatment Of Fungal Infections',
    authors: 'Het Solanki, Punit B. Parejiya, Sainika Rathod, Kanti Paregi, Lata Panchal, Divyang Dave (Author)',
    pages: '736-749',
    pdfUrl: '/vol-13/6.pdf',
  },
  {
    title: 'Formulation And Evaluation Of Buccal Disintegrating Tablet Containing Anticonvulsant Drug ',
    authors: 'Akshay M. Akotkar1, Dr. Nidhi Bais2, Dr. Sachin Jain3',
    pages: '750-765',
    pdfUrl: '/vol-13/7.pdf',
  },
  {
    title: 'Structural Health Monitoring Of RCC Structure By Internet Of Things',
    authors: 'Malay Dipak bhai Shukla (Translator); Dr. Sanjay Joshi (Author)',
    pages: '765-774',
    pdfUrl: '/vol-13/8.pdf',
  },
  {
    title: 'Emerging Therapeutic Approach For The Prevention And Reversal Of Muscle Atrophy',
    authors: 'Priyanka Prajapati (Author)',
    pages: '778-787',
    pdfUrl: '/vol-13/9.pdf',
  },
  {
    title: 'Impact OF Lifestyle Modifications ON Menstrual Irregularities',
    authors:
      'Gagandeep Kaur, Dr. Ashwini Ramchandra Metangale, Saumya Srivastava, Dr. Mamellapalli Radhika, Basavaraj Mudhol, Gangadhar Bareddy, Lazar Veparala (Author)',
    pages: '788-798',
    pdfUrl: '/vol-13/10.pdf',
  },
  {
    title: 'MSME Finance: An Empirical Study On Policy Reforms, Cash Flow Based Lending, And Digital Solutions',
    authors: 'Mr. Praveen Sharma, Dr. Rashmi Sharma (Author)',
    pages: '799-810',
    pdfUrl: '/vol-13/11.pdf',
  },
  {
    title: 'The Use Of Advanced Imaging Techniques In Diagnosing Equine Musculoskeletal Disorders',
    authors:
      'Dr. Souvik Sur, Dr. Pradeep Kumar Dohare, Dr. Kalyani Tiwari, Dr. S. Padmavathi, Dr Sukanta Bandyopadhyay, Aryantika Sharma (Author)',
    pages: '811-817',
    pdfUrl: '/vol-13/12.pdf',
  },
];

const Vol_13 = () => {
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
              Vol. 13 (2024)
            </h1>
            <p className="mt-2 text-base text-gray-700">
              <span className="font-semibold">Published:</span> 2023-05-31
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

export default Vol_13;