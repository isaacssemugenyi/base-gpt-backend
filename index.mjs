import express from 'express';
import cors from 'cors';
import { generateAiText } from './facade.mjs';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    console.log('message inside the container', message)
    const searchResult = await generateAiText(message);
    return res.status(200).json({ message: searchResult });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'An unknown error occured' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
