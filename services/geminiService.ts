import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

interface CacheEntry {
  value: string;
  timestamp: number;
}

export class GeminiService {
  private ai: GoogleGenAI;
  private cache = new Map<string, CacheEntry>();
  private readonly CACHE_SIZE = 50;
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes
  private activeRequests = new Set<string>();
  private debounceTimers = new Map<string, NodeJS.Timeout>();

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  private cleanupCache(): void {
    const now = Date.now();
    // Remove expired entries
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.CACHE_TTL) {
        this.cache.delete(key);
      }
    }
    // If still over size, remove oldest entries
    if (this.cache.size > this.CACHE_SIZE) {
      const entries = Array.from(this.cache.entries()).sort((a, b) => a[1].timestamp - b[1].timestamp);
      const toRemove = entries.slice(0, this.cache.size - this.CACHE_SIZE);
      toRemove.forEach(([key]) => this.cache.delete(key));
    }
  }

  async getBikeAdvice(history: ChatMessage[]): Promise<string> {
    // Create cache key from the last user message
    const lastUserMessage = history.filter(msg => msg.role === 'user').pop()?.content || '';
    const cacheKey = lastUserMessage.toLowerCase().trim();

    // Check cache first
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
      return cached.value;
    }

    // Debounce requests (300ms)
    if (this.debounceTimers.has(cacheKey)) {
      clearTimeout(this.debounceTimers.get(cacheKey)!);
    }

    return new Promise((resolve) => {
      const timer = setTimeout(async () => {
        this.debounceTimers.delete(cacheKey);

        // Prevent concurrent requests for same key
        if (this.activeRequests.has(cacheKey)) {
          resolve("Processing your request...");
          return;
        }

        this.activeRequests.add(cacheKey);

        try {
          const contents = history.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
          }));

          const response = await this.ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: contents as any,
            config: {
              systemInstruction: `BNC Motors AI Assistant. Lineup: Challenger S110 (₹1,18,000, 75km/h, 93km), Perfetto (₹1,15,000, 75km/h, 200km), The Boss (₹1,55,000, 110km/h, 150km). Highlight Etrol Battery tech.`,
              temperature: 0.7,
              maxOutputTokens: 120,
            }
          });

          const result = response.text || "Connection issue. Try again.";

          // Cache the result with timestamp
          this.cache.set(cacheKey, { value: result, timestamp: Date.now() });
          this.cleanupCache();

          this.activeRequests.delete(cacheKey);
          resolve(result);
        } catch (error) {
          console.error("Gemini Error:", error);
          this.activeRequests.delete(cacheKey);
          resolve("Service temporarily unavailable.");
        }
      }, 300);
    });
  }
}

export const geminiService = new GeminiService();
