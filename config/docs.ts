import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    { 
      title: "Account",
      href: "/account",
    },
    { 
      title: "DeFi ONE",
      href: "/defione",
    },
    { 
      title: "DA-FI Token",
      href: "/dafitoken",
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
  sidebarNav: [
    {
      title: "Tools",
      items: [
        {
          title: "Sign Out",
          href: "/signout",
          items: [],
        },
      ],
    },
  ],
}
