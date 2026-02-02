
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a hero image for a given topic using Gemini.
 * Optimized for subtle, monochromatic blue tech backgrounds.
 */
export const generateHeroImage = async (topic: string): Promise<string | null> => {
  if (!process.env.API_KEY) return null;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Add a random salt to ensure uniqueness on every request
    const salt = Math.random().toString(36).substring(7);
    
    const prompt = `A subtle, premium, and professional technology-themed background for a digital platform.
    Topic: ${topic}. 
    Aesthetic: Monochromatic navy blue and deep slate palette. Cinematic soft focus.
    Unique ID: ${salt}.
    Composition: Minimalist, clean lines, out-of-focus background elements (bokeh). 
    Colors: Deep indigo (#020617), navy (#101c44), and soft electric blue accents.
    Tone: Low contrast, dark, sophisticated, serene. 
    NO TEXT. NO PEOPLE. NO FACES. NO BRIGHT LIGHTS. NO WHITE BACKGROUNDS.
    Style: High-end abstract digital art that functions as a non-distracting wallpaper.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', 
      contents: { parts: [{ text: prompt }] },
      config: { 
        imageConfig: { 
          aspectRatio: "16:9"
        } 
      }
    });

    const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
    if (part?.inlineData?.data) {
      return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};

/**
 * Fetches latest updates about IB Computer Science 2027 using Google Search grounding.
 */
export const fetchLatestCSUpdates = async () => {
  if (!process.env.API_KEY) return null;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: "Find the latest news, official updates, or industry trends relevant to the IB Computer Science 2027 syllabus, specifically focusing on the new Machine Learning module or changes in assessment. Provide a summary of 3 key items with titles, descriptions, and their source URLs.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return { text, sources };
  } catch (error) {
    console.error("Error fetching updates:", error);
    return null;
  }
};

/**
 * AI Tutor chat interaction.
 */
export const askAITutor = async (question: string, context: string) => {
  if (!process.env.API_KEY) return "I'm offline right now. Please check back later.";

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are an expert IB Computer Science tutor for the 2027 syllabus. 
        The student is currently looking at: ${context}. 
        Provide clear, concise academic explanations, practice questions, or coding help in Python. 
        Always relate back to IB assessment criteria when relevant. Use Markdown for formatting.`
      }
    });

    const response = await chat.sendMessage({ message: question });
    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "I encountered an error trying to process that. Try rephrasing?";
  }
};
