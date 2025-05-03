import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import imageee from '../../public/images/imageee.png';
// Import a mobile-specific image if you have one
import mobileImage from '../../public/images/mobileimage.png';

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between relative overflow-hidden bg-[#dededd]">
    {/* Background Image using <img> with object-contain */}
  <img 
  src={imageee} 
  alt="Background" 
  className="absolute inset-0 w-full h-full object-contain sm:object-cover sm:object-[center_35%]  z-0 bg-[#DBD8D4]"
/>



  {/* Content */}
  <div className="relative z-10 flex-grow flex flex-col justify-end">
    <div
      className="w-full py-8 flex flex-col items-center justify-center space-y-4 bg-[rgba(139,69,19,0.6)]"
    >
      <div className="text-yellow-400 text-5xl md:text-7xl">⚖️</div>
      <button className="border border-white text-white text-base md:text-lg px-6 md:px-10 py-3 md:py-4 hover:bg-yellow-400 hover:text-black transition-colors">
        REQUEST A CALL
      </button>
    </div>
  </div>

  {/* Scroll Icon */}
  <div className="absolute bottom-4 w-full flex justify-center animate-bounce z-20">
    <a href="#about">
      <ChevronRight className="transform rotate-90 text-yellow-400 w-6 h-6 md:w-8 md:h-8" />
    </a>
  </div>
</div>

  
  );
};

export default Home;