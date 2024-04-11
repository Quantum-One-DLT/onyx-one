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
       DeFi ONE is the first product delivery planned within our roadmap that spans 100+ years and envisages DAO driven data center ownership powering the future of public blockchains and the era of decentralized opportunity. If you are new to Quantum One DAO, connect your wallet using the button above to view your Da-Fi Token balance and verify if you were a recipient of our randomized airdrop. The 1st 3k users will automatically receive an airdrop in a random amount. </p> 

<p className="max-w-[700px] text-lg text-muted-foreground">In the near term, our token lock campaign milestones include: </p>
          <ol className="list-decimal list-inside space-y-2 text-lg text-muted-foreground">

<li> Mainnet ERC20 token upgrade deployment and Zetachain deployment. Existing DAO governance 'Da-Fi Token' name and symbol will be changed for branding and marketing purposes. </li>

<li> Deployment of optimized Uniswap v3 smart contracts on mainnet and Zetachain. </li> 

<li> Live launch of DeFi ONE DApps and mobile wallet.</li>

<li> Additional details will be posted here as we roll out our new website and accompany several formal AP PR's planned over the next two quarters.</li>
</ol>

<p className="max-w-[700px] text-lg text-muted-foreground"> Da-Fi Token is designated as an open blockchain network registered token and a digital consumer asset in the State of Wyoming, USA. Our SEC issued CIK number is 0001912440. The token is one of the few that is also represented off chain by legally will-able, physically printable share certificates through Carta. Wyoming law enables DAO's to operate with full, partial, or zero autonomy and, thus, great flexibility. </p>

<p className="max-w-[700px] text-lg text-muted-foreground"> The total and maximum supply of the upgraded token will remain the same at 50,000 tokens. Existing holders will automatically receive the new token that's symbol will be announced along with the planned PR campaign. </p>

<p className="max-w-[700px] text-lg text-muted-foreground">DeFi ONE'S browser interface is live and ready to plug in our smart contracts to enable swaps immediately after deployment. Connect your wallet to DeFi ONE for a preview!</p>
      
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