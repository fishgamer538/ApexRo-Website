
import React, { useState, useMemo } from 'react';
import { ScriptItem } from '../types';

const scripts: ScriptItem[] = [
  {
    id: 1,
    title: 'Gravity Manipulator',
    description: 'Control gravity for yourself or others. Fly, fall slowly, or make players soar!',
    imageUrl: 'https://picsum.photos/400/250?random=10&grayscale&blur=2',
    downloadUrl: '#',
    intendedUse: 'Manipulate gravitational forces on players or objects within supported Roblox games, enabling flight, reduced fall damage, or increased jump height.',
    potentialRisks: 'High risk of account ban. May cause unexpected game behavior or crashes. Not all games support gravity manipulation, leading to detection.',
    compatibilityNotes: 'Compatible with most unpatched Roblox clients. Performance may vary across different game engines and updates. Requires executor injection.'
  },
  {
    id: 2,
    title: 'Instant Teleportation',
    description: 'Teleport to any location on the map with precision. Supports coordinates and player names.',
    imageUrl: 'https://picsum.photos/400/250?random=11&grayscale&blur=2',
    downloadUrl: '#',
    intendedUse: 'Instantly move your character to specified coordinates, player locations, or predefined points of interest. Useful for rapid navigation and evasion.',
    potentialRisks: 'Very high detection risk if used frequently or in anti-cheat protected areas. Can result in instant bans or client crashes.',
    compatibilityNotes: 'Works best in games with large open maps and less stringent anti-teleport measures. May cause "Rubberbanding" in high-latency environments. Requires executor injection.'
  },
  {
    id: 3,
    title: 'Aimbot Pro (Undetected)',
    description: 'Enhance your combat with advanced aim assistance. Features customizable FOV and smooth aiming.',
    imageUrl: 'https://picsum.photos/400/250?random=12&grayscale&blur=2',
    downloadUrl: '#',
    intendedUse: 'Automatically aim at opponents in combat-oriented games. Customizable features include target prioritization, field of view (FOV), and smoothing to appear more natural.',
    potentialRisks: 'Extremely high detection risk. Frequent headshots or unnatural aiming patterns are easily flagged by anti-cheat systems. Reports from other players will also increase ban chances.',
    compatibilityNotes: 'Designed for first-person shooter (FPS) and combat games. Effectiveness depends heavily on game engine, anti-cheat, and script updates. Requires executor injection.'
  },
  {
    id: 4,
    title: 'Speed Hack Deluxe',
    description: 'Boost your character speed to unprecedented levels. Outrun opponents and navigate maps swiftly.',
    imageUrl: 'https://picsum.photos/400/250?random=13&grayscale&blur=2',
    downloadUrl: '#',
    intendedUse: 'Increase character movement speed beyond normal limits, allowing for fast traversal of maps and escape from pursuers.',
    potentialRisks: 'High detection risk, especially in games with server-side speed checks. May cause client desynchronization or lag for other players, making detection easier.',
    compatibilityNotes: 'Works on most games that rely on client-side speed calculation. May be less effective or lead to bans in games with robust server-side validation. Requires executor injection.'
  },
  {
    id: 5,
    title: 'Wallhack X-Ray',
    description: 'See through walls and objects to locate players and items. Gain a tactical advantage.',
    imageUrl: 'https://picsum.photos/400/250?random=14&grayscale&blur=2',
    downloadUrl: '#',
    intendedUse: 'Render distant objects and players visible through solid surfaces, providing a significant informational advantage in competitive games.',
    potentialRisks: 'High detection risk due to client-side rendering manipulations. Visual artifacts or glitches may occur in some games, leading to instability.',
    compatibilityNotes: 'Effectiveness can vary depending on the game\'s rendering engine and how models are loaded. May not work on all games. Requires executor injection.'
  },
  {
    id: 6,
    title: 'Auto Farm Bot',
    description: 'Automate repetitive tasks like farming resources, collecting items, or grinding XP.',
    imageUrl: 'https://picsum.photos/400/250?random=15&grayscale&blur=2',
    downloadUrl: '#',
    intendedUse: 'Automate mundane, repetitive actions such as resource gathering, item collection, or experience point (XP) grinding, allowing for passive progression.',
    potentialRisks: 'Moderate to high detection risk, especially if automated actions are too precise or continuous for human-like behavior. May result in soft bans or resource wipes.',
    compatibilityNotes: 'Requires careful configuration to avoid detection. Works best in games with simple farming mechanics. Complex scripts may need frequent updates. Requires executor injection.'
  },
  {
    id: 7,
    title: 'God Mode Toggle',
    description: 'Become invincible to all damage. Perfect for surviving challenging encounters.',
    imageUrl: 'https://picsum.photos/400/250?random=16&grayscale&blur=2',
    downloadUrl: '#',
    intendedUse: 'Render your character immune to damage from various sources, making you invincible in combat or dangerous environments.',
    potentialRisks: 'Extremely high detection risk. Server-side health validation will quickly flag unusual damage absorption. Immediate bans are common.',
    compatibilityNotes: 'Only effective in games where health is primarily client-sided. Most modern Roblox games feature server-side health, limiting its effectiveness or leading to instant bans. Requires executor injection.'
  },
  {
    id: 8,
    title: 'No Clip Freedom',
    description: 'Walk through any solid object. Explore hidden areas and bypass barriers.',
    imageUrl: 'https://picsum.photos/400/250?random=17&grayscale&blur=2',
    downloadUrl: '#',
    intendedUse: 'Disregard collision detection, allowing your character to pass through walls, floors, and other physical barriers to reach inaccessible areas.',
    potentialRisks: 'Very high detection risk. Clipping through objects is easily detected by server-side sanity checks and can lead to rapid bans. May cause client crashes.',
    compatibilityNotes: 'Works best in games with less sophisticated collision detection. Can be unstable in physics-heavy environments. Requires executor injection.'
  },
];

const downloadRisks = [
  { id: 'accountBan', label: 'I understand that using this script violates Roblox\'s Terms of Service and can result in permanent account bans.' },
  { id: 'malwareRisk', label: 'I understand that some scripts may contain malware, viruses, or other harmful software due to the unverified nature of this feature.' },
  { id: 'deviceSecurity', label: 'I understand that running unverified scripts can compromise my device\'s security and I proceed at my own risk.' },
  { id: 'userResponsibility', label: 'I understand that I am solely responsible for my actions and any consequences that may arise from using this script.' },
];

const ScriptMarketSection: React.FC = () => {
  const [showWarningModal, setShowWarningModal] = useState<boolean>(false);
  const [selectedScriptTitle, setSelectedScriptTitle] = useState<string | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [selectedScript, setSelectedScript] = useState<ScriptItem | null>(null);
  const [acknowledgedRisks, setAcknowledgedRisks] = useState<Record<string, boolean>>(() => {
    return downloadRisks.reduce((acc, risk) => ({ ...acc, [risk.id]: false }), {});
  });

  const allRisksAcknowledged = useMemo(() => {
    return downloadRisks.every(risk => acknowledgedRisks[risk.id]);
  }, [acknowledgedRisks]);

  const handleDownload = (scriptTitle: string) => {
    setSelectedScriptTitle(scriptTitle);
    setShowWarningModal(true);
    // Reset acknowledgments for the new download attempt
    setAcknowledgedRisks(
      downloadRisks.reduce((acc, risk) => ({ ...acc, [risk.id]: false }), {})
    );
  };

  const handleRiskAcknowledge = (riskId: string, isChecked: boolean) => {
    setAcknowledgedRisks(prev => ({
      ...prev,
      [riskId]: isChecked,
    }));
  };

  const confirmDownload = () => {
    if (selectedScriptTitle && allRisksAcknowledged) {
      alert(`Downloading "${selectedScriptTitle}"... (Feature under development)`);
      // In a real app, this would trigger an actual file download
    }
    setShowWarningModal(false);
    setSelectedScriptTitle(null);
    setAcknowledgedRisks(
      downloadRisks.reduce((acc, risk) => ({ ...acc, [risk.id]: false }), {})
    );
  };

  const cancelDownload = () => {
    setShowWarningModal(false);
    setSelectedScriptTitle(null);
    setAcknowledgedRisks(
      downloadRisks.reduce((acc, risk) => ({ ...acc, [risk.id]: false }), {})
    );
  };

  const handleViewDetails = (script: ScriptItem) => {
    setSelectedScript(script);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedScript(null);
  };

  return (
    <section id="script-market" className="py-20 px-4 bg-gray-950 text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_3px_rgba(0,255,255,0.5)]">ApexRo Script Marketplace</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Discover a curated selection of powerful scripts designed to enhance your Roblox experience. From advanced combat advantages to utility hacks, find the tools to dominate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scripts.map((script) => (
            <div key={script.id} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-700 hover:border-cyan-500">
              <img src={script.imageUrl} alt={script.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-cyan-300">{script.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{script.description}</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleDownload(script.title)}
                    className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-200 ease-in-out hover:scale-105"
                    aria-label={`Download ${script.title}`}
                  >
                    Download
                  </button>
                  <button
                    onClick={() => handleViewDetails(script)}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-200 ease-in-out hover:scale-105 border border-gray-600"
                    aria-label={`View details for ${script.title}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 text-center mt-12">
            All scripts are provided "as-is" and come with inherent risks. Use at your own discretion.
        </p>
      </div>

      {showWarningModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg shadow-2xl border border-red-700 max-w-lg w-full p-8 text-center animate-fade-in" role="alertdialog" aria-modal="true" aria-labelledby="download-warning-title" aria-describedby="download-warning-description">
            <h3 id="download-warning-title" className="text-3xl font-bold text-red-500 mb-4 drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">
              CRITICAL WARNING!
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Proceed with extreme caution for "<span className="font-semibold text-cyan-300">{selectedScriptTitle}</span>".
              <br/>
              I, Arpit Ranjan, recommend downloading scripts only after this feature has been fully reviewed.
            </p>

            <div id="download-warning-description" className="text-left text-gray-300 space-y-3 mb-8">
              {downloadRisks.map((risk) => (
                <div key={risk.id} className="flex items-start">
                  <input
                    type="checkbox"
                    id={`risk-${risk.id}`}
                    checked={acknowledgedRisks[risk.id]}
                    onChange={(e) => handleRiskAcknowledge(risk.id, e.target.checked)}
                    className="form-checkbox h-5 w-5 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500 mr-3 mt-1 cursor-crosshair"
                    aria-describedby={`risk-${risk.id}-label`}
                  />
                  <label htmlFor={`risk-${risk.id}`} id={`risk-${risk.id}-label`} className="text-lg cursor-crosshair">
                    {risk.label}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDownload}
                className={`font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 ease-in-out hover:scale-105 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  allRisksAcknowledged
                    ? 'bg-red-700 hover:bg-red-600 text-white border-red-600 focus:ring-red-500'
                    : 'bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed opacity-50'
                }`}
                aria-label="Confirm download and proceed"
                disabled={!allRisksAcknowledged}
              >
                Yes, Proceed
              </button>
              <button
                onClick={cancelDownload}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 ease-in-out hover:scale-105 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Cancel download"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showDetailsModal && selectedScript && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div
            className="bg-gray-900 rounded-lg shadow-2xl border border-cyan-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 text-left animate-fade-in relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="script-details-title"
            aria-describedby="script-details-description"
          >
            <button
              onClick={closeDetailsModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-2xl"
              aria-label="Close details"
            >
              &times;
            </button>
            <h3 id="script-details-title" className="text-3xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
              {selectedScript.title} Details
            </h3>
            <div id="script-details-description" className="space-y-6 text-gray-200">
              <div>
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Description</h4>
                <p>{selectedScript.description}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Intended Use</h4>
                <p>{selectedScript.intendedUse}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-2">Potential Risks</h4>
                <p className="text-red-300">{selectedScript.potentialRisks}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-2">Compatibility Notes</h4>
                <p className="text-yellow-300">{selectedScript.compatibilityNotes}</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={closeDetailsModal}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 ease-in-out hover:scale-105 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Close script details"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ScriptMarketSection;
