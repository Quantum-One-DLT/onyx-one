import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from '@/components/icons'
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import ConnectButton from "@/components/connect-button";

export default async function IndexPage() {
  const { data: userSession } = await readUserSession();

	if (userSession.session) {
		return redirect("/account");
	}
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 px-4 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Opportunity is Engineered. 
	</h1>
        <p className="max-w-[980px] text-lg text-muted-foreground">
        Sign up to learn how you can help launch DeFi ONE on Zetachain and receive our DAO governance token airdrop!  
        </p>
</div>
      
      
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.login}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Login
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.signup}
          className={buttonVariants({ variant: "outline" })}
        >
          Sign Up
        </Link>
        <Link
              href={siteConfig.links.defione}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
              >
             DeFi ONE
            </Link>
          
      </div>
    </section>
  )
}
