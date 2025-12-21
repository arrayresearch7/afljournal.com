import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const About = () => {
  return (
    <>
      <Header />

      <main className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <nav className="text-base text-gray-600 mb-6">
              <a href="/" className="hover:text-yellow-500 transition">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-purple-700 font-semibold">
                About the Journal
              </span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold text-purple-900 mb-6">
              About the Journal
            </h1>

            {/* Section 1 */}
            <section className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">
                Journal Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This journal is an independent academic platform created to
                support the dissemination of research and scholarly discussion
                in finance, economics, and related interdisciplinary areas.
                The journal aims to provide a neutral space for researchers,
                educators, and professionals to share original ideas and
                analytical insights.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The platform operates independently and does not represent or
                claim affiliation with any university, institution, or existing
                academic journal.
              </p>
            </section>

            {/* Section 2 */}
            <section className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">
                Scope of the Journal
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The journal welcomes research papers, conceptual studies, and
                analytical articles covering areas such as financial markets,
                corporate finance, financial technology, economic policy,
                risk analysis, and related fields.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Interdisciplinary and applied research with practical relevance
                is particularly encouraged.
              </p>
            </section>

            {/* Section 3 */}
            <section className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">
                Submission Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Authors are invited to submit original, unpublished manuscripts
                that align with the scope of the journal. Submissions should be
                written clearly, supported by appropriate methodology, and
                present well-defined conclusions.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Manuscripts are reviewed internally for relevance and clarity
                before further editorial consideration. Detailed submission
                instructions are provided during the submission process.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Search className="bg-white border rounded-lg shadow-sm p-4" />
          </aside>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
