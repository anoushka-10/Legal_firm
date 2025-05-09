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
          // industry: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Education', 'Manufacturing'][i % 6]
        }));

        // Simulate loading delay for better UX
        setTimeout(() => {
          setClients(clientData);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error creating client data:", error);
        setIsLoading(false);
      }
    };

    loadClients();
  }, []);

  return (
    <div className="min-h-screen pt-24 transition-colors duration-300 bg-amber-50">
      {/* Header */}
      <header className="py-8 text-white transition-all duration-500 shadow-lg bg-gradient-to-r from-amber-800 to-amber-700 hover:shadow-xl">
        <div className="container px-4 mx-auto">
          <h1 className="font-serif text-4xl font-bold text-center transition-all duration-500 hover:scale-105">
            Our <span className="transition-colors duration-300 text-amber-300 hover:text-amber-200">Valued</span> Clients
          </h1>
          <div className="w-24 h-1 mx-auto mt-4 transition-all duration-700 bg-amber-300 hover:w-32"></div>
          <p className="max-w-2xl mx-auto mt-4 text-center transition-opacity duration-300 text-amber-100 hover:opacity-90">
            We are proud to work with leading organizations across various industries.
            Our partnerships are built on trust, quality, and results.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-12 mx-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 transition-all duration-500 border-t-2 border-b-2 rounded-full animate-spin border-amber-700"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client.id}
                className="overflow-hidden transition-all duration-500 transform bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative group">
                  <div className="overflow-hidden aspect-video bg-amber-100">
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 bg-amber-100 group-hover:bg-amber-50">
                      <img
                        src={client.imagePath}
                        alt={client.name}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `
                            <div class="flex items-center justify-center w-full h-full transition-all duration-300 group-hover:bg-amber-200">
                              <div class="text-amber-700 font-bold text-3xl transition-transform duration-500 group-hover:scale-110">${client.name[0]}</div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                  {/* Industry badge - uncomment if needed
                  <div className="absolute top-0 right-0 px-2 py-1 m-2 text-xs text-white transition-all duration-300 rounded-md bg-amber-700 group-hover:bg-amber-600">
                    {client.industry}
                  </div> */}
                </div>
                {/* Client info - uncomment if needed
                <div className="p-4 transition-all duration-300 border-t border-amber-100 group-hover:border-amber-200">
                  <h3 className="text-lg font-semibold transition-colors duration-300 text-amber-900 group-hover:text-amber-700">
                    {client.name}
                  </h3>
                  <div className="flex items-center mt-2">
                    <div className="h-0.5 w-8 bg-amber-400 transition-all duration-500 group-hover:w-12"></div>
                    <span className="ml-2 text-sm transition-colors duration-300 text-amber-600 group-hover:text-amber-500">
                      Trusted Partner
                    </span>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 mt-12 transition-colors duration-500 bg-amber-800 text-amber-100 hover:bg-amber-700/90">
        <div className="container px-4 mx-auto text-center">
          <p className="transition-all duration-300 hover:scale-105">
            Want to join our list of satisfied clients?{' '}
            <a 
              href="/Contact" 
              className="underline transition-colors duration-300 text-amber-300 hover:text-amber-200 hover:no-underline"
            >
              Contact us today
            </a>
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a 
              href="#" 
              className="transition-all duration-300 transform text-amber-200 hover:text-white hover:scale-125"
            >
              <span className="sr-only">LinkedIn</span>
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a 
              href="#" 
              className="transition-all duration-300 transform text-amber-200 hover:text-white hover:scale-125"
            >
              <span className="sr-only">Twitter</span>
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
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