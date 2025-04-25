const About = () => {
  return (
    <section id="about" className="bg-white py-24 px-6 md:px-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
            About <span className="text-amber-700">Us</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 rounded-full mb-8"></div>
        </div>

        {/* Main content card with image */}
        <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row md:gap-6">
            {/* Content side */}
            <div className="md:w-[58%] p-8 md:p-12">
              <p className="text-amber-700 font-medium text-lg mb-6 italic">
                "We are innovative"
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold text-gray-800">SGRR ASSOCIATES LLP</span> is an Indian Law Firm established in 2020 in Delhi NCR. Founded by two visionary lawyers, we've grown into a trusted name in legal services across India.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The firm specializes in navigating India's complex legal landscape with clarity and precision. We provide qualified guidance through challenging situations, transactions, and assignments with practical and logical reasoning.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SGRR is acclaimed for its exceptional legal acumen through a well-knit team of professionals. Our in-house legal experts, attorneys, and board of consultants from diverse fields collaborate seamlessly to deliver comprehensive services.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our ultimate aim is to provide high-quality advice and robust legal support that combines technical expertise with human understanding. At SGRR Associates, we don't just solve legal problems—we empower our clients to move forward with confidence and clarity.
              </p>
            </div>
            
            {/* Image side */}
            <div className="md:w-[38%]">
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                {/* Replace with your actual image */}
                <img 
                  src="/images/Legal_picture.jpeg" 
                  alt="SGRR Associates Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature boxes */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-2 border-amber-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Legal Excellence</h3>
            </div>
            <p className="text-gray-600">
              We provide qualified direction on most challenging situations with practical and legal reasoning.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-2 border-amber-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Client-First Approach</h3>
            </div>
            <p className="text-gray-600">
              Every client is provided the best and most comprehensive service tailored to their needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-2 border-amber-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Expert Team</h3>
            </div>
            <p className="text-gray-600">
              A well-knit team of legal experts, attorneys and consultants from diverse fields.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;