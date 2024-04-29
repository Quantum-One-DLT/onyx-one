import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'


export function CookieButton() {

return (
<div className="absolute bottom-0 right-0 z-50">

              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                
       <a href="#" className={cn("termly-display-preferences")}></a>
     
                <Icons.cookie className="h-16 w-16" />
                <span className="sr-only">Cookie Preferences</span>
              </div>
            
</div>

 )
}