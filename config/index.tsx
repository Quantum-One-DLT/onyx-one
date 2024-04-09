import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia, optimism, classic, fantom, polygon, filecoin, gnosis, shimmer, zkSync, defichainEvm, iotex, zetachainAthensTestnet, foundry, celo, arbitrum } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Quantum One',
  description: 'The new opportunity paradigm.',
  url: 'https://onyx-one-two.vercel.app', // origin must match your domain & subdomain
  icons: ['https://quantumone.b-cdn.net/onyx/qlogo.svg']
}
declare module 'wagmi' { 
  interface Register { 
    config: typeof config 
  } 
} 

// Create wagmiConfig
const chains = [mainnet, sepolia, optimism, classic, fantom, polygon, filecoin, zkSync, gnosis, shimmer, defichainEvm, iotex, zetachainAthensTestnet, foundry, celo, arbitrum] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})