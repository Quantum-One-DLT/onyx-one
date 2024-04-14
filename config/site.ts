export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Quantum One",
  description:
    "Swap tokens and NFTs on any chain, including BitCoin with DeFi ONE. Created by Quantum One DAO - the new opportunity paradigm.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    { 
      title: "DeFi ONE",
      href: "/defione",
    },
    { 
      title: "Profile",
      href: "/profile",
    },
    { 
      title: "About",
      href: "/about",
    },
    { 
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/quantumonedlt",
    github: "https://github.com/quantum-one-dlt/onyx-one",
    defione:
"https://defione.io",
    login:"https://quantumone.io/auth",
    signup:"https://quantumone.io/onboarding",
    signout:"https://quantumone.io/signout",
  },
}
