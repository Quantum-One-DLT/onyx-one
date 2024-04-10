import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import ConnectButton from "@/components/connect-button";

export const metadata: Metadata = {
  title: "DeFi ONE Preview",
  description: "Coming to Zetachain!",
}
export default async function DefionePage() {
  
const { data: userSession } = await readUserSession();

 if (!userSession.session) {
   return redirect("/auth");
 }   

return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          DeFi ONE <br className=" xs:inline" />
         Swap tokens and NFTs on every chain, BitCoin included! 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Once we hit our funding milestone, we will become the first to deploy Uniswap v3 smart contracts on ZetaChain! For now, you can connect your wallet to DeFi ONE and view your balance. 
        </p>
      
         <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.defione}
          className={buttonVariants()}
        >
          DeFi ONE
        </Link>
      </div>
    </section>
  )
}