import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import imageee from '../../public/images/imageee.png';
import phoneviewHome from '../../public/images/phoneviewHome.png'

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between relative overflow-hidden bg-[#dededd]">
      <div className="absolute inset-0 w-full h-full bg-[#DBD8D4]">
        <div className="absolute inset-0 flex items-start w-full h-full md:hidden">
          <img 
            src={phoneviewHome} 
            alt="Mobile Background" 
            className="object-cover object-top w-full"
          />
        </div>
        
        <img 
          src={imageee} 
          alt="Desktop Background" 
          className="hidden w-full h-full object-cover object-[center_35%] md:block"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-end flex-grow">
        <div className="w-full py-12 md:py-7 lg:py-2 flex flex-col items-center justify-center space-y-6 md:space-y-8 bg-[rgba(139,69,19,0.6)]">
          <div className="text-6xl text-yellow-400 md:text-6xl lg:text-8xl">⚖️</div>
          <button className="px-8 py-4 text-lg text-white transition-colors border-2 border-white md:px-12 md:py-5 md:text-xl lg:text-2xl hover:bg-yellow-400 hover:text-black">
            REQUEST A CALL
          </button>
        </div>
      </div>
      <div className="absolute z-20 flex justify-center w-full bottom-8 md:bottom-12 animate-bounce">
        <a href="#about">
          <ChevronRight className="w-8 h-8 text-yellow-400 transform rotate-90 md:w-10 md:h-10" />
        </a>
      </div>
    </div>
  );
};

export default Home;