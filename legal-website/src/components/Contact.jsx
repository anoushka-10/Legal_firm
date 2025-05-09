import { MapPin, Phone, Mail, Building } from 'lucide-react';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDtjOG_1z_hHrtPJ9-FRpM_8lI9m0OIduk",
  authDomain: "sgrrstorage.firebaseapp.com",
  projectId: "sgrrstorage",
  storageBucket: "sgrrstorage.appspot.com",
  messagingSenderId: "965180101640",
  appId: "1:965180101640:web:582decbf00c4d92df12dbd",
  measurementId: "G-774YQMMXM2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const Contact = () => {
  const [activeOffice, setActiveOffice] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredOffice: 'indirapuram-office',
    practiceArea: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: '',
    message: ''
  });
  
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

  const contactInfo = {
    mobile: ["+91 8130309204", "+91 9555339204"],
    landline: "+91 120 4440300",
    email: "sgrrassociatesllp@gmail.com"
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });
    
    try {
      const formDataToSave = {
        ...formData,
        submittedAt: new Date().toISOString() 
      };
      
      await addDoc(collection(db, "contactFormSubmissions"), formDataToSave);
      
      setSubmitStatus({
        type: 'success',
        message: 'Your consultation request has been submitted successfully. We will contact you shortly.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredOffice: 'indirapuram-office',
        practiceArea: '',
        message: ''
      });
    } catch (error) {
      let errorMessage = 'There was an error submitting your request. ';
      
      if (error.code === 'permission-denied') {
        errorMessage += 'Database access denied. Please check Firebase security rules.';
      } else if (error.code === 'unavailable') {
        errorMessage += 'Firebase service is currently unavailable. Please try again later.';
      } else {
        errorMessage += 'Please try again or contact us directly.';
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 pt-32 transition-colors duration-300 bg-amber-800 text-amber-50">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold transition-all duration-300 transform md:text-4xl hover:scale-105">
            Contact Us
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 transition-all duration-500 bg-amber-200 hover:w-24"></div>
          <p className="max-w-2xl mx-auto transition-opacity duration-300 hover:opacity-90">
            Schedule a consultation with our legal team to discuss your needs and how we can assist you.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full mb-8 transition-all duration-500 lg:w-1/2 lg:mb-0 hover:shadow-xl">
            <div className="h-full p-8 transition-all duration-300 rounded-lg bg-amber-900 hover:bg-amber-800/90">
              <h3 className="mb-6 text-2xl font-semibold transition-colors duration-300 hover:text-amber-300">
                Get in Touch
              </h3>
              
              {/* Office tabs */}
              <div className="flex flex-wrap mb-6 transition-all duration-300 border-b border-amber-700">
                {offices.map((office, index) => (
                  <button 
                    key={index}
                    className={`py-2 px-4 text-sm font-medium mr-2 transition-all duration-300 ${
                      activeOffice === index 
                        ? 'border-b-2 border-amber-300 text-amber-300' 
                        : 'text-amber-100 hover:text-amber-200 hover:border-b-2 hover:border-amber-200/50'
                    }`}
                    onClick={() => setActiveOffice(index)}
                  >
                    {office.name}
                    {office.isPrimary && (
                      <span className="px-1 ml-1 text-xs transition-all duration-200 rounded bg-amber-300 text-amber-900 hover:bg-amber-200">
                        Main
                      </span>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Office address */}
              <div className="space-y-6">
                <div className="flex items-start transition-all duration-300 hover:translate-x-1">
                  <MapPin className="flex-shrink-0 mt-1 mr-4 transition-transform duration-300 text-amber-300 hover:scale-110" />
                  <div>
                    <p className="font-medium transition-colors duration-300 text-amber-200 hover:text-amber-100">
                      {offices[activeOffice].name}
                    </p>
                    <p className="transition-colors duration-300 hover:text-amber-100">{offices[activeOffice].address}</p>
                    <p className="transition-colors duration-300 hover:text-amber-100">{offices[activeOffice].city}</p>
                    <p className="transition-colors duration-300 hover:text-amber-100">{offices[activeOffice].state}</p>
                  </div>
                </div>
                
                {/* Contact numbers */}
                <div className="flex items-start transition-all duration-300 hover:translate-x-1">
                  <Phone className="flex-shrink-0 mt-1 mr-4 transition-transform duration-300 text-amber-300 hover:scale-110" />
                  <div>
                    <p className="font-medium transition-colors duration-300 text-amber-200 hover:text-amber-100">
                      Mobile
                    </p>
                    {contactInfo.mobile.map((number, index) => (
                      <p 
                        key={index}
                        className="transition-colors duration-300 hover:text-amber-100"
                      >
                        {number}
                      </p>
                    ))}
                    <p className="mt-2 font-medium transition-colors duration-300 text-amber-200 hover:text-amber-100">
                      Landline
                    </p>
                    <p className="transition-colors duration-300 hover:text-amber-100">{contactInfo.landline}</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start transition-all duration-300 hover:translate-x-1">
                  <Mail className="flex-shrink-0 mt-1 mr-4 transition-transform duration-300 text-amber-300 hover:scale-110" />
                  <div>
                    <p className="font-medium transition-colors duration-300 text-amber-200 hover:text-amber-100">
                      Email
                    </p>
                    <p className="transition-colors duration-300 hover:text-amber-100">{contactInfo.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 transition-opacity duration-300 hover:opacity-90">
                <h4 className="mb-4 text-lg font-semibold transition-colors duration-300 hover:text-amber-200">
                  Office Hours
                </h4>
                <ul className="space-y-1">
                  <li className="flex transition-colors duration-300 hover:text-amber-100">
                    <span className="w-32">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex transition-colors duration-300 hover:text-amber-100">
                    <span className="w-32">Saturday:</span>
                    <span>By appointment only</span>
                  </li>
                  <li className="flex transition-colors duration-300 hover:text-amber-100">
                    <span className="w-32">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              {/* Map section */}
              <div className="mt-8 transition-all duration-500 hover:scale-[1.01]">
                <h4 className="mb-4 text-lg font-semibold transition-colors duration-300 hover:text-amber-200">
                  Office Location
                </h4>
                <div className="w-full h-64 overflow-hidden transition-all duration-500 rounded-md bg-amber-200 hover:shadow-lg">
                  <div className="flex items-center justify-center w-full h-full transition-colors duration-300 bg-amber-200 text-amber-900 hover:bg-amber-300">
                    <div className="text-center">
                      <Building 
                        size={40} 
                        className="mx-auto mb-2 transition-transform duration-500 hover:scale-110" 
                      />
                      <p className="font-medium transition-colors duration-300 hover:text-amber-800">
                        Map for {offices[activeOffice].name}
                      </p>
                      <p className="text-sm transition-colors duration-300 text-amber-700 hover:text-amber-800">
                        Interactive map will be displayed here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full transition-all duration-500 lg:w-1/2 hover:shadow-xl">
            <form 
              className="p-8 text-gray-800 transition-all duration-500 bg-white rounded-md shadow-lg hover:shadow-2xl"
              onSubmit={handleSubmit}
            >
              <h3 className="mb-6 text-2xl font-semibold transition-colors duration-300 text-amber-900 hover:text-amber-700">
                Request a Consultation
              </h3>
              
              {/* Status messages */}
              {submitStatus.message && (
                <div className={`p-4 mb-6 rounded transition-all duration-500 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="mb-4 transition-all duration-300">
                <label className="block mb-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900" htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 transition-all duration-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-400"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="mb-4 transition-all duration-300">
                <label className="block mb-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 transition-all duration-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-400"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="mb-4 transition-all duration-300">
                <label className="block mb-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900" htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-2 transition-all duration-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-400"
                  placeholder="Your phone number"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4 transition-all duration-300">
                <label className="block mb-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900" htmlFor="preferredOffice">
                  Preferred Office
                </label>
                <select 
                  id="preferredOffice"
                  className="w-full px-4 py-2 transition-all duration-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-400"
                  value={formData.preferredOffice}
                  onChange={handleInputChange}
                >
                  {offices.map((office, index) => (
                    <option 
                      key={index} 
                      value={office.name.toLowerCase().replace(' ', '-')}
                    >
                      {office.name} {office.isPrimary && '(Main Office)'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4 transition-all duration-300">
                <label className="block mb-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900" htmlFor="practiceArea">
                  Practice Area <span className="text-red-500">*</span>
                </label>
                <select 
                  id="practiceArea"
                  className="w-full px-4 py-2 transition-all duration-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-400"
                  required
                  value={formData.practiceArea}
                  onChange={handleInputChange}
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
              
              <div className="mb-6 transition-all duration-300">
                <label className="block mb-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900" htmlFor="message">
                  How can we help you? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  className="w-full h-32 px-4 py-2 transition-all duration-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-400"
                  placeholder="Please describe your legal needs"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`w-full py-3 font-medium transition-all duration-300 rounded-md ${
                  isSubmitting 
                    ? 'bg-amber-400 cursor-not-allowed' 
                    : 'bg-amber-800 hover:bg-amber-700 hover:shadow-md'
                } text-amber-50`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Request'
                )}
              </button>
              
              <p className="mt-4 text-xs text-center text-gray-500 transition-colors duration-300 hover:text-gray-700">
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