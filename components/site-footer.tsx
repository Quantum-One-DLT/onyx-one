import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-4 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          Copyright{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium"
          >
            Quantum One DAO LLC 2024
          </a>
          .
        </p>
      </div>
    </footer>
  )
}