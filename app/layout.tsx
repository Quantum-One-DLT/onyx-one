import './globals.css'
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
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: "/opengraph-image.jpg",
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://quantumone.io",
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
