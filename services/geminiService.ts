import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateDevotional = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return "Erro: Chave de API não configurada. Por favor, configure a chave para usar o recurso de IA.";
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `Escreva um devocional curto, inspirador e pentecostal para um membro da Igreja ADMFO.
    O tema é: "${topic}".
    
    Estrutura:
    1. Um título impactante.
    2. Um versículo bíblico chave (Bíblia Almeida).
    3. Uma reflexão de 2 parágrafos encorajando a fé e oração.
    4. Uma oração curta final.
    
    Use formatação Markdown para deixar bonito (negrito, itálico).`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Não foi possível gerar o devocional no momento. Tente novamente.";
  } catch (error) {
    console.error("Erro ao gerar devocional:", error);
    return "Ocorreu um erro ao conectar com o assistente espiritual. Por favor, tente mais tarde.";
  }
};