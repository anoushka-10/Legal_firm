import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Clients = () => {
  const clients = [
    { 
      name: "Global Enterprises Inc.", 
      testimonial: "The legal expertise and dedication provided by this firm has been instrumental to our company's success in navigating complex regulatory environments.",
      position: "CEO, Global Enterprises Inc."
    },
    { 
      name: "Sterling Financial Group", 
      testimonial: "We've trusted this firm with our most sensitive legal matters for over a decade. Their counsel is always precise, practical and forward-thinking.",
      position: "General Counsel, Sterling Financial Group"
    },
    { 
      name: "Vanguard Technologies", 
      testimonial: "Their team's innovative approach to intellectual property protection has saved us millions and secured our market position.",
      position: "CTO, Vanguard Technologies"
    },
    { 
      name: "Meridian Healthcare", 
      testimonial: "In the highly regulated healthcare space, having Noble & Wright as our legal partners gives us confidence to focus on patient care.",
      position: "President, Meridian Healthcare"
    },
    { 
      name: "Atlas Construction", 
      testimonial: "From contract negotiations to dispute resolution, their responsiveness and expertise have been invaluable to our operations.",
      position: "Managing Director, Atlas Construction"
    },
    { 
      name: "Pinnacle Investments", 
      testimonial: "Their strategic counsel on our international transactions has been instrumental in our global expansion.",
      position: "Partner, Pinnacle Investments"
    }
  ];

  const clientLogos = [
    "client1", "client2", "client3", "client4", 
    "client5", "client6", "client7", "client8"
  ];
  
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const logosPerSlide = 4;
  const totalSlides = Math.ceil(clientLogos.length / logosPerSlide);
  
  // Auto-scroll with looping and transition handling
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        setIsTransitioning(false);
      }, 700);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);
  
  // Navigation functions with transition handling
  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      setIsTransitioning(false);
    }, 700);
  };
  
  const goToPrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
      setIsTransitioning(false);
    }, 700);
  };

  const goToSlide = (index) => {
    if (isTransitioning || currentIndex === index) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 700);
  };

  return (
    <section className="py-16 pt-32 bg-white">
      <div className="container px-4 mx-auto">
        {/* Testimonials Section */}
        <div className="mb-12 text-center animate-fadeIn">
          <h2 className="mb-4 text-3xl font-bold transition-all duration-300 md:text-4xl text-amber-900 hover:text-amber-800">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 origin-center bg-amber-600 animate-scaleX"></div>
          <p className="max-w-2xl mx-auto text-gray-700 transition-all duration-500 hover:text-gray-800">
            Our clients' success is our success. Here's what some of them have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="relative p-8 transition-all duration-500 bg-white shadow-md hover:scale-105 hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 origin-left bg-amber-600 animate-scaleX"></div>
              <div className="mb-4 font-serif text-4xl transition-transform duration-300 text-amber-500 hover:scale-110">"</div>
              <p className="mb-6 italic text-gray-700 transition-colors duration-300 hover:text-gray-800">
                {client.testimonial}
              </p>
              <div className="mt-auto">
                <h4 className="font-semibold transition-colors duration-300 text-amber-900 hover:text-amber-700">
                  {client.name}
                </h4>
                <p className="text-sm transition-colors duration-300 text-amber-700 hover:text-amber-600">
                  {client.position}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Clients Carousel Section */}
        <div className="mt-20 delay-300 animate-fadeIn">
          <div className="mb-10 text-center">
            <h3 className="mb-4 text-3xl font-bold transition-all duration-300 md:text-4xl text-amber-900 hover:text-amber-800">
              Our Clients
            </h3>
            <div className="w-20 h-1 mx-auto mb-6 origin-center bg-amber-600 animate-scaleX"></div>
            <p className="max-w-2xl mx-auto text-gray-700 transition-all duration-500 hover:text-gray-800">
              We are proud to serve a diverse clientele across various industries.
            </p>
          </div>
          
          {/* Carousel */}
          <div className="relative my-12">
            {/* Navigation buttons */}
            <button 
              onClick={goToPrevSlide}
              className="absolute left-0 z-10 p-3 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full shadow-md top-1/2 bg-amber-600 hover:bg-amber-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
              aria-label="Previous slide"
              disabled={isTransitioning}
            >
              <ChevronLeft size={28} />
            </button>
            
            {/* Carousel container */}
            <div className="overflow-hidden">
              <div 
                className={`flex transition-transform duration-700 ease-in-out ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex-shrink-0 min-w-full">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                      {clientLogos
                        .slice(slideIndex * logosPerSlide, (slideIndex + 1) * logosPerSlide)
                        .map((logo, logoIndex) => (
                          <div 
                            key={logoIndex} 
                            className="p-4 animate-fadeIn"
                            style={{ animationDelay: `${slideIndex * 100 + logoIndex * 50}ms` }}
                          >
                            <div className="h-40 overflow-hidden transition-all duration-500 bg-white border-2 rounded-lg shadow-lg group border-amber-200 hover:border-amber-400">
                              <div className="flex items-center justify-center w-full h-full p-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                                <img 
                                  src={`/images/${logo}.png`} 
                                  alt={`Client ${logo}`}
                                  className="object-contain max-w-full max-h-full transition-all duration-500 group-hover:brightness-110" 
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={goToNextSlide}
              className="absolute right-0 z-10 p-3 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full shadow-md top-1/2 bg-amber-600 hover:bg-amber-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
              aria-label="Next slide"
              disabled={isTransitioning}
            >
              <ChevronRight size={28} />
            </button>
            
            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalSlides }).map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentIndex === dotIndex ? "w-8 bg-amber-600" : "w-3 bg-amber-300 hover:bg-amber-500"
                  }`}
                  onClick={() => goToSlide(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>

          {/* "See More Clients" button */}
          <div className="flex justify-center mt-8 delay-500 animate-fadeIn">
            <a 
              href="/all-clients" 
              className="px-8 py-4 text-lg font-medium text-white transition-all duration-500 rounded-lg shadow-lg bg-amber-600 hover:bg-amber-700 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
            >
              View All Our Clients
            </a>
          </div>
        </div>
        
        {/* Case studies section */}
        <div className="mt-20 delay-700 animate-fadeIn">
          <div className="mb-10 text-center">
            <h3 className="mb-4 text-3xl font-bold transition-all duration-300 md:text-4xl text-amber-900 hover:text-amber-800">
              Case Studies
            </h3>
            <div className="w-20 h-1 mx-auto mb-6 origin-center bg-amber-600 animate-scaleX"></div>
            <p className="max-w-2xl mx-auto text-gray-700 transition-all duration-500 hover:text-gray-800">
              Examples of how our legal strategies have delivered successful outcomes for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[1, 2].map((caseStudy, index) => (
              <div 
                key={caseStudy} 
                className="overflow-hidden transition-all duration-500 bg-white shadow-md hover:scale-105 hover:shadow-lg animate-fadeInUp"
                style={{ animationDelay: `${index * 200 + 700}ms` }}
              >
                <div className="p-6">
                  <h4 className="mb-3 text-xl font-semibold transition-colors duration-300 text-amber-900 hover:text-amber-700">
                    International Acquisition Success
                  </h4>
                  <p className="mb-4 text-sm transition-colors duration-300 text-amber-700 hover:text-amber-600">
                    Corporate Law • Cross-Border Transaction
                  </p>
                  <p className="mb-4 text-gray-700 transition-colors duration-300 hover:text-gray-800">
                    Guided a technology client through a complex international acquisition, navigating regulatory challenges across multiple jurisdictions resulting in a successful $50M deal.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-800">
                        <strong>Industry:</strong> Technology
                      </p>
                      <p className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-800">
                        <strong>Result:</strong> Successful acquisition
                      </p>
                    </div>
                    <button className="text-sm font-medium transition-colors duration-300 text-amber-700 hover:text-amber-900 hover:underline">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animation styles */}
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleX {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes fadeInUp {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .animate-scaleX {
            animation: scaleX 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .delay-100 {
            animation-delay: 100ms;
          }
          .delay-200 {
            animation-delay: 200ms;
          }
          .delay-300 {
            animation-delay: 300ms;
          }
          .delay-500 {
            animation-delay: 500ms;
          }
          .delay-700 {
            animation-delay: 700ms;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Clients;