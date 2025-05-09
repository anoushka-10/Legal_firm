const About = () => {
  return (
    <section id="about" className="px-6 py-24 bg-white md:px-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header with fade-in animation */}
        <div className="mb-12 animate-fadeIn">
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-800 transition-all duration-300 md:text-5xl hover:text-gray-900">
            About <span className="transition-colors duration-300 text-amber-700 hover:text-amber-800">Us</span>
          </h2>
          <div className="w-24 h-1 mb-8 origin-left rounded-full bg-amber-600 animate-scaleX"></div>
        </div>

        {/* Main content card with staggered animations */}
        <div className="overflow-hidden shadow-md bg-gray-50 rounded-xl animate-slideUp">
          <div className="flex flex-col md:flex-row md:gap-6">
            {/* Content side with staggered children animations */}
            <div className="md:w-[58%] p-8 md:p-12">
              <p className="mb-6 text-lg italic font-medium text-amber-700 transition-all duration-500 animate-fadeIn delay-100 hover:scale-[1.02]">
                "We are innovative"
              </p>
              
              <p className="mb-6 text-lg leading-relaxed text-gray-700 transition-all duration-500 delay-200 animate-fadeIn hover:bg-amber-50 hover:px-4 hover:py-3 hover:rounded-lg">
                <span className="font-semibold text-gray-800">SGRR ASSOCIATES LLP</span> is an Indian Law Firm established in 2020 in Delhi NCR. Founded by two visionary lawyers, we've grown into a trusted name in legal services across India.
              </p>
              
              <p className="mb-6 text-lg leading-relaxed text-gray-700 transition-all duration-500 delay-300 animate-fadeIn hover:bg-amber-50 hover:px-4 hover:py-3 hover:rounded-lg">
                The firm specializes in navigating India's complex legal landscape with clarity and precision. We provide qualified guidance through challenging situations, transactions, and assignments with practical and logical reasoning.
              </p>
              
              <p className="mb-6 text-lg leading-relaxed text-gray-700 transition-all duration-500 animate-fadeIn delay-400 hover:bg-amber-50 hover:px-4 hover:py-3 hover:rounded-lg">
                SGRR is acclaimed for its exceptional legal acumen through a well-knit team of professionals. Our in-house legal experts, attorneys, and board of consultants from diverse fields collaborate seamlessly to deliver comprehensive services.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 transition-all duration-500 delay-500 animate-fadeIn hover:bg-amber-50 hover:px-4 hover:py-3 hover:rounded-lg">
                Our ultimate aim is to provide high-quality advice and robust legal support that combines technical expertise with human understanding. At SGRR Associates, we don't just solve legal problems—we empower our clients to move forward with confidence and clarity.
              </p>
            </div>
            
            {/* Image side with zoom-in effect */}
            <div className="md:w-[38%] md:flex md:flex-col md:justify-center animate-zoomIn delay-700">
              <div className="flex items-center justify-center w-full h-full pt-12 overflow-hidden bg-gray-200 rounded-lg md:pt-0">
                <img 
                  src="/images/Legal_picture.jpeg" 
                  alt="SGRR Associates Team" 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature boxes with staggered animations */}
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
          <div className="p-6 transition-all duration-500 bg-white border-t-2 rounded-lg shadow-md border-amber-500 animate-fadeInUp delay-800 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-300 rounded-full bg-amber-50 hover:bg-amber-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 text-amber-700 hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-amber-700">Legal Excellence</h3>
            </div>
            <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
              We provide qualified direction on most challenging situations with practical and legal reasoning.
            </p>
          </div>
          
          <div className="p-6 transition-all duration-500 bg-white border-t-2 rounded-lg shadow-md border-amber-500 animate-fadeInUp delay-900 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-300 rounded-full bg-amber-50 hover:bg-amber-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 text-amber-700 hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-amber-700">Client-First Approach</h3>
            </div>
            <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
              Every client is provided the best and most comprehensive service tailored to their needs.
            </p>
          </div>
          
          <div className="p-6 transition-all duration-500 delay-1000 bg-white border-t-2 rounded-lg shadow-md border-amber-500 animate-fadeInUp hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-300 rounded-full bg-amber-50 hover:bg-amber-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 text-amber-700 hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-amber-700">Expert Team</h3>
            </div>
            <p className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
              A well-knit team of legal experts, attorneys and consultants from diverse fields.
            </p>
          </div>
        </div>

        {/* Animation styles */}
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(30px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes scaleX {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes zoomIn {
            from { 
              opacity: 0;
              transform: scale(0.95);
            }
            to { 
              opacity: 1;
              transform: scale(1);
            }
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
          .animate-slideUp {
            animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
          .animate-scaleX {
            animation: scaleX 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }
          .animate-zoomIn {
            animation: zoomIn 0.8s ease-out forwards;
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
          .delay-400 {
            animation-delay: 400ms;
          }
          .delay-500 {
            animation-delay: 500ms;
          }
          .delay-700 {
            animation-delay: 700ms;
          }
          .delay-800 {
            animation-delay: 800ms;
          }
          .delay-900 {
            animation-delay: 900ms;
          }
          .delay-1000 {
            animation-delay: 1000ms;
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;