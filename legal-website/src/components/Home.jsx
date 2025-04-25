import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import imageee from '../../public/images/imageee.png';

const Home = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageee})` }}>
      
      {/* Semi-opaque Bottom Overlay */}
    <div
  className="absolute bottom-0 left-0 w-full h-[30vh] flex flex-col items-center justify-center space-y-4"
  style={{ backgroundColor: 'rgba(139, 69, 19, 0.6)' }}
>
  <div className="text-yellow-400 text-7xl">⚖️</div>
  <button className="border border-white text-white text-lg px-10 py-4 hover:bg-yellow-400 hover:text-black transition-colors">
    REQUEST A CALL
  </button>
</div>




      {/* Scroll Icon */}
      <div className="absolute bottom-4 w-full flex justify-center animate-bounce">
        <a href="#about">
          <ChevronRight className="transform rotate-90 text-yellow-400 w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Home;
