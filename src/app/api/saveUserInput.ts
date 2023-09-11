import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, twitter } = req.body;

      const userInput = {
        name,
        twitter,
      };

      await fs.writeFile('path/to/userInput.json', JSON.stringify(userInput));

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error saving user input:', error);
      res.status(500).json({ error: 'Unable to save user input' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
