import type { NextApiRequest, NextApiResponse } from 'next';
import { requestMessage, verifyMessage } from '@/lib/moralis/auth-service'; // Assuming same location

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
      if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
      }
  
      const { networkType, message, signature }: { networkType: "evm"; message: string; signature: string } = req.body;
  
      const user = await verifyMessage({
        networkType,
        message,
        signature,
      });
  
      res.status(200).json({ user });
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' });
      console.error(err); // Log the actual error for debugging
    }
  }