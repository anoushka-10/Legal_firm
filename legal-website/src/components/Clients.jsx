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
  const logosPerSlide = 4;
  const totalSlides = Math.ceil(clientLogos.length / logosPerSlide);
  
  // Auto-scroll with looping
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);
  
  // Navigation functions with looping
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };
  
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16 pt-32 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-amber-900">Client Testimonials</h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-amber-600"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our clients' success is our success. Here's what some of them have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="relative p-8 transition-transform duration-300 bg-white shadow-md hover:scale-105 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-600"></div>
              <div className="mb-4 font-serif text-4xl text-amber-500">"</div>
              <p className="mb-6 italic text-gray-700">{client.testimonial}</p>
              <div className="mt-auto">
                <h4 className="font-semibold text-amber-900">{client.name}</h4>
                <p className="text-sm text-amber-700">{client.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
        <div className="mb-10 text-center">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl text-amber-900">Our Clients</h3>
          <div className="w-20 h-1 mx-auto mb-6 bg-amber-600"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            We are proud to serve a diverse clientele across various industries.
          </p>
        </div>
        
        {/* Carousel */}
        <div className="relative my-12">
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevSlide}
            className="absolute left-0 z-10 p-3 text-white transition transform -translate-y-1/2 rounded-full shadow-md top-1/2 bg-amber-600 hover:bg-amber-700"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="flex-shrink-0 min-w-full">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {clientLogos
                      .slice(slideIndex * logosPerSlide, (slideIndex + 1) * logosPerSlide)
                      .map((logo, logoIndex) => (
                        <div key={logoIndex} className="p-4">
                          <div className="h-40 overflow-hidden bg-white border-2 rounded-lg shadow-lg group border-amber-200">
                            <div className="flex items-center justify-center w-full h-full p-8 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                              <img 
                                src={`/images/${logo}.png`} 
                                alt={`Client ${logo}`}
                                className="object-contain max-w-full max-h-full" 
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
            className="absolute right-0 z-10 p-3 text-white transition transform -translate-y-1/2 rounded-full shadow-md top-1/2 bg-amber-600 hover:bg-amber-700"
            aria-label="Next slide"
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

        {/* "See More Clients" button */}
        <div className="flex justify-center mt-8">
          <a 
            href="/all-clients" 
            className="px-8 py-4 text-lg font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-amber-600 hover:bg-amber-700 hover:shadow-xl"
          >
            View All Our Clients
          </a>
        </div>
      </div>
        
        {/* Case studies section */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <h3 className="mb-4 text-3xl font-bold md:text-4xl text-amber-900">Case Studies</h3>
            <div className="w-20 h-1 mx-auto mb-6 bg-amber-600"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              Examples of how our legal strategies have delivered successful outcomes for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Replace with actual case studies */}
            {[1, 2].map((caseStudy) => (
              <div 
                key={caseStudy} 
                className="overflow-hidden transition-transform duration-300 bg-white shadow-md hover:scale-105 hover:shadow-lg"
              >
                <div className="p-6">
                  <h4 className="mb-3 text-xl font-semibold text-amber-900">International Acquisition Success</h4>
                  <p className="mb-4 text-sm text-amber-700">Corporate Law • Cross-Border Transaction</p>
                  <p className="mb-4 text-gray-700">
                    Guided a technology client through a complex international acquisition, navigating regulatory challenges across multiple jurisdictions resulting in a successful $50M deal.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">
                        <strong>Industry:</strong> Technology
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Result:</strong> Successful acquisition
                      </p>
                    </div>
                    <button className="text-sm font-medium text-amber-700 hover:text-amber-900">
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