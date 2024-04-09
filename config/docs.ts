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
      title: "Contact",
      href: "/contact",
    },
  ],
  sidebarNav: [
    {
      title: "Why?",
      items: [
        {
          title: "Mission",
          href: "/about",
          items: [],
        },
      ],
    },
  ],
}
