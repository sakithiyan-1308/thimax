import { GoogleGenAI } from "@google/genai";
import { ImageSize } from "../types";

// Helper to get the correct client. 
// For Pro models (Nano Banana Pro), we need to ensure the user selected a key via window.aistudio if available.
const getClient = async (useUserKey: boolean = false): Promise<GoogleGenAI> => {
  if (useUserKey && window.aistudio) {
    // Determine if we need to prompt for a key
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
       // This should be handled by the UI before calling service, but as a safeguard:
       throw new Error("API Key selection required for Pro models.");
    }
    // With the key selected, the environment variable is injected automatically
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  
  // Default to standard process.env.API_KEY for non-pro features (like Flash Image editing)
  // or if we are just using the provided key environment.
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateImagePro = async (prompt: string, size: ImageSize): Promise<string> => {
  // Model: gemini-3-pro-image-preview
  // Requirement: User must select their own API key.
  const ai = await getClient(true);
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [
        { text: prompt }
      ]
    },
    config: {
      imageConfig: {
        imageSize: size,
        aspectRatio: "16:9" // Suitable for hero images
      }
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  
  throw new Error("No image generated from response.");
};

export const editImageFlash = async (prompt: string, imageBase64: string, mimeType: string): Promise<string> => {
  // Model: gemini-2.5-flash-image
  // Uses standard API key
  const ai = await getClient(false);

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: imageBase64,
            mimeType: mimeType
          }
        },
        { text: prompt }
      ]
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }

  throw new Error("No image returned from editing process.");
};
