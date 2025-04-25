import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage'; // new!
import About from './components/About';
import Expertise from './components/Expertise';
import Clients from './components/Clients';
import Contact from './components/Contact';

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
