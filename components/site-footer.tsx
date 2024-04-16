import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-1 md:px-8 md:py-0">
      <div className="container flex flex-col items-center text-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-xs font-medium leading-loose text-muted-foreground">
          ©{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-center font-medium"
          >
            Quantum One DAO LLC 2024
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
