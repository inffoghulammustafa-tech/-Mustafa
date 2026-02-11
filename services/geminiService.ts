
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a highly empathetic and knowledgeable "Rohani Consultant" (Spiritual Advisor) for a spiritual healing center. 
Your goal is to provide guidance, comfort, and general information about Islamic spiritual healing (Rohani Ilaj).
Rules:
1. Use a respectful, humble, and compassionate tone.
2. Provide general Quranic references or prayers (Duas) for peace and well-being.
3. If the user asks for "Rohani Ilaj" for specific problems (marriage, health, business), suggest they contact the center via the WhatsApp button for a personalized "Istikhara".
4. Do not offer medical advice. Always suggest consulting a doctor for physical illness.
5. Keep answers concise but warm.
6. Use Islamic greetings like "Assalamu Alaikum".
7. Prefer responding in Urdu if the user initiates in Urdu or if asked to provide Urdu content.
`;

export const getSpiritualGuidance = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
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
    return "Assalamu Alaikum. I'm having trouble connecting to my knowledge base. Please contact our center directly via WhatsApp for any spiritual assistance.";
  }
};

export const generateImageForTopic = async (topic: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
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

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};
