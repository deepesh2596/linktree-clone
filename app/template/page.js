import React from 'react';
import Link from 'next/link';

const LinktreeTemplate = () => {
  return (
    <main className="bg-[#F3F3F1] text-black font-sans">
      <section className="px-8 py-16 max-w-screen-xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            A Linktree template to suit every brand and creator
          </h1>
          <p className="text-lg text-gray-500">
            Different Link Apps, integrations and visual styles can help you create a Linktree that looks and feels like you and your brand. Explore our library of custom templates to grow and connect with your audience even more easily!
          </p>
        </header>

        {/* Columns Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Browse by</h2>
            <div className="flex flex-wrap gap-4">
              {["Fashion", "Health and Fitness", "Influencer and Creator", "Marketing", "Music", "Small Business", "Social Media", "Sports", "View all"].map((category, index) => (
                <button
                  key={index}
                  className="bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-lg transition duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="grid gap-6">
            {/* Example Cards */}
            {[1, 2, 3, 4].map((example, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">Linktree Example {example}</h3>
                <p className="text-gray-600">
                  This is an example of a Linktree profile card with some content description.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Get Inspired Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Get inspired by the best brands and creators using Linktree
          </h2>
          <div className="card flex justify-center">
            <div
              className="card1 bg-white mt-10 rounded-3xl p-10 flex flex-col justify-between"
              style={{ height: "550px", width: "1200px" }}
            >
              <div className="footer text-gray-800 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Footer Sections */}
                  {[
                    {
                      title: "Company",
                      links: [
                        "The Linktree Blog",
                        "Engineering Blog",
                        "Marketplace",
                        "What's New",
                        "About",
                        "Press",
                        "Careers",
                        "Link in Bio",
                        "Social Good",
                        "Contact",
                      ],
                    },
                    {
                      title: "Community",
                      links: [
                        "Linktree for Enterprise",
                        "2023 Creator Report",
                        "2022 Creator Report",
                        "Charities",
                        "What's Trending",
                        "Creator Profile Directory",
                        "Explore Templates",
                      ],
                    },
                    {
                      title: "Support",
                      links: [
                        "Help Topics",
                        "Getting Started",
                        "Linktree Pro",
                        "Features & How-Tos",
                        "FAQs",
                        "Report a Violation",
                      ],
                    },
                    {
                      title: "Trust & Legal",
                      links: [
                        "Terms & Conditions",
                        "Privacy Notice",
                        "Cookie Notice",
                        "Trust Center",
                        "Cookie Preferences",
                      ],
                    },
                  ].map((section, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.links.map((link, idx) => (
                          <li key={idx}>{link}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="buttons mt-6">
                <Link href={"/login"}>
                  <button
                    type="button"
                    className="text-black font-bold bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-lg px-7 py-4 me-2 mb-2 transition duration-300"
                  >
                    Log in
                  </button>
                </Link>
                <button
                  type="button"
                  className="text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none rounded-full px-5 py-4 transition duration-300"
                >
                  Get started for free
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="footer flex justify-center gap-8 mt-28">
          <img
            className="h-20"
            src="https://edge.website.production.linktr.ee/static/96c2a29111e646b92873af7c1bc1beab/f88ff/aboriginal-flag.png"
            alt="flag1"
          />
          <img
            className="h-20"
            src="https://edge.website.production.linktr.ee/static/0b8d53316d37e6dde1befae94ac1969c/8cca9/torres-strait-islander-flag.png"
            alt="flag2"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          <p className="text-purple-400 font-semibold text-lg">
            We acknowledge the Traditional Custodians of the land on which our
            office stands, The Wurundjeri people of the Kulin
          </p>
          <span className="text-purple-400 font-semibold text-lg">
            Nation, and pay our respects to Elders past, present and emerging.
            Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville
          </span>
          <span className="text-purple-400 font-semibold text-lg">
            St, Collingwood VIC 3066
          </span>
        </div>
      </section>
    </main>
  );
};

export default LinktreeTemplate;
