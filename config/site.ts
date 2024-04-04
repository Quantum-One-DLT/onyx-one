export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Quantum One",
  description:
    "The new opportunity paradigm",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    { 
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  links: {
    twitter: "https://twitter.com/quantumonedlt",
    github: "https://github.com/quantum-one-dlt/onyx-one",
    login: "https://onyx-one-two.vercel.app/auth",
    signup: "https://onyx-one-two.vercel.app/auth-server-action",
  },
}