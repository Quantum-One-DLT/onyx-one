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
      title: "Dash",
      href: "/dashboard",
    },
  ],
  sidebarNav: [
    {
      title: "Navigator",
      items: [
        {
          title: "Account",
          href: "/account",
          items: [],
        },
        {
          title: "OpenAI",
          href: "/playground",
          items: [],
        },
        {
          title: "Profile",
          href: "/profile",
          items: [],
        },
        {
          title: "Onboarding",
          href: "/onboarding",
          items: [],
        },
      ],
    },
  ],
}