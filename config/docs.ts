import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { 
      title: "Account",
      href: "/account",
    },
    { 
      title: "DFI1",
      href: "/defione",
    },
    { 
      title: "Token",
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
    {
      title: "Docs",
      href: "/docs/dfi1/v1/factorycontract",
    },
  ],
  sidebarNav: [
    {
      title: "Tools",
      items: [
        
        {
          title: "Docs",
          href: "/docs/dfi1/v1/factorycontract",
          items: [],
          
        },
        {
          title: "Sign Out",
          href: "/signout",
          items: [],
          
        },
      ],
    },
  ],
}
