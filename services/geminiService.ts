import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

interface CacheEntry {
  value: string;
  timestamp: number;
}

// Local knowledge base for offline responses
const knowledgeBase = {
  english: {
    price: "Our prices: Challenger S110 at ₹99,900 (EMI ₹2,599), Perfetto at ₹1,14,991 (EMI ₹2,899). Both ex-showroom prices.",
    challenger: "Challenger S110: 90km range, 65km/h speed, 200kg+ loading capacity. Rugged design for Indian roads. Perfect for multipurpose use!",
    perfetto: "Perfetto: 160km range, 70km/h speed, 26L+7L storage. Family-friendly scooter with metal body and 7-year chassis warranty!",
    battery: "Etrol Battery: India's safest lithium battery, IP67 rated, tested to 300°C. 5-year warranty, charges at any 6A socket. Over 1 billion charging points!",
    range: "Challenger S110: 90km, Challenger S125: 180km, Perfetto: 160km. All ranges are per single charge.",
    speed: "Top speeds: Challenger S110 (65km/h), Challenger S125 (70km/h), Perfetto (70km/h).",
    warranty: "Perfetto: 7 years chassis, 5 years battery & motor. Challenger: 5 years battery warranty. Industry-leading coverage!",
    contact: "Contact us: +91-01206089947, +91-4224722561, Email: info@bncmotors.in. Located in Coimbatore, Tamil Nadu.",
    compare: "Challenger: Rugged, multipurpose, 200kg+ loading. Perfetto: Family scooter, more storage, longer range. Both excellent choices!",
    charging: "Etrol batteries charge at any standard 6A socket. Portable charger included. Over 1 billion charging points across India!",
    default: "BNC Motors offers Challenger (multipurpose bike) and Perfetto (family scooter) with Etrol battery technology. How can I help you today?"
  },
  tamil: {
    price: "எங்கள் விலைகள்: சேலஞ்சர் S110 ₹99,900 (EMI ₹2,599), பெர்ஃபெட்டோ ₹1,14,991 (EMI ₹2,899). எக்ஸ்-ஷோரூம் விலைகள்.",
    challenger: "சேலஞ்சர் S110: 90km தூரம், 65km/h வேகம், 200kg+ சுமை திறன். இந்திய சாலைகளுக்கு வலுவான வடிவமைப்பு!",
    perfetto: "பெர்ஃபெட்டோ: 160km தூரம், 70km/h வேகம், 26L+7L சேமிப்பு. குடும்பத்திற்கு ஏற்ற ஸ்கூட்டர், 7 வருட உத்தரவாதம்!",
    battery: "எட்ரோல் பேட்டரி: இந்தியாவின் பாதுகாப்பான லித்தியம் பேட்டரி, IP67 தரம், 300°C சோதனை. 5 வருட உத்தரவாதம், எந்த 6A சாக்கெட்டிலும் சார்ஜ்!",
    range: "சேலஞ்சர் S110: 90km, சேலஞ்சர் S125: 180km, பெர்ஃபெட்டோ: 160km. ஒரு முழு சார்ஜில்.",
    speed: "அதிகபட்ச வேகம்: சேலஞ்சர் S110 (65km/h), சேலஞ்சர் S125 (70km/h), பெர்ஃபெட்டோ (70km/h).",
    warranty: "பெர்ஃபெட்டோ: 7 வருட சேஸிஸ், 5 வருட பேட்டரி மற்றும் மோட்டார். சேலஞ்சர்: 5 வருட பேட்டரி உத்தரவாதம்!",
    contact: "எங்களை தொடர்பு கொள்ள: +91-01206089947, +91-4224722561, மின்னஞ்சல்: info@bncmotors.in. கோயம்புத்தூர், தமிழ்நாடு.",
    compare: "சேலஞ்சர்: வலுவான, பல்நோக்கு, 200kg+ சுமை. பெர்ஃபெட்டோ: குடும்ப ஸ்கூட்டர், அதிக சேமிப்பு, நீண்ட தூரம். இரண்டும் சிறந்த தேர்வுகள்!",
    charging: "எட்ரோல் பேட்டரிகள் எந்த 6A சாக்கெட்டிலும் சார்ஜ் ஆகும். போர்ட்டபிள் சார்ஜர் உள்ளது. இந்தியா முழுவதும் 1 பில்லியன்+ சார்ஜிங் புள்ளிகள்!",
    default: "BNC மோட்டார்ஸ் சேலஞ்சர் (பல்நோக்கு பைக்) மற்றும் பெர்ஃபெட்டோ (குடும்ப ஸ்கூட்டர்) எட்ரோல் பேட்டரி தொழில்நுட்பத்துடன் வழங்குகிறது. இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?"
  },
  malayalam: {
    price: "ഞങ്ങളുടെ വിലകൾ: ചലഞ്ചർ S110 ₹99,900 (EMI ₹2,599), പെർഫെറ്റോ ₹1,14,991 (EMI ₹2,899). എക്സ്-ഷോറൂം വിലകൾ.",
    challenger: "ചലഞ്ചർ S110: 90km റേഞ്ച്, 65km/h സ്പീഡ്, 200kg+ ലോഡിംഗ് കപ്പാസിറ്റി. ഇന്ത്യൻ റോഡുകൾക്ക് ശക്തമായ ഡിസൈൻ!",
    perfetto: "പെർഫെറ്റോ: 160km റേഞ്ച്, 70km/h സ്പീഡ്, 26L+7L സ്റ്റോറേജ്. കുടുംബത്തിന് അനുയോജ്യമായ സ്കൂട്ടർ, 7 വർഷത്തെ വാറന്റി!",
    battery: "എട്രോൾ ബാറ്ററി: ഇന്ത്യയിലെ ഏറ്റവും സുരക്ഷിതമായ ലിഥിയം ബാറ്ററി, IP67 റേറ്റഡ്, 300°C ടെസ്റ്റ്. 5 വർഷത്തെ വാറന്റി, ഏത് 6A സോക്കറ്റിലും ചാർജ്!",
    range: "ചലഞ്ചർ S110: 90km, ചലഞ്ചർ S125: 180km, പെർഫെറ്റോ: 160km. ഒരു ചാർജിൽ.",
    speed: "പരമാവധി വേഗത: ചലഞ്ചർ S110 (65km/h), ചലഞ്ചർ S125 (70km/h), പെർഫെറ്റോ (70km/h).",
    warranty: "പെർഫെറ്റോ: 7 വർഷം ചേസിസ്, 5 വർഷം ബാറ്ററിയും മോട്ടോറും. ചലഞ്ചർ: 5 വർഷം ബാറ്ററി വാറന്റി!",
    contact: "ഞങ്ങളെ ബന്ധപ്പെടുക: +91-01206089947, +91-4224722561, ഇമെയിൽ: info@bncmotors.in. കോയമ്പത്തൂർ, തമിഴ്‌നാട്.",
    compare: "ചലഞ്ചർ: ശക്തമായ, മൾട്ടിപർപ്പസ്, 200kg+ ലോഡിംഗ്. പെർഫെറ്റോ: ഫാമിലി സ്കൂട്ടർ, കൂടുതൽ സ്റ്റോറേജ്, ദൈർഘ്യമേറിയ റേഞ്ച്. രണ്ടും മികച്ച തിരഞ്ഞെടുപ്പുകൾ!",
    charging: "എട്രോൾ ബാറ്ററികൾ ഏത് 6A സോക്കറ്റിലും ചാർജ് ചെയ്യാം. പോർട്ടബിൾ ചാർജർ ഉൾപ്പെടുത്തിയിട്ടുണ്ട്. ഇന്ത്യയിലുടനീളം 1 ബില്യൺ+ ചാർജിംഗ് പോയിന്റുകൾ!",
    default: "BNC മോട്ടോഴ്സ് ചലഞ്ചർ (മൾട്ടിപർപ്പസ് ബൈക്ക്), പെർഫെറ്റോ (ഫാമിലി സ്കൂട്ടർ) എട്രോൾ ബാറ്ററി സാങ്കേതികവിദ്യയോടെ നൽകുന്നു. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും?"
  }
};

function getLocalResponse(query: string, language: 'english' | 'tamil' | 'malayalam'): string {
  const lowerQuery = query.toLowerCase();
  const kb = knowledgeBase[language];

  // Match keywords to responses
  if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('விலை') || lowerQuery.includes('വില')) {
    return kb.price;
  }
  if (lowerQuery.includes('challenger') || lowerQuery.includes('சேலஞ்சர்') || lowerQuery.includes('ചലഞ്ചർ')) {
    return kb.challenger;
  }
  if (lowerQuery.includes('perfetto') || lowerQuery.includes('பெர்ஃபெட்டோ') || lowerQuery.includes('പെർഫെറ്റോ')) {
    return kb.perfetto;
  }
  if (lowerQuery.includes('battery') || lowerQuery.includes('etrol') || lowerQuery.includes('பேட்டரி') || lowerQuery.includes('ബാറ്ററി')) {
    return kb.battery;
  }
  if (lowerQuery.includes('range') || lowerQuery.includes('distance') || lowerQuery.includes('தூரம்') || lowerQuery.includes('റേഞ്ച്')) {
    return kb.range;
  }
  if (lowerQuery.includes('speed') || lowerQuery.includes('வேகம்') || lowerQuery.includes('സ്പീഡ്')) {
    return kb.speed;
  }
  if (lowerQuery.includes('warranty') || lowerQuery.includes('உத்தரவாதம்') || lowerQuery.includes('വാറന്റി')) {
    return kb.warranty;
  }
  if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('தொடர்பு') || lowerQuery.includes('ബന്ധപ്പെടുക')) {
    return kb.contact;
  }
  if (lowerQuery.includes('compare') || lowerQuery.includes('difference') || lowerQuery.includes('ஒப்பீடு') || lowerQuery.includes('താരതമ്യം')) {
    return kb.compare;
  }
  if (lowerQuery.includes('charg') || lowerQuery.includes('சார்ஜ்') || lowerQuery.includes('ചാർജ്')) {
    return kb.charging;
  }

  return kb.default;
}

export class GeminiService {
  private ai: GoogleGenAI | null = null;
  private cache = new Map<string, CacheEntry>();
  private readonly CACHE_SIZE = 50;
  private readonly CACHE_TTL = 5 * 60 * 1000;
  private activeRequests = new Set<string>();
  private debounceTimers = new Map<string, NodeJS.Timeout>();

  constructor() {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
      if (apiKey) {
        this.ai = new GoogleGenAI({ apiKey });
      } else {
        console.warn('No API key found. Using local knowledge base.');
      }
    } catch (error) {
      console.warn('Failed to initialize Gemini AI. Using local knowledge base.', error);
    }
  }

  private cleanupCache(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.CACHE_TTL) {
        this.cache.delete(key);
      }
    }
    if (this.cache.size > this.CACHE_SIZE) {
      const entries = Array.from(this.cache.entries()).sort((a, b) => a[1].timestamp - b[1].timestamp);
      const toRemove = entries.slice(0, this.cache.size - this.CACHE_SIZE);
      toRemove.forEach(([key]) => this.cache.delete(key));
    }
  }

  async getBikeAdvice(history: ChatMessage[], language: 'english' | 'tamil' | 'malayalam' = 'english'): Promise<string> {
    const lastUserMessage = history.filter(msg => msg.role === 'user').pop()?.content || '';
    const cacheKey = `${language}:${lastUserMessage.toLowerCase().trim()}`;

    // Check cache first
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
      return cached.value;
    }

    // If no AI available, use local knowledge base
    if (!this.ai) {
      const response = getLocalResponse(lastUserMessage, language);
      this.cache.set(cacheKey, { value: response, timestamp: Date.now() });
      return response;
    }

    if (this.debounceTimers.has(cacheKey)) {
      clearTimeout(this.debounceTimers.get(cacheKey)!);
    }

    return new Promise((resolve) => {
      const timer = setTimeout(async () => {
        this.debounceTimers.delete(cacheKey);

        if (this.activeRequests.has(cacheKey)) {
          resolve(language === 'tamil' ? "உங்கள் கோரிக்கையை செயலாக்குகிறது..." :
            language === 'malayalam' ? "നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യുന്നു..." :
              "Processing your request...");
          return;
        }

        this.activeRequests.add(cacheKey);

        try {
          const contents = history.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
          }));

          const languageInstructions = {
            english: "Respond in natural, conversational English.",
            tamil: "Respond in natural, conversational Tamil (தமிழ்). Use Tamil script.",
            malayalam: "Respond in natural, conversational Malayalam (മലയാളം). Use Malayalam script."
          };

          const systemInstruction = `You are a helpful BNC Motors AI assistant. ${languageInstructions[language]}

BNC MOTORS PRODUCT LINEUP:

1. CHALLENGER S110: ₹99,900, EMI ₹2,599, 90km range, 65km/h, 200kg+ loading, rugged design
2. CHALLENGER S125: 180km range, 70km/h, 4.2kWh battery
3. PERFETTO: ₹1,14,991, EMI ₹2,899, 160km range, 70km/h, 26L+7L storage, family scooter
4. ETROL BATTERY: India's safest, IP67, 300°C tested, 5-year warranty, 1 billion+ charging points

Contact: +91-01206089947, info@bncmotors.in, Coimbatore, Tamil Nadu

Respond naturally in 2-3 sentences max.`;

          const response = await this.ai!.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: contents as any,
            config: {
              systemInstruction,
              temperature: 0.8,
              maxOutputTokens: 200,
            }
          });

          const result = response.text || getLocalResponse(lastUserMessage, language);

          this.cache.set(cacheKey, { value: result, timestamp: Date.now() });
          this.cleanupCache();

          this.activeRequests.delete(cacheKey);
          resolve(result);
        } catch (error) {
          console.error("Gemini Error:", error);
          this.activeRequests.delete(cacheKey);
          // Fallback to local knowledge base on error
          const fallbackResponse = getLocalResponse(lastUserMessage, language);
          resolve(fallbackResponse);
        }
      }, 300);

      this.debounceTimers.set(cacheKey, timer);
    });
  }
}

export const geminiService = new GeminiService();
