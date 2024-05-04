import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

 export const generateText= async (searchText) => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: searchText }],
      model: "gpt-3.5-turbo",
    });

    return completion?.choices[0].message?.content;
  }

