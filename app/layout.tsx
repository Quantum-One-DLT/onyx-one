import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import type { Metadata,Viewport } from 'next'
import { headers } from 'next/headers'
import { ThemeProvider } from "@/components/theme-provider"
import { fontSans } from "@/lib/font"
import { siteConfig } from '@/config/site'
import { cookieToInitialState } from 'wagmi'
import Script from 'next/script'
import { config } from '@/config'
import Web3ModalProvider from '@/context'
import { Toaster } from "@/components/ui/toaster"
import { SiteHeader } from "@/components/site-header"
import { CookieButton } from "@/components/cookie-button"
import Link from 'next/link'
import { SiteFooter } from "@/components/site-footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { cn } from "@/lib/utils"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL('https://quantumone.io'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
      'es-ES': '/es-ES',
      'fr-FR': '/fr-FR',
      'jp-JP': '/jp-JP',
      'ko-KO': '/ko-KP',
      'zh-ZH': '/zh-ZH',
      'pt-PT': '/pt-PT',
    },
  },
  description: siteConfig.description,
  referrer: 'origin-when-cross-origin',
  keywords: ['Wyoming DAO', 'DAO', 'Quantum One DAO', 'Quantum One', 'DA-FI Token', 'Web 3', 'Robert Mourey Jr', 'Cody Clark', 'Sui', 'SAFE', 'smart accounts', 'DAO airdrop', 'DEX', 'BitCoin', 'DeFi ONE', 'new opportunity paradigm', 'DAO owned data centers', 'quantum blockchain', 'Ethereum', 'DeFi', 'omni-chain defi','BitCoin smart contracts', 'ERC20', 'governance token', 'DEX governance token', 'open blockchain network', 'digital consumer assets', 'Wyoming DAO', 'Ethereum', 'DeFi Llama', 'swap token and nfts', 'swap on any chain', 'BitCoin DeFi', 'engineering opportunity', 'token lock campaign', 'Zetachain', 'SAFE', 'quantum based blockchain networks', 'decentralized opportunity', 'Da-Fi Token', 'wallet connect', 'github', 'Uniswap v3 smart contracts', 'TVL', 'post quantum cryptography', 'post quantum cryptocurrency', 'decentralized ai', 'blockchain ai', 'ai', 'decentralized compliance protocols'],
  authors: [{ name: 'Robert Mourey Jr' }],
  creator: 'Robert Mourey Jr',
  publisher: 'Quantum One DAO', 
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'NextJS',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: "https://quantumone.io",
    images: [
      {
        url: 'https://quantumone.io/opengraph-image.jpg', // Must be an absolute URL
        width: 1230,
        height: 640,
      },
      {
        url: 'https://quantumone.b-cdn.net/onyx/opengraph-image.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'blockchain business',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
    twitter: {
         title: siteConfig.name,
         description: siteConfig.description,
         site: '@quantumonedlt',
         creator: '@quantumonedlt',
         images: [
      {
        url: 'https://quantumone.io/twitter-image.jpg', // Must be an absolute URL
        width: 1800,
        height: 900,
      },
      {
        url: 'https://quantumone.b-cdn.net/onyx/twitter-image.jpg',
        width: 1800,
        height: 900,
      },
     ],
   },
}


export const viewport: Viewport =  {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <div className="relative flex min-h-screen flex-col">
             <SiteHeader/>
             <div className="flex-1">
        <Web3ModalProvider initialState={initialState}>{children}<Toaster/></Web3ModalProvider><Analytics/></div>
</div>

<SiteFooter/>
<Script
  type="text/javascript"
  src="https://app.termly.io/resource-blocker/a49f36df-8d64-46a3-9ef6-253dcebfaaf0?autoBlock=off"/>
   <Cookie Button />    
</ThemeProvider>

      </body>
    </html>
  )
}
