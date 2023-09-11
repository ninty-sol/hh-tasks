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

      
