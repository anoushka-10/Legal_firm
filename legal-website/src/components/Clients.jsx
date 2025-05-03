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

  // Expanded list of client logos with "See More" added
  const clientLogos = [
    "client1", "client2", "client3", "client4", "client5", 
    "client6", "client7", "client8", "see-more"
  ];
  
  // Simple carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const logosPerSlide = 4;
  const totalSlides = Math.ceil(clientLogos.length / logosPerSlide);
  
  // Auto-scroll with boundary check to prevent looping back automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Only increment if not at the last slide
        if (prevIndex < totalSlides - 1) {
          return prevIndex + 1;
        }
        return prevIndex; // Stay on last slide
      });
    }, 7000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);
  
  // Navigation functions with boundary checks
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < totalSlides - 1 ? prevIndex + 1 : prevIndex
    );
  };
  
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <section className="py-16 bg-white pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our clients' success is our success. Here's what some of them have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white p-8 shadow-md relative transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-600"></div>
              <div className="text-amber-500 text-4xl font-serif mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">{client.testimonial}</p>
              <div className="mt-auto">
                <h4 className="text-amber-900 font-semibold">{client.name}</h4>
                <p className="text-amber-700 text-sm">{client.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client logos section with improved carousel */}
        <div className="mt-20">
          <div className="text-center mb-10">
            {/* Updated font size to match the testimonials section */}
            <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Clients</h3>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We are proud to serve a diverse clientele across various industries.
            </p>
          </div>
          
          {/* Improved Carousel */}
          <div className="relative my-12">
            {/* Navigation buttons with visibility conditions */}
            <button 
              onClick={goToPrevSlide}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full z-10 shadow-md hover:bg-amber-700 transition ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              aria-label="Previous slide"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={28} />
            </button>
            
            {/* Carousel container */}
            <div className="overflow-hidden">
              {/* Slides container */}
              <div 
                className="flex transition-transform duration-700 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {/* Generate slides */}
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {/* Generate cards for this slide */}
                      {clientLogos
                        .slice(slideIndex * logosPerSlide, (slideIndex + 1) * logosPerSlide)
                        .map((logo, logoIndex) => {
                          // Special handling for "see-more" card
                          if (logo === "see-more") {
                            return (
                              <div key={logoIndex} className="p-4">
                                <a 
                                  href="/all-clients" 
                                  className="block group h-40 bg-amber-50 shadow-lg border-2 border-amber-200 rounded-lg overflow-hidden"
                                >
                                  <div className="w-full h-full flex flex-col items-center justify-center p-8 transition-all duration-300 group-hover:bg-amber-100">
                                    <span className="text-amber-900 font-bold text-xl mb-2">See More Clients</span>
                                    <span className="text-amber-700 text-sm">View our complete client portfolio</span>
                                  </div>
                                </a>
                              </div>
                            );
                          }
                          
                          // Regular client logo cards
                          return (
                            <div key={logoIndex} className="p-4">
                              <div className="group h-40 bg-white shadow-lg border-2 border-amber-200 rounded-lg overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center p-8 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                                  <img 
                                    src={`/images/${logo}.png`} 
                                    alt={`Client ${logo}`}
                                    className="max-h-full max-w-full object-contain" 
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={goToNextSlide}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full z-10 shadow-md hover:bg-amber-700 transition ${currentIndex === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              aria-label="Next slide"
              disabled={currentIndex === totalSlides - 1}
            >
              <ChevronRight size={28} />
            </button>
            
            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalSlides }).map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  className={`h-3 rounded-full transition-all ${
                    currentIndex === dotIndex ? "w-8 bg-amber-600" : "w-3 bg-amber-300"
                  }`}
                  onClick={() => setCurrentIndex(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Case studies section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Case Studies</h3>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Examples of how our legal strategies have delivered successful outcomes for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Replace with actual case studies */}
            {[1, 2].map((caseStudy) => (
              <div 
                key={caseStudy} 
                className="bg-white shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-amber-900 mb-3">International Acquisition Success</h4>
                  <p className="text-amber-700 text-sm mb-4">Corporate Law • Cross-Border Transaction</p>
                  <p className="text-gray-700 mb-4">
                    Guided a technology client through a complex international acquisition, navigating regulatory challenges across multiple jurisdictions resulting in a successful $50M deal.
                  </p>
                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <div>
                      <p className="text-gray-600 text-sm">
                        <strong>Industry:</strong> Technology
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Result:</strong> Successful acquisition
                      </p>
                    </div>
                    <button className="text-amber-700 hover:text-amber-900 text-sm font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;