import type { NextApiRequest, NextApiResponse } from 'next';
import { requestMessage, verifyMessage } from '@/lib/moralis/auth-service';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
      if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
      }
  
      const { address, chain, networkType }: { address: string; chain: string; networkType: "evm" } = req.body;
  
      const message = await requestMessage({
        address,
        chain,
        networkType,
      });
  
      res.status(200).json({ message });
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' });
      console.error(err); // Log the actual error for debugging
    }
  }