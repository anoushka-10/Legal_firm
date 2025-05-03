// src/pages/AllClients.jsx
import { useState, useEffect } from 'react';

const AllClients = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadClients = () => {
      setIsLoading(true);

      try {
        const clientData = Array.from({ length: 26 }, (_, i) => ({
          id: i + 1,
          name: `Client ${i + 1}`,
          imagePath: `/images/client${i + 1}.png`,
        //   industry: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Education', 'Manufacturing'][i % 6]
        }));

        setClients(clientData);
      } catch (error) {
        console.error("Error creating client data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadClients();
  }, []);

  return (
<div className="min-h-screen bg-amber-50 pt-24">
{/* Header */}
      <header className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">
            Our <span className="text-amber-300">Valued</span> Clients
          </h1>
          <div className="w-24 h-1 bg-amber-300 mx-auto mt-4"></div>
          <p className="text-center mt-4 text-amber-100 max-w-2xl mx-auto">
            We are proud to work with leading organizations across various industries.
            Our partnerships are built on trust, quality, and results.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-700"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="aspect-video bg-amber-100">
                    <div className="absolute inset-0 flex items-center justify-center bg-amber-100">
                      <img
                        src={client.imagePath}
                        alt={client.name}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `
                            <div class="flex items-center justify-center w-full h-full">
                              <div class="text-amber-700 font-bold text-3xl">${client.name[0]}</div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                  {/* <div className="absolute top-0 right-0 bg-amber-700 text-white text-xs px-2 py-1 m-2 rounded-md">
                    {client.industry}
                  </div> */}
                </div>
                {/* <div className="p-4 border-t border-amber-100">
                  <h3 className="font-semibold text-lg text-amber-900">{client.name}</h3>
                  <div className="mt-2 flex items-center">
                    <div className="h-0.5 w-8 bg-amber-400"></div>
                    <span className="ml-2 text-sm text-amber-600">Trusted Partner</span>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-amber-800 text-amber-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>Want to join our list of satisfied clients? <a href="/Contact" className="text-amber-300 hover:underline">Contact us today</a></p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-amber-200 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-amber-200 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.95 13.95 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AllClients;
