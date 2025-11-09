import { GoogleGenAI, GroundingChunk } from "@google/genai";
import { GeminiApiResponse } from "../types";

export const askGemini = async (prompt: string): Promise<GeminiApiResponse> => {
  // Add a fallback mechanism to ensure API_KEY is available
  if (!process.env.API_KEY) {
    if (typeof window.aistudio !== 'undefined' && typeof window.aistudio.openSelectKey === 'function') {
      alert("No API key found. Please select your API key to use Gemini features.");
      await window.aistudio.openSelectKey();
      // After opening the dialog, we assume the user will select a key.
      // However, process.env.API_KEY might not be immediately updated in this execution context.
      // For robustness, we will proceed, but subsequent API calls might still fail if the key isn't truly set.
      // The calling components also have checks, so this acts as a final safeguard.
    } else {
      throw new Error("API key is not configured. Gemini API functionality is unavailable.");
    }
  }

  // Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    // Using GroundingChunk[] directly from the SDK type.
    const groundingChunks: GroundingChunk[] = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    // Filter out any potential non-web/maps grounding chunks or malformed ones.
    const filteredGroundingChunks: GroundingChunk[] = groundingChunks.filter(chunk => chunk.web || chunk.maps);

    return {
      text,
      groundingChunks: filteredGroundingChunks,
    };
  } catch (error: any) {
    if (error.message.includes("Requested entity was not found.")) {
      // Specific error handling for Veo API key issue, prompt user to re-select key.
      if (typeof window.aistudio !== 'undefined' && typeof window.aistudio.openSelectKey === 'function') {
        alert("Your API key might be invalid or needs to be re-selected. Please select your API key again.");
        await window.aistudio.openSelectKey();
      }
    }
    console.error("Error asking Gemini:", error);
    throw new Error(`Failed to get response from Gemini: ${error.message || 'Unknown error'}`);
  }
};