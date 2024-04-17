import './globals.css'
import { Metadata } from 'next'
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
    },
  description: siteConfig.description,
  referrer: 'origin-when-cross-origin',
  keywords: ['DAO', 'Quantum One DAO', 'Quantum One', 'DEX', 'BitCoin', 'DeFi ONE', 'DAO owned data centers', 'quantum blockchain', 'Ethereum', 'DeFi', 'omni-chain defi','BitCoin smart contracts', 'ERC20', 'governance token', 'DEX governance token', 'open blockchain network', 'digital consumer assets', 'Wyoming DAO', 'Ethereum', 'DeFi Llama', 'swap token and nfts', 'swap on any chain', 'BitCoin DeFi', 'engineering opportunity', 'token lock campaign', 'Zetachain', 'SAFE', 'quantum based blockchain networks', 'decentralized opportunity', 'Da-Fi Token', 'wallet connect', 'github', 'Uniswap v3 smart contracts', 'TVL', 'post quantum cryptography', 'post quantum cryptocurrency', 'decentralized ai', 'blockchain ai', 'ai', 'decentralized compliance protocols'],
  authors: [{ name: 'Robert Mourey Jr' },
  applicationName: 'Quantum One', 
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
        alt: 'blockchain business,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
        <Web3ModalProvider initialState={initialState}>{children}<Toaster/></Web3ModalProvider></div>
<SiteFooter/>
</div>
</ThemeProvider>
      </body>
    </html>
  )
}
