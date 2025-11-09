import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-950 text-white p-4 shadow-lg sticky top-0 z-50 border-b border-cyan-800">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_2px_rgba(0,255,255,0.5)]">ApexRo</a>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:text-cyan-400 transition-colors duration-200">Features</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition-colors duration-200">About</a></li>
          <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors duration-200">Testimonials</a></li>
          <li><a href="#ai-search" className="hover:text-cyan-400 transition-colors duration-200">AI Search</a></li>
          <li><a href="#executors" className="hover:text-cyan-400 transition-colors duration-200">Executors</a></li>
          <li><a href="#script-market" className="hover:text-cyan-400 transition-colors duration-200">Script Market</a></li>
          <li><a href="#faq" className="hover:text-cyan-400 transition-colors duration-200">AI FAQ</a></li>
          <li><a href="https://discord.gg/NhKM6gfx" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">Discord</a></li> {/* NEW Link for Discord */}
          <li><a href="#developer" className="hover:text-cyan-400 transition-colors duration-200">Developer</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;