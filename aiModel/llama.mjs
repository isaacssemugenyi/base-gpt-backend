// Import the llamaai package (developed by facebook)
import LlamaAI from 'llamaai';

// Create LLAMA instance
const llamaAPI = new LlamaAI(process.env.LLAMA_API_KEY);

// Expose the method generateLlamaText to other files
export const generateLlamaText = async (searchText) => {
  const apiRequestJson = {
    messages: [{ role: 'system', content: searchText }],
    stream: false,
  };

  try {
    // Execute the Request to LLAMA Ai
    const results = await llamaAPI.run(apiRequestJson);

    // Send response back to the user
    return results?.choices[0].message?.content;
  } catch (error) {
    throw new Error(error);
  }
};
