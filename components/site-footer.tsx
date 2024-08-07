import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-1 md:px-8 md:py-0 text-center">
   
        <p className="text-balance text-center text-xs font-medium leading-loose text-muted-foreground">Copyright © {" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-center font-medium"
          >
            2024 QUANTUM ONE DAO LLC Registration No. 2022-001071935 Wyoming, USA.  
          </a>
        </p>
    
    </footer>
  )
}
