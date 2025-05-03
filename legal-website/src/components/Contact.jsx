import { MapPin, Phone, Mail, Building } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [activeOffice, setActiveOffice] = useState(0);
  
  // Office locations data
  const offices = [
    {
      name: "Indirapuram Office",
      address: "FF 18, Lotus Pond Plaza Market, Vaibhav Khand",
      city: "Indirapuram, Ghaziabad",
      state: "Uttar Pradesh 201014",
      isPrimary: true
    },
    {
      name: "Delhi Office",
      address: "505, 5th Floor, DLF Tower",
      city: "Jasola District Centre",
      state: "New Delhi 110025",
      isPrimary: false
    },
    {
      name: "Noida Office",
      address: "C-127, Sector 63",
      city: "Noida",
      state: "Uttar Pradesh 201301",
      isPrimary: false
    }
  ];
  
  // Contact information
  const contactInfo = {
    mobile: ["+91 8130309204", "+91 9555339204"],
    landline: "+91 120 4440300",
    email: "sgrrassociatesllp@gmail.com"
  };

  return (
    <section className="py-16 bg-amber-800 text-amber-50 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-amber-200 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto">
            Schedule a consultation with our legal team to discuss your needs and how we can assist you.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-amber-900 p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              {/* Office tabs */}
              <div className="flex mb-6 border-b border-amber-700">
                {offices.map((office, index) => (
                  <button 
                    key={index}
                    className={`py-2 px-4 text-sm font-medium mr-2 ${
                      activeOffice === index 
                        ? 'border-b-2 border-amber-300 text-amber-300' 
                        : 'text-amber-100 hover:text-amber-200'
                    }`}
                    onClick={() => setActiveOffice(index)}
                  >
                    {office.name}
                    {office.isPrimary && <span className="ml-1 text-xs bg-amber-300 text-amber-900 px-1 rounded">Main</span>}
                  </button>
                ))}
              </div>
              
              {/* Office address */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-amber-300 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-amber-200">{offices[activeOffice].name}</p>
                    <p>{offices[activeOffice].address}</p>
                    <p>{offices[activeOffice].city}</p>
                    <p>{offices[activeOffice].state}</p>
                  </div>
                </div>
                
                {/* Contact numbers */}
                <div className="flex items-start">
                  <Phone className="text-amber-300 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-amber-200">Mobile</p>
                    {contactInfo.mobile.map((number, index) => (
                      <p key={index}>{number}</p>
                    ))}
                    <p className="mt-2 font-medium text-amber-200">Landline</p>
                    <p>{contactInfo.landline}</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <Mail className="text-amber-300 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-amber-200">Email</p>
                    <p>{contactInfo.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
                <ul className="space-y-1">
                  <li className="flex">
                    <span className="w-32">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex">
                    <span className="w-32">Saturday:</span>
                    <span>By appointment only</span>
                  </li>
                  <li className="flex">
                    <span className="w-32">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              {/* Map section */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Office Location</h4>
                <div className="bg-amber-200 h-64 w-full rounded-md overflow-hidden">
                  {/* Replace with an actual map. Using placeholder for now */}
                  <div className="w-full h-full bg-amber-200 flex items-center justify-center text-amber-900">
                    <div className="text-center">
                      <Building size={40} className="mx-auto mb-2" />
                      <p className="font-medium">Map for {offices[activeOffice].name}</p>
                      <p className="text-sm text-amber-700">Interactive map will be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-8">
            <form className="bg-white p-8 text-gray-800 shadow-lg rounded-md">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Request a Consultation</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="office">
                  Preferred Office
                </label>
                <select 
                  id="office"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {offices.map((office, index) => (
                    <option key={index} value={office.name.toLowerCase().replace(' ', '-')}>
                      {office.name} {office.isPrimary && '(Main Office)'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="practice-area">
                  Practice Area <span className="text-red-500">*</span>
                </label>
                <select 
                  id="practice-area"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="">Select a practice area</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="litigation">Litigation</option>
                  <option value="ip">Intellectual Property</option>
                  <option value="tax">Tax Law</option>
                  <option value="international">International Law</option>
                  <option value="family">Family Law</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                  How can we help you? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 h-32"
                  placeholder="Please describe your legal needs"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-800 text-amber-50 py-3 font-medium hover:bg-amber-700 transition-colors rounded-md"
              >
                Submit Request
              </button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Fields marked with <span className="text-red-500">*</span> are required
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;