import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const Contact = () => {
  return (
    <>
      <Header />
      <main className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <nav className="text-base text-gray-600 mb-6">
              <a href="/" className="hover:text-yellow-500 transition-colors duration-200">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-purple-700 font-semibold">Contact</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold text-purple-900 tracking-tight mb-6">
              Contact
            </h1>

            <div className="space-y-8">
              <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">
                  Auckland Centre for Financial Research
                </h2>
                <div className="text-base sm:text-lg text-gray-700 space-y-1">
                  <p>Auckland University of Technology</p>
                  <p>Private Bag 92006</p>
                  <p>Auckland</p>
                  <p>1142, New Zealand</p>
                </div>
              </section>

              <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">Principal Contact</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Olga Dodd</h3>
                  </div>
                  <div className="space-y-2 text-base sm:text-lg text-gray-700">
                    <p><strong>Editor in Chief</strong></p>
                    <p><strong>Director, ACFR</strong></p>
                    <div className="mt-4 space-y-2">
                      <p><strong>Phone:</strong> 099219999</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">Support Contact</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Tuwhera Publishing</h3>
                  </div>
                  <div className="space-y-2 text-base sm:text-lg text-gray-700">
                    <p>
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:tuwhera@aut.ac.nz"
                        className="text-yellow-500 hover:text-yellow-600 hover:underline transition-colors duration-200"
                      >
                        tuwhera@aut.ac.nz
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Search
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-4"
            />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;