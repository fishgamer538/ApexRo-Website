
import { GroundingChunk } from '@google/genai';

// Aligning GeminiGroundingChunk with the GroundingChunk type from the SDK for consistency.
export type GeminiGroundingChunk = GroundingChunk;

export interface GeminiApiResponse {
  text: string;
  groundingChunks: GeminiGroundingChunk[];
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role?: string; // Optional role or title
  avatarUrl?: string; // Optional URL for user avatar
}

export interface ScriptItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl: string; // Placeholder for download link
  intendedUse: string;
  potentialRisks: string;
  compatibilityNotes: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
