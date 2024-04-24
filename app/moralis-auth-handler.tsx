import { requestMessage, verifyMessage } from "@/lib/moralis/auth-service";
import { connectToMetamask } from "@/lib/moralis/moralis";
import { isPromise } from "util/types";
import { createClient } from "@supabase/supabase-js";
import config from '@/app/config';
import jwt from 'jsonwebtoken';

const handleAuth = async () => {
    // Connect to Metamask
    const { signer, chain, account } = await connectToMetamask();
  
    if (!account) {
      throw new Error('No account found');
    }
    if (!chain) {
      throw new Error('No chain found');
    }
  
    const { message } = await account.requestMessage( );
  
    const signature = await signer.signMessage(message);
  
    const { user } = await verifyMessage(message.signature);
  
    const _supabaseAuthenticated = createClient(config.NEXT_PUBLIC_SUPABASE_URL, config.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
      global: {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    });
  
    renderUser(user);
  };


function renderUser(user: any) {
    throw new Error("Function not implemented.");
}
  