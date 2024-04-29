import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'


export function CookieButton() {

return (
<div className="h-screen">
<Link
              href="#'
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-0 right-0 z-50"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                
       <a href="#" className={cn("termly-display-preferences")}></a>
     
                <Icons.cookie className="h-5 w-5" />
                <span className="sr-only"></span>
              </div>
            </Link>
</div>

 )
}