import React from 'react';

const DeveloperSection: React.FC = () => {
  return (
    <section id="developer" className="py-20 px-4 bg-gray-950 text-gray-100">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400 drop-shadow-[0_0_3px_rgba(0,255,255,0.5)]">Meet the Architect Behind ApexRo</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12">
          <img
            src="https://i.pravatar.cc/150?img=25" // Placeholder avatar
            alt="Developer Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500 shadow-lg flex-shrink-0"
          />
          <div className="text-left flex-grow">
            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              ApexRo was meticulously crafted by a solo developer, <span className="text-cyan-300 font-semibold">Arpit Ranjan</span>, driven by a profound passion for pushing the boundaries of digital exploration and user empowerment within online environments. With a background deeply rooted in software engineering and a keen interest in <span className="text-cyan-300">cybersecurity and AI integration</span>, the goal was to create a platform that offers powerful, yet accessible, tools for advanced users, especially in complex gaming ecosystems like Roblox.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My development philosophy centers on creating robust, secure, and performant applications that push the envelope of what's possible, always prioritizing user experience and ethical innovation. Every line of code is written with a commitment to stability and a vision for future expansion, aiming to build tools that not only function flawlessly but also encourage responsible exploration of digital capabilities.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-xl p-8 mb-12 border border-gray-700 text-left">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Technical Stack & Tools</h3>
          <p className="text-lg text-gray-400 mb-4">
            ApexRo leverages modern web technologies and cutting-edge AI.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><span className="font-semibold text-cyan-200">Frontend:</span> React, TypeScript, Tailwind CSS</li>
            <li><span className="font-semibold text-cyan-200">AI/Backend:</span> Google Gemini API (`@google/genai`) for advanced intelligence and search grounding</li>
            <li><span className="font-semibold text-cyan-200">Module Bundling:</span> ES Modules</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-300">Key Challenge & Learning</h3>
          <p className="text-lg text-gray-400 leading-relaxed mb-4">
            One of the most significant challenges involved optimizing the real-time interaction with the Gemini API for diverse query types, ensuring low latency responses while handling complex grounding chunk extraction and display efficiently. This required careful state management and asynchronous programming patterns.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-300">Future Vision</h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            Looking ahead, ApexRo aims to integrate even more advanced AI modules for proactive threat analysis, explore multi-modal AI interactions for a richer user experience, and foster a community-driven development model for feature requests and contributions. The journey of continuous innovation has just begun.
          </p>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Connect & Collaborate</h3>
          <p className="text-lg text-gray-400 mb-6">
            I welcome feedback, collaboration, and discussions on advanced digital tools and AI applications.
          </p>
          <div className="space-x-6">
            <a href="https://linkedin.com/in/arpit-ranjan-001" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-cyan-500 hover:ring-offset-gray-950">
              LinkedIn
            </a>
            <a href="https://github.com/ArpitRanjan001" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 border border-cyan-600">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;