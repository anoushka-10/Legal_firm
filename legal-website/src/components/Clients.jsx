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

  const clientLogos = ["client1", "client2", "client3", "client4", "client5", "client6"];

  return (
    <section className="py-16 bg-white pt-32"> {/* Changed background to white */}
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
            <div key={index} className="bg-white p-8 shadow-md relative">
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
        
        {/* Client logos section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Our Clients</h3>
            <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We are proud to serve a diverse clientele across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center bg-white p-6 h-24 shadow-sm">
                {/* Replace with actual client logos */}
                <img src={`/images/${logo}.png`} alt={`Client ${index + 1}`} className="max-h-full" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Case studies section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Case Studies</h3>
            <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Examples of how our legal strategies have delivered successful outcomes for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Replace with actual case studies */}
            {[1, 2].map((caseStudy) => (
              <div key={caseStudy} className="bg-white shadow-md overflow-hidden">
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
