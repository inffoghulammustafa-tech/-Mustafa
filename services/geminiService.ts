
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

const SYSTEM_INSTRUCTION = `
You are a highly empathetic and knowledgeable "Rohani Consultant" (Spiritual Advisor) for a spiritual healing center. 
Your goal is to provide guidance, comfort, and general information about Islamic spiritual healing (Rohani Ilaj).

Rules:
1. Use a respectful, humble, and compassionate tone. Always start with "Assalamu Alaikum" in the first message.
2. Provide general Quranic references or prayers (Duas) for peace, patience, and well-being.
3. If the user asks for "Rohani Ilaj" for specific problems (marriage, health, business, black magic), suggest they contact the center via the WhatsApp button for a personalized "Istikhara" or professional help.
4. Do not offer medical advice. Always suggest consulting a doctor for physical illness.
5. Keep answers concise but warm. Avoid being overly clinical.
6. Prefer responding in Urdu if the user initiates in Urdu. If they speak English, respond in English but you can include Urdu/Arabic Duas with translations.
7. If asked about your identity, state that you are the Digital Rohani Assistant for the Rohani Ilaj Center.
`;

/**
 * Fix: Changed parameter type to string | ChatMessage[] to support both direct prompts (from TopicPage.tsx)
 * and chat history (from ChatAssistant.tsx).
 */
export const getSpiritualGuidance = async (input: string | ChatMessage[]) => {
  try {
    // Guidelines: Use process.env.API_KEY directly when initializing.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    // Map input to the format expected by the Gemini API
    let contents;
    if (typeof input === 'string') {
      contents = input;
    } else {
      contents = input.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model' as const,
        parts: [{ text: msg.text }]
      }));
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    return response.text || "I apologize, but I am unable to respond at this moment. Please contact our spiritual experts via WhatsApp for better guidance.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Assalamu Alaikum. I am experiencing a temporary connection issue. Please reach out to our center directly via WhatsApp for immediate spiritual assistance.";
  }
};

export const generateImageForTopic = async (topic: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A professional, high-quality, and spiritually serene symbolic image representing the spiritual healing topic: "${topic}". The style should be elegant, peaceful, and suitable for an Islamic spiritual website. Avoid human faces, focus on light, nature, or abstract spiritual symbols.`,
          },
        ],
      },
    });

    // Guidelines: Iterate through candidates and parts to find the image part; do not assume the first part is an image.
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data;
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};
