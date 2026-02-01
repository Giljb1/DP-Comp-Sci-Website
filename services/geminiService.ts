import { GoogleGenAI } from "@google/genai";

// Cache the image URLs to prevent refetching
const imageCache: Record<string, string> = {};

export const generateHeroImage = async (topic: string): Promise<string | null> => {
  if (imageCache[topic]) {
    return imageCache[topic];
  }

  if (!process.env.API_KEY) {
    console.warn("No API_KEY found in environment.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Dynamic prompt based on the topic
    const prompt = `An abstract, professional, academic-style digital art representation of ${topic} in the context of Computer Science. 
    Use a color palette of deep academic blue (#1e3a8a), slate gray (#64748b), and white. 
    Minimalist, high-tech, geometric, suitable for a web header background. 
    Avoid text in the image.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', 
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
            aspectRatio: "16:9",
        }
      }
    });

    const candidates = response.candidates;
    if (candidates && candidates[0] && candidates[0].content && candidates[0].content.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const base64Image = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          const imageUrl = `data:${mimeType};base64,${base64Image}`;
          
          // Cache the result
          imageCache[topic] = imageUrl;
          
          return imageUrl;
        }
      }
    }
    
    return null;

  } catch (error) {
    console.error("Error generating hero image:", error);
    return null;
  }
};