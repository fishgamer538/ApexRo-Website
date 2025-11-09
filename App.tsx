import React from 'react';
import ShutdownScreen from './components/ShutdownScreen'; // NEW IMPORT

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans">
      <ShutdownScreen /> {/* Render only the shutdown screen */}
    </div>
  );
};

export default App;