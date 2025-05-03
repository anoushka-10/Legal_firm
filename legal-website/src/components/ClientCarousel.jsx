import React, { useState, useEffect } from 'react';

const ClientCarousel = ({ clients }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Default clients if none are provided
  const defaultClients = [
    { id: 1, name: 'Acme Corp', logo: '/api/placeholder/150/75', alt: 'Acme Corp Logo' },
    { id: 2, name: 'TechGiant', logo: '/api/placeholder/150/75', alt: 'TechGiant Logo' },
    { id: 3, name: 'InnovateSoft', logo: '/api/placeholder/150/75', alt: 'InnovateSoft Logo' },
    { id: 4, name: 'Global Systems', logo: '/api/placeholder/150/75', alt: 'Global Systems Logo' },
    { id: 5, name: 'Future Brands', logo: '/api/placeholder/150/75', alt: 'Future Brands Logo' },
  ];
  
  const displayClients = clients || defaultClients;
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(displayClients.length / itemsPerSlide);
  
  useEffect(() => {
    // Auto-rotate the carousel every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Trusted Clients</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex justify-center space-x-8">
                  {displayClients
                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((client) => (
                      <div key={client.id} className="flex flex-col items-center">
                        <img 
                          src={client.logo} 
                          alt={client.alt} 
                          className="h-16 object-contain mx-4 mb-2"
                        />
                        <p className="text-gray-700 font-medium">{client.name}</p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Previous clients"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Next clients"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
