import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const Editorial_team = () => {
  return (
    <>
      <Header />
      <main className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-purple-900 tracking-tight mb-6">
              Editorial Team
            </h1>

            <section className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">Editors-in-Chief</h2>
                <ul className="space-y-3 text-base sm:text-lg">
                  <li className="text-gray-700">
                    <strong className="text-gray-800">Olga Dodd</strong>,{' '}
                    <em className="text-purple-600">Auckland University of Technology</em>, New Zealand (Director of ACFR)
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-800">Alireza Tourani-Rad</strong>,{' '}
                    <em className="text-purple-600">Auckland University of Technology</em>, New Zealand
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">Editorial Board</h2>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <li>
                    <strong className="text-gray-800">Christina Atanasova</strong>,{' '}
                    <em className="text-purple-600">Simon Fraser University</em>, Canada
                  </li>
                  <li>
                    <strong className="text-gray-800">Rainer Baule</strong>,{' '}
                    <em className="text-purple-600">University of Hagen</em>, Germany
                  </li>
                  <li>
                    <strong className="text-gray-800">Adrian Fernandez-Perez</strong>,{' '}
                    <em className="text-purple-600">University College Dublin</em>, Ireland
                  </li>
                  <li>
                    <strong className="text-gray-800">Bart Frijns</strong>,{' '}
                    <em className="text-purple-600">Open Universiteit</em>, the Netherlands
                  </li>
                  <li>
                    <strong className="text-gray-800">Ivan Indriawan</strong>,{' '}
                    <em className="text-purple-600">Adelaide University</em>, Australia
                  </li>
                  <li>
                    <strong className="text-gray-800">Madhu Kalimipalli</strong>,{' '}
                    <em className="text-purple-600">Wilfried Laurier University</em>, Canada
                  </li>
                  <li>
                    <strong className="text-gray-800">Nick Nguyen</strong>,{' '}
                    <em className="text-purple-600">Auckland University of Technology</em>, New Zealand
                  </li>
                  <li>
                    <strong className="text-gray-800">Stefanie Kleimeier</strong>,{' '}
                    <em className="text-purple-600">Maastricht University</em>, Netherlands
                  </li>
                  <li>
                    <strong className="text-gray-800">James Kolari</strong>,{' '}
                    <em className="text-purple-600">Texas A&M University</em>, United States
                  </li>
                  <li>
                    <strong className="text-gray-800">Marie Lambert</strong>,{' '}
                    <em className="text-purple-600">University of Liege</em>, Belgium
                  </li>
                  <li>
                    <strong className="text-gray-800">Thorsten Lehnert</strong>,{' '}
                    <em className="text-purple-600">Luxembourg School of Finance</em>, Luxembourg
                  </li>
                  <li>
                    <strong className="text-gray-800">Yulia Merkoulova</strong>,{' '}
                    <em className="text-purple-600">Monash University</em>, Australia
                  </li>
                  <li>
                    <strong className="text-gray-800">Simon Sosvilla-Rivero</strong>,{' '}
                    <em className="text-purple-600">Universidad Complutense de Madrid</em>, Spain
                  </li>
                  <li>
                    <strong className="text-gray-800">Qian Sun</strong>,{' '}
                    <em className="text-purple-600">Fudan University</em>, China
                  </li>
                </ul>
              </div>
            </section>
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

export default Editorial_team;