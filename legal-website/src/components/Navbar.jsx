import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Expertise", path: "/expertise" },
    { title: "Our Team", path: "/ourteam" },
    { title: "Clients", path: "/all-clients" },
    { title: "Contact", path: "/contact" }
  ];

  return (
<nav className="fixed z-50 w-full py-3 transition-all duration-300 shadow-md bg-amber-50">
<div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-amber-900">
              <span className="text-yellow-600">SGRR </span>
              <span className="text-black">ASSOCIATES </span>
              <span className="text-black">LLP </span>
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `text-sm uppercase font-medium tracking-wider hover:text-amber-600 transition-colors ${
                        isActive ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-700'
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="px-6 py-2 transition-colors rounded-sm bg-amber-800 text-amber-50 hover:bg-amber-700"
            >
              Request Consultation
            </NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="shadow-lg md:hidden bg-amber-50">
          <div className="container px-4 py-4 mx-auto">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `block text-sm uppercase font-medium tracking-wider hover:text-amber-600 transition-colors ${
                        isActive ? 'text-amber-600' : 'text-gray-700'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/contact"
                  className="block px-4 py-2 text-center transition-colors rounded-sm bg-amber-800 text-amber-50 hover:bg-amber-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request Consultation
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;