import React, { useState } from 'react';
import { askGemini } from '../services/geminiService';
import { GeminiGroundingChunk } from '../types';
import LoadingSpinner from './LoadingSpinner';

const quickSearchQueries = [
  "ScriptWare v4 bypasses",
  "Best free Roblox executors 2024",
  "Roblox game client exploits",
  "How to protect against Roblox client modifications?",
];

const AiSearchSection: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [groundingChunks, setGroundingChunks] = useState<GeminiGroundingChunk[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);
    setGroundingChunks([]);

    try {
      // Check if API key is selected before making the call, especially for Veo, but good practice.
      if (typeof window.aistudio !== 'undefined' && typeof window.aistudio.hasSelectedApiKey === 'function') {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          alert("Please select your API key before asking a question.");
          await window.aistudio.openSelectKey();
          setLoading(false);
          return;
        }
      }

      const apiResponse = await askGemini(prompt);
      setResponse(apiResponse.text);
      setGroundingChunks(apiResponse.groundingChunks);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      console.error('Error fetching Gemini response:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setPrompt('');
    setResponse(null);
    setGroundingChunks([]);
    setError(null);
  };

  const handleQuickQuery = (query: string) => {
    setPrompt(query);
    // Directly send the message after setting the prompt
    // This will trigger the search with the new prompt
    handleSendMessage();
  };

  return (
    <section id="ai-search" className="py-20 px-4 bg-black text-gray-100">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_3px_rgba(0,255,255,0.5)]">Deep Scan: AI-Powered Exploit &amp; Executor Search</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Leverage ApexRo's AI to pinpoint the latest Roblox exploits, powerful executors, and advanced scripting techniques. Get real-time intelligence tailored to your needs.
        </p>

        <div className="bg-gray-900 rounded-lg shadow-xl p-6 mb-8">
          <div className="mb-4 flex flex-wrap gap-2 justify-center">
            {quickSearchQueries.map((query, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuery(query)}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-4 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {query}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              className="flex-grow p-3 rounded-lg bg-gray-800 text-white border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
              placeholder="e.g., Search for 'ScriptWare v4 bypasses' or 'best free Roblox executors 2024'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              disabled={loading}
            />
            <button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading || !prompt.trim()}
            >
              {loading ? 'Scanning...' : 'Search'}
            </button>
            <button
              onClick={handleClear}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-600"
              disabled={loading}
            >
              Clear
            </button>
          </div>

          {loading && <LoadingSpinner />}
          {error && (
            <div className="bg-red-800 border border-red-600 text-red-300 p-4 rounded-lg mt-4">
              <p className="font-bold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          {response && (
            <div className="bg-gray-800 p-6 rounded-lg mt-4 shadow-inner">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Response:</h3>
              <p className="text-gray-200 whitespace-pre-wrap">{response}</p>

              {groundingChunks.length > 0 && (
                <div className="mt-6 border-t border-gray-700 pt-4">
                  <h4 className="text-lg font-semibold mb-2 text-cyan-300">Sources:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {groundingChunks.map((chunk, index) => (
                      <li key={index}>
                        {chunk.web && (
                          <a
                            href={chunk.web.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-400 hover:underline hover:text-teal-300"
                          >
                            {chunk.web.title || chunk.web.uri}
                          </a>
                        )}
                        {chunk.maps && (
                          <>
                            <a
                              href={chunk.maps.uri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lime-400 hover:underline hover:text-lime-300"
                            >
                              {chunk.maps.title || chunk.maps.uri}
                            </a>
                            {/* Use chunk.maps.uri as review snippets don't have their own URI property */}
                            {chunk.maps.placeAnswerSources?.reviewSnippets?.map((review, rIndex) => (
                              <a
                                key={`review-${index}-${rIndex}`}
                                href={chunk.maps.uri}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-lime-500 hover:underline hover:text-lime-400 text-sm"
                              >
                                (Review)
                              </a>
                            ))}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-600 text-center mt-8">
            Please be aware that while we strive for accuracy, the AI's responses are generated and should be verified for critical information.
        </p>
        <div className="text-center mt-4 text-gray-400 text-sm">
          API Key Management: <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">Billing Information</a>
        </div>
      </div>
    </section>
  );
};

export default AiSearchSection;