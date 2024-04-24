import { createClient } from '@supabase/supabase-js';
import { VerifyMessage } from './auth-service';
import Moralis from 'moralis';
import jwt from 'jsonwebtoken';
import config from '@/app/config';
Moralis.start({
  apiKey: 'your_api_key_here',
});
import ethers from 'ethers'



const supabase = createClient(config.NEXT_PUBLIC_SUPABASE_URL, config.SUPABASE_SERVICE_ROLE_KEY);

export async function requestMessage({ address, chain, network }: { address: string; chain: string; network: 'evm' }) {
    const result = await Moralis.Auth.requestMessage({
      address,
      chain,
      network,
      domain: 'quantumone.io',
      statement: 'Please sign this message to confirm your identity.',
      uri: 'https://quantumone.io',
      expirationTime: '2023-01-01T00:00:00.000Z',
      timeout: 15,
    });
  
    const { message } = result.toJSON();
  
    return message;
  }

  export async function verifyMessage({ networkType, signature, message }: VerifyMessage) {
    const result = await Moralis.Auth.verify({
      networkType,
      signature,
      message,
    });
  
    const authData = result.toJSON();
  
    let { data: user } = await supabase.from('moralis-users').select('*').eq('moralis_provider_id', authData.profileId).single();
  
    if (!user) {
      const response = await supabase
        .from('moralis-users')
        .insert({ moralis_provider_id: authData.profileId, metadata: authData })
        .single();
      user = response.data;
    }
  
    const token = jwt.sign(
      {
        ...user,
        aud: 'authenticated',
        role: 'authenticated',
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
      },
      config.SUPABASE_JWT_SECRET,
    );
  
    return { user, token };
  }

 export const connectToMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  
    const [accounts, chainId] = await Promise.all([
      provider.send('eth_requestAccounts', []),
      provider.send('eth_chainId', []),
    ]);
  
    const signer = provider.getSigner();
    return { signer, chain: chainId, account: accounts[0] };
  };


