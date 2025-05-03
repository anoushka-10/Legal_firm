import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage'; // new!
import About from './components/About';
import Expertise from './components/Expertise';
import Clients from './components/Clients';
import Contact from './components/Contact';
import AllClients from './components/AllClients';
import ClientCarousel from './components/ClientCarousel';
import ClientTestimonials from './components/ClientTestimonials';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-serif bg-amber-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Optional: Still keep these for direct navigation */}
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/all-clients" element={<AllClients />} />
          {/* <Route path="/ClientCarousel" element={<ClientCarousel />} />
          <Route path="/ClientTestimonials" element={<ClientTestimonials />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
