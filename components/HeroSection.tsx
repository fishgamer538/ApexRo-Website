import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-black to-gray-950 text-white py-20 px-4 min-h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-cyan-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] tracking-wide">
          Command Your Roblox Destiny
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          ApexRo delivers unparalleled tools to master your gameplay, circumvent limitations, and dominate the Roblox universe.
        </p>
        <div className="space-x-4">
          <a
            href="#features"
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-cyan-500 hover:ring-offset-gray-950"
          >
            Explore Tools
          </a>
          <a
            href="#faq"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 border border-cyan-600"
          >
            Get Intel
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;