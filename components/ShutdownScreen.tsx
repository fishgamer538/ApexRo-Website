import React, { useState, useEffect } from 'react';
import GeminiChat from './GeminiChat'; // NEW IMPORT

const ShutdownScreen: React.FC = () => {
  const discordLink = "https://discord.gg/NhKM6gfx";
  const shutdownReason = "Due to unforeseen circumstances and a shift in project direction, ApexRo will no longer be providing services. We thank our community for their support and understanding.";

  // Define the shutdown date (e.g., July 20, 2024, 00:00:00 UTC)
  const shutdownDate = new Date('2024-07-20T00:00:00Z');
  const [timeSinceShutdown, setTimeSinceShutdown] = useState<string>('');

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - shutdownDate.getTime(); // Difference in milliseconds

      if (diff < 0) {
        // If shutdownDate is in the future, display a "coming soon" or similar message
        setTimeSinceShutdown("Shutdown approaching...");
        return;
      }

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTimeSinceShutdown(
        `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
      );
    };

    // Initial calculation
    calculateTime();

    // Update every second
    const timerInterval = setInterval(calculateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timerInterval);
  }, [shutdownDate]);

  return (
    <section id="shutdown" className="relative bg-gradient-to-br from-black to-gray-950 text-white py-20 px-4 min-h-screen flex items-center justify-center text-center overflow-x-hidden">
      {/* Fix: Removed 'jsx' and 'global' props from the style tag */}
      <style>{`
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.03); opacity: 0.9; }
        }
        .animate-subtle-pulse {
          animation: subtle-pulse 2s infinite ease-in-out;
        }
      `}</style>
      <div className="max-w-3xl mx-auto z-10 p-8 bg-gray-900 rounded-lg shadow-2xl border border-red-700 animate-fade-in custom-scrollbar">
        <div className="text-6xl mb-6 text-red-500 drop-shadow-[0_0_5px_rgba(255,0,0,0.7)]">
          🚨
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-red-500 drop-shadow-[0_0_5px_rgba(255,0,0,0.7)] tracking-wide">
          ApexRo Has Shut Down
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {shutdownReason}
        </p>

        {/* Prominently displayed shutdown timer */}
        <div className="bg-gray-800 border border-red-600 p-4 rounded-lg mb-4 shadow-inner">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Service Down For:</h2>
          <p className="text-4xl font-mono text-cyan-400 drop-shadow-[0_0_3px_rgba(0,255,255,0.5)]">
            {timeSinceShutdown}
          </p>
        </div>
        <p className="text-sm text-gray-500 mb-8">
          Note: This timer is unofficial and the website may potentially come back online before or after this duration.
        </p>

        {/* Placeholder for future announcements */}
        <div className="bg-gray-800 border border-cyan-700 p-6 rounded-lg mb-8 shadow-inner">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">Future Announcements</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            While ApexRo is currently offline, we may post important updates or new project directions here in the future.
            Keep an eye on our Discord for the most immediate information!
          </p>
          <p className="text-lg text-cyan-200 leading-relaxed mt-4">
            When the website remind back up, It will have a new UI, greater scripts/exploits, better AI Model and much more. Plus, We are going to team up with the most popular script market such as RoScripts, ScriptBlox and all. Thank you for waiting, Your patience will be worth it.
          </p>
          <p className="text-lg text-cyan-200 leading-relaxed mt-4">
            Potential Relaunch Date: <span className='font-bold text-white'>November 10th or 11th, 2025</span> (Tentative)
          </p>
        </div>

        <p className="text-lg text-gray-400 mb-8">
          For further information or to stay connected with the community, please join our Discord server.
        </p>
        <a
          href={discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-purple-500 hover:ring-offset-gray-950 animate-subtle-pulse"
          aria-label="Join our Discord community"
        >
          Join Our Discord
        </a>
        <p className="text-gray-500 text-sm mt-6 mb-4">
          by Arpit Ranjan
        </p>

        {/* NEW: Chatbot for time passing */}
        <GeminiChat />

      </div>
      {/* Fix: Removed 'jsx' prop from the style tag */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #333; /* Dark background for the track */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0ea5e9; /* Cyan for the thumb */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0ea5e9; /* Lighter cyan on hover */
        }
      `}</style>
    </section>
  );
};

export default ShutdownScreen;