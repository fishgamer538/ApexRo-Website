import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-950 text-gray-100">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400 drop-shadow-[0_0_3px_rgba(0,255,255,0.5)]">About ApexRo</h2>
        <p className="text-lg text-gray-400 leading-relaxed mb-4">
          ApexRo was forged from a singular vision: to redefine the limits of Roblox interaction. We believe in empowering every player with the advanced tools necessary to transcend conventional gameplay, bypass restrictions, and truly command their virtual presence.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed mb-8">
          Our collective—composed of dedicated architects and seasoned digital pioneers—is committed to developing robust, secure, and intuitive solutions that grant you unparalleled dominion. Join us, and sculpt your own destiny within the Roblox metaverse.
        </p>
        <a
          href="https://discord.gg/NhKM6gfx" // Updated Discord invite link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-purple-500 hover:ring-offset-gray-950"
        >
          Join Our Discord Community
        </a>
      </div>
    </section>
  );
};

export default AboutSection;