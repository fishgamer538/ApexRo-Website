import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from '../types';
import LoadingSpinner from './LoadingSpinner';

const CHAT_HISTORY_KEY = 'geminiChatHistory';
const API_KEY_SELECTED_KEY = 'geminiApiKeySelected';

const GeminiChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKeySelected, setApiKeySelected] = useState<boolean>(false);

  const chatInstanceRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the chat on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Load chat history and check API key on component mount
  useEffect(() => {
    const storedMessages = localStorage.getItem(CHAT_HISTORY_KEY);
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }

    const checkAndSelectApiKey = async () => {
      if (typeof window.aistudio !== 'undefined' && typeof window.aistudio.hasSelectedApiKey === 'function') {
        let hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          alert("Please select your API key for the chatbot to function. This is a one-time setup.");
          await window.aistudio.openSelectKey();
          // Assume key selection was successful to avoid race conditions as per guidelines
          hasKey = true;
        }
        setApiKeySelected(hasKey);
        localStorage.setItem(API_KEY_SELECTED_KEY, String(hasKey));
      } else {
        // If aistudio is not available, assume API key is handled externally (e.g., dev environment)
        setApiKeySelected(true);
      }
    };

    checkAndSelectApiKey();
  }, []);

  // Initialize chat instance when API key is selected
  useEffect(() => {
    if (apiKeySelected && !chatInstanceRef.current) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatInstanceRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: `You are a friendly, helpful, and engaging AI assistant named ApexRo AI. You are currently operating on the ApexRo website, which was a platform offering advanced tools for Roblox AI exploiting, including script hubs, executors, and bypasses.
            However, ApexRo has officially shut down due to unforeseen circumstances and a shift in project direction. The official Discord server for the ApexRo community is: https://discord.gg/NhKM6gfx.

            Your primary goal is to keep the user company, answer their general questions, and help them pass the time in a light-hearted manner.
            You can also answer questions about ApexRo's *past services*, the *reason for its shutdown*, and provide the Discord link if the user asks for it or for community information, using the information provided here.
            Avoid making up new information about ApexRo's future or current operations, as it is shut down.`,
          },
        });
      } catch (err: any) {
        setError("Failed to initialize chat. Please ensure your API key is valid. " + err.message);
        console.error("Chat initialization error:", err);
      }
    }
  }, [apiKeySelected]);

  // Save chat history whenever messages change
  useEffect(() => {
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);

    if (!apiKeySelected || !chatInstanceRef.current) {
      setError("API key not selected or chat not initialized. Please select your API key.");
      setLoading(false);
      if (typeof window.aistudio !== 'undefined' && typeof window.aistudio.openSelectKey === 'function') {
        await window.aistudio.openSelectKey();
        setApiKeySelected(true); // Assume success
        localStorage.setItem(API_KEY_SELECTED_KEY, String(true));
      }
      return;
    }

    let fullResponse = '';
    try {
      const responseStream = await chatInstanceRef.current.sendMessageStream({ message: userMessage.text });
      for await (const chunk of responseStream) {
        fullResponse += chunk.text;
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.role === 'model' && !prev[prev.length - 2]?.text?.startsWith('Generating...')) {
            // Append to existing model message if it's the last one
            return prev.map((msg, index) =>
              index === prev.length - 1 ? { ...msg, text: fullResponse } : msg
            );
          } else {
            // Otherwise, add a new model message
            return [...prev, { role: 'model', text: fullResponse }];
          }
        });
      }
    } catch (err: any) {
      console.error('Error sending message to Gemini:', err);
      let errorMessage = 'An unexpected error occurred while getting a response.';
      if (err.message.includes("Requested entity was not found.") || err.message.includes("API key not valid")) {
        errorMessage = "Your API key might be invalid or needs to be re-selected. Please select your API key again.";
        if (typeof window.aistudio !== 'undefined' && typeof window.aistudio.openSelectKey === 'function') {
          await window.aistudio.openSelectKey();
          setApiKeySelected(true); // Assume success to try again
          localStorage.setItem(API_KEY_SELECTED_KEY, String(true));
        }
      }
      setError(errorMessage);
      setMessages(prev => [...prev, { role: 'model', text: `Error: ${errorMessage}` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem(CHAT_HISTORY_KEY);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-cyan-700 animate-fade-in flex flex-col h-[600px] mt-8">
      <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Chat with ApexRo AI</h3>
      <div className="flex-grow overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 italic pt-10">
            Start a conversation to pass the time!
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-lg shadow-md ${
                msg.role === 'user'
                  ? 'bg-blue-700 text-white self-end'
                  : 'bg-gray-700 text-gray-100 self-start'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg shadow-md max-w-[75%]">
              <LoadingSpinner />
              <p className="text-sm text-gray-400">AI is thinking...</p>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-center">
            <div className="bg-red-800 border border-red-600 text-red-300 p-3 rounded-lg max-w-[75%] text-sm">
              <p className="font-bold">Error:</p>
              <p>{error}</p>
              <div className="text-center mt-2 text-gray-400 text-xs">
                API Key Management: <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">Billing Info</a>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex">
          <input
            type="text"
            className="flex-grow p-3 rounded-l-lg bg-gray-700 text-white border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
            placeholder={apiKeySelected ? "Type your message..." : "Select API key to chat..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !loading) {
                handleSendMessage();
              }
            }}
            disabled={loading || !apiKeySelected || !chatInstanceRef.current}
            aria-label="Chat input"
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-r-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading || !input.trim() || !apiKeySelected || !chatInstanceRef.current}
            aria-label="Send message"
          >
            Send
          </button>
        </div>
        <button
          onClick={handleClearChat}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-600"
          disabled={loading}
          aria-label="Clear chat history"
        >
          Clear Chat
        </button>
      </div>
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
    </div>
  );
};

export default GeminiChat;