import React, { useState } from 'react';

const ClientTestimonials = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Default testimonials if none are provided
  const defaultTestimonials = [
    {
      id: 1,
      name: 'Jane Smith',
      position: 'CEO, TechGiant',
      image: '/api/placeholder/64/64',
      quote: 'Working with this team has transformed our business processes completely. Their attention to detail and innovative solutions helped us increase efficiency by 40%.',
      rating: 5,
    },
    {
      id: 2,
      name: 'John Doe',
      position: 'Marketing Director, Acme Corp',
      image: '/api/placeholder/64/64',
      quote: 'I was impressed by their ability to understand our unique challenges and deliver a solution that exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      position: 'CTO, InnovateSoft',
      image: '/api/placeholder/64/64',
      quote: 'Their technical expertise is unmatched. They provided us with robust solutions that have scaled effortlessly with our rapid growth.',
      rating: 4,
    },
  ];
  
  const displayTestimonials = testimonials || defaultTestimonials;
  
  // Function to render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex - 1 + displayTestimonials.length) % displayTestimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % displayTestimonials.length
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {displayTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-6"
                >
                  <div className="bg-gray-50 rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4" 
                      />
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.position}</p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-gray-700 italic text-lg">"{testimonial.quote}"</p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {displayTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full ${
                activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;