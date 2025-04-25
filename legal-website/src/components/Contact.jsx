import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
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
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="bg-amber-900 p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-amber-300 mr-4" />
                  <div>
                    <p>1234 Legal Avenue</p>
                    <p>Los Angeles, CA 90001</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-amber-300 mr-4" />
                  <div>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-amber-300 mr-4" />
                  <div>
                    <p>info@noblewright.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
                <ul>
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: By appointment only</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>

              {/* Map section */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Office Location</h4>
                <div className="bg-amber-200 h-64 w-full">
                  {/* Replace with an actual map. Using placeholder for now */}
                  <div className="w-full h-full bg-amber-200 flex items-center justify-center text-amber-900">
                    Map will be displayed here
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-8">
            <form className="bg-white p-8 text-gray-800 shadow-lg">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Request a Consultation</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Practice Area</label>
                <select className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">How can we help you?</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 h-32"
                  placeholder="Please describe your legal needs"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-800 text-amber-50 py-3 font-medium hover:bg-amber-700 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
