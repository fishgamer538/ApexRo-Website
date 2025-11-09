import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-8 px-4 text-gray-500 text-center border-t border-gray-800">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} ApexRo. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Engineered for superior control. Powered by Gemini AI.
        </p>
        <p className="mt-2 text-sm">
          Join our community on <a href="https://discord.gg/NhKM6gfx" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">Discord</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;