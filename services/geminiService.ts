import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generatePropertyDescription = async (
  type: string,
  location: string,
  price: string,
  features: string
): Promise<string> => {
  try {
    const prompt = `
      Write a compelling, professional, and attractive real estate listing description (max 100 words) for a property with the following details in Baramati, India.
      Type: ${type}
      Location: ${location}
      Price: ${price}
      Key Features: ${features}
      
      Tone: Premium, inviting, and trustworthy.
      Do not include any markdown formatting like asterisks or hash symbols. Just plain text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate description at this time.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "Error generating description. Please try again manually.";
  }
};
