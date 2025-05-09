import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import imageee from '../../public/images/imageee.png';
import phoneviewHome from '../../public/images/phoneviewHome.png';

const Home = () => {
  return (
    <div className="relative flex flex-col justify-between w-full min-h-screen overflow-hidden">
      {/* Background with original fade-in effect */}
      <div className="absolute inset-0 w-full h-full bg-[#DBD8D4] transition-opacity duration-1000">
        {/* Mobile Background - maintaining original alignment */}
        <div className="absolute inset-0 flex items-start w-full h-full opacity-0 md:hidden animate-fadeIn">
          <img 
            src={phoneviewHome} 
            alt="Mobile Background" 
            className="object-cover object-top w-full"
          />
        </div>
        
        {/* Desktop Background - keeping original alignment */}
        <img 
          src={imageee} 
          alt="Desktop Background" 
          className="hidden w-full h-full object-cover object-[center_35%] md:block opacity-0 animate-fadeIn"
        />
      </div>
      
      {/* Light overlay for text readability without darkening the image too much */}
      <div className="absolute inset-0 z-10 bg-black opacity-10"></div>
      
      {/* Simple Header Navigation */}
      <header className="relative z-20 px-6 pt-6 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white text-shadow">
            FIRM NAME
          </div>
          <div className="hidden space-x-8 text-white md:flex">
            <a href="#about" className="transition-colors duration-300 hover:text-yellow-300 text-shadow">About</a>
            <a href="#services" className="transition-colors duration-300 hover:text-yellow-300 text-shadow">Services</a>
            <a href="#contact" className="transition-colors duration-300 hover:text-yellow-300 text-shadow">Contact</a>
          </div>
        </nav>
      </header>
      
      
      
      {/* Call to Action - keeping closer to original style but enhancing it */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="w-full py-10 md:py-6 lg:py-2 flex flex-col items-center justify-center space-y-6 md:space-y-8 bg-[rgba(139,69,19,0.6)] transform transition-all duration-700 animate-slideUp delay-300">
          <div className="text-6xl text-yellow-400 transition-transform md:text-6xl lg:text-5xl hover:scale-110">
            ⚖️
          </div>
          <button className="px-8 py-4 text-lg text-white transition-all duration-300 border-2 border-white md:px-12 md:py-5 md:text-xl lg:text-2xl hover:bg-yellow-400 hover:text-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
            REQUEST A CALL
          </button>
        </div>
      </div>
      
      {/* Animated chevron - keeping closer to original style */}
      <div className="absolute z-20 flex justify-center w-full bottom-8 md:bottom-12 animate-bounce">
        <a 
          href="#about" 
          className="transition-transform duration-300 hover:scale-125"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8 text-yellow-400 transition-all duration-500 md:w-10 md:h-10 hover:text-yellow-300" />
        </a>
      </div>
      
      {/* Enhanced animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
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
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.7s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .text-shadow {
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
};

export default Home;