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
      title: "Governance",
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
