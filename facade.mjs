// import { generateText } from "./aiModel/chatGpt";
// Import generateLlamaText from the llama.mjs file
import { generateLlamaText } from './aiModel/llama.mjs';

// Expose generateAiText to other files
export const generateAiText = async (searchText) => {
  try {
    // Call the llamaAI with the user text
    return await generateLlamaText(searchText);
  } catch (error) {
    throw new Error(error);
  }
};
