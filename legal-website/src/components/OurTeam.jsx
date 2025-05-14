import { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

const OurTeam = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const partners = [
    {
      id: 1,
      name: 'Rahul Raj Pathak (Advocate)',
      position: 'Founder',
      bio: '',
      email: 'advrahulpathak@gmail.com',
      phone: '+91 8130309204',
      location: 'Ghaziabad',
      linkedin: '#',
      image: '/images/partner1.png'
    },
    {
      id: 2,
      name: 'Prasoon Lata (Advocate)',
      position: 'Co-Founder',
      bio: '',
      email: 'partner2@example.com',
      phone: '+91 9999999999',
      location: 'New Delhi',
      linkedin: '#',
      image: '/images/partner2.png'
    }
  ];

  const associates = [
    {
      id: 3,
      name: 'Sarvesh Yadav',
      position: 'Sr. Legal Manager',
    },
    {
      id: 4,
      name: 'Yashodha',
      position: 'Legal Manager'
    },
    {
      id: 5,
      name: 'Shivani',
      position: 'Legal Executive'
    },
    {
      id: 6,
      name: 'Kunal',
      position: 'Legal Executive'
    },
    {
      id: 7,
      name: 'Anjali',
      position: 'Accounts Dept.'
    },
    {
      id: 8,
      name: 'Amit',
      position: 'Legal Executive'
    },
    {
      id: 9,
      name: 'Varun Shukla',
      position: 'Transaction Head'
    },
    {
      id: 10,
      name: 'Adarsh Shukla',
      position: 'ODV/PDD'
    },
    {
      id: 11,
      name: 'Harpal',
      position: 'Field Executive'
    },
    {
      id: 12,
      name: 'Rohit Kumar',
      position: 'Field Executive'
    },
    {
      id: 13,
      name: 'Jitender',
      position: 'Back office'
    },
    {
      id: 14,
      name: 'Akhilesh Chaudhady',
      position: 'Field Executive'
    },
    {
      id: 15,
      name: 'Lucky',
      position: 'Field Executive'
    },
    {
      id: 16,
      name: 'Suryavansi',
      position: 'Field Executive'
    },
    {
      id: 17,
      name: 'Krishna',
      position: 'Field Executive'
    },
    {
      id: 18,
      name: 'Rudal',
      position: 'Field Executive'
    },
    {
      id: 19,
      name: 'Prince',
      position: 'Field Executive'
    },
    {
      id: 20,
      name: 'Shiva-Meerut',
      position: 'Field Executive'
    },
  ];

  return (
    <section id="ourteam" className="px-6 py-24 bg-white md:px-16 scroll-mt-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 transition-all duration-500 transform hover:scale-[1.01]">
          <h2 className="mb-4 text-3xl font-bold transition-colors duration-300 text-amber-900 md:text-4xl hover:text-amber-700">
            Our Legal Team
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 transition-all duration-700 bg-amber-600 hover:w-24"></div>
          <p className="max-w-2xl mx-auto text-gray-600 transition-opacity duration-300 hover:opacity-90">
            Meet our dedicated team of legal professionals committed to providing exceptional service and expertise.
          </p>
        </div>

        {/* Partners Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-full max-w-sm overflow-hidden transition-all duration-500 bg-white rounded-lg shadow-lg md:w-96 hover:shadow-xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <div className="relative overflow-hidden h-80 group">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="flex items-center justify-center w-full h-full bg-amber-100">
                        <div class="text-amber-800 font-bold text-4xl">${partner.name[0]}</div>
                      </div>
                    `;
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 transition-opacity duration-500 ${hoveredPartner === partner.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-white">
                    <p className="text-sm">{partner.bio}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold transition-colors duration-300 text-amber-900 hover:text-amber-700">
                  {partner.name}
                </h3>
                <p className="mb-4 transition-colors duration-300 text-amber-600 hover:text-amber-500">
                  {partner.position}
                </p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center transition-colors duration-300 hover:text-amber-700">
                    <MapPin className="w-4 h-4 mr-2 text-amber-600" />
                    <span>{partner.location}</span>
                  </div>
                  <div className="flex items-center transition-colors duration-300 hover:text-amber-700">
                    <Mail className="w-4 h-4 mr-2 text-amber-600" />
                    <a href={`mailto:${partner.email}`}>{partner.email}</a>
                  </div>
                  <div className="flex items-center transition-colors duration-300 hover:text-amber-700">
                    <Phone className="w-4 h-4 mr-2 text-amber-600" />
                    <a href={`tel:${partner.phone}`}>{partner.phone}</a>
                  </div>
                  {partner.linkedin && (
                    <div className="flex items-center transition-colors duration-300 hover:text-amber-700">
                      <Linkedin className="w-4 h-4 mr-2 text-amber-600" />
                      <a href={partner.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Associates Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="mb-8 text-2xl font-semibold text-center transition-colors duration-300 text-amber-800 hover:text-amber-700">
            Our Associates
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {associates.map((associate) => (
              <div
                key={associate.id}
                className="p-6 transition-all duration-300 bg-white border rounded-lg shadow-sm border-amber-100 hover:shadow-md hover:border-amber-200 hover:translate-y-1"
              >
                <h4 className="text-lg font-bold transition-colors duration-300 text-amber-900 hover:text-amber-700">
                  {associate.name}
                </h4>
                <p className="mb-3 transition-colors duration-300 text-amber-600 hover:text-amber-500">
                  {associate.position}
                </p>
                {associate.expertise && (
                  <p className="mb-3 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-700">
                    {associate.expertise}
                  </p>
                )}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;