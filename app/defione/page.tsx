import Link from "next/link"
import { Metadata } from 'next' 
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import ConnectButton from "@/components/connect-button";

export const metadata: Metadata = {
  title: "DeFi ONE Preview",
  description: "Swap tokens and NFTs on every chain, including BitCoin!",
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
         Swap tokens and NFTs on every chain,  including BitCoin. 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
       DeFi ONE is the first product delivery planned within our roadmap that spans 100+ years and envisages DAO driven data center ownership powering the future of public blockchains and the era of decentralized opportunity. </p> 

<p className="max-w-[700px] text-lg text-muted-foreground">In the near term, our token lock campaign milestones include upgrading and changing the name of our existing DAO governance ERC20 'Da-Fi Token', deploying our optimized Uniswap v3 smart contracts on several chains, and launching DeFi ONE browser and mobile DApps and mobile wallet. The current and maximum supply of 50,000 Da-Fi tokens will remain the same. Existing holders will automatically receive the new token that's symbol will be announced along with the planned campaign PR. </p>

<p className="max-w-[700px] text-lg text-muted-foreground">DeFi ONE'S browser interface is live and ready to plug in our smart contract ABI's immediately after deployment. Presently, users can connect their wallet and access their balance on DeFi ONE. </p>
      
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