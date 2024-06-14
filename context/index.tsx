'use client'

import React, { ReactNode } from 'react'
import { config, projectId } from '@/config'
import { SendTransaction } from '@/components/forms/send-transaction'
import { createWeb3Modal } from '@web3modal/wagmi/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { type State, WagmiProvider } from 'wagmi'

type Props = {
  children: ReactNode,
  initialState: State | undefined,
}
// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true,
  
  tokens: {
    1: {
      address: '0xeaaD65885fEA47a3B1258935f4Ce83aaB06FDD3A',
      image: 'https://quantumone.b-cdn.net/onyx/share-32x32.png',

    },
    
  },

 themeVariables: {
     '--w3m-accent': '#020713',

  },

})

export default function Web3ModalProvider({
  children,
  initialState
}: Props ) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
