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
       DeFi ONE is the first product delivery planned within our roadmap that spans 100+ years and envisages DAO driven data center ownership powering the future of public blockchains and the era of decentralized opportunity. If you are new to Quantum One DAO, connect your wallet using the button above to view your Da-Fi Token balance and verify if you were a recipient our randomized airdrop. The next 2814 new users will automatically receive an airdrop in a random amount. </p> 

<p className="max-w-[700px] text-lg text-muted-foreground">In the near term, our token lock campaign milestones include: </p>
          <ol className="list-decimal list-inside space-y-2 text-lg text-muted-foreground">

<li> Upgrading and changing the name of our existing DAO governance ERC20 'Da-Fi Token'</li>

<li> Deploying our optimized Uniswap v3 smart contracts on several chains. </li> 

<li> Launching DeFi ONE browser and mobile DApps and mobile wallet.</li>
</ol>

<p className="max-w-[700px] text-lg text-muted-foreground">
The total and maximum supply of the upgraded token will remain the same as Da-Fi Token at 50,000 tokens. Existing Da-Fi Token holders will automatically receive the new token that's symbol will be announced along with the planned campaign PR. The upgraded token will afford holders separate governance rights for DeFi ONE and Quantum One DA0 and the right to claim ownership of the coin associated with our planned native blockchain. The claim amount of our native coin will be directly correlated to the ratio of maximum token/native coin supply. Addditional details will be provided in our whitepaper and roadmap</p>

<p className="max-w-[700px] text-lg text-muted-foreground">DeFi ONE'S browser interface is live and ready to plug in our smart contract ABI's immediately after deployment. Head over to DeFi ONE, connect your wallet and view your balance. </p>
      
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