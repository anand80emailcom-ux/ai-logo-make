import { GoogleGenAI } from "@google/genai";
import { GenerationSettings } from "../types";
import { STYLE_MODIFIERS } from "../constants";

export class GeminiService {
  async generateLogo(settings: GenerationSettings): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const modifier = STYLE_MODIFIERS[settings.style];
    const prompt = `Professional logo design for: ${settings.prompt}. Style: ${modifier}. No text, white background, high resolution, centered mastermark.`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] },
        config: {
          imageConfig: { aspectRatio: settings.aspectRatio }
        }
      });

      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
      throw new Error("Logo generation failed.");
    } catch (error) {
      console.error("Gemini Error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();