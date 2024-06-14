import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage, http } from 'wagmi'
import { mainnet, sepolia, optimism, classic, fantom, polygon, filecoin, gnosis, shimmer, zkSync, defichainEvm, iotex, zetachainAthensTestnet, foundry, celo, arbitrum } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Quantum One',
  description: 'Swap tokens and NFTs on any chain, including BitCoin with DeFi ONE. Created by Quantum One DAO - the new opportunity paradigm.',
  url: 'https://www.quantumone.io', // origin must match your domain & subdomain
  icons: ['https://quantumone.b-cdn.net/onyx/qlogo.svg', 'https://quantumone.b-cdn.net/onyx/opengraph-image.png', 'https://quantumone.b-cdn.net/onyx/twitter-image.png', 'https://quantumone.b-cdn.net/onyx/apple-touch-icon.jpg' ]
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
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/tIh40leTPQfMnBjxhQgufOcR8XLsIEYj'),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/77QUMuC-ZMH9rBPab1aBMR8X_pJxBg5p'),
  },
})
