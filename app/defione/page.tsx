import Link from "next/link"
import { Metadata } from 'next'; 
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import ConnectButton from "@/components/connect-button";

export const metadata: Metadata = {
  title: 'DeFi ONE',
};

export default async function DefionePage() {
  
const { data: userSession } = await readUserSession();

 if (!userSession.session) {
   return redirect("/auth");
 }   

return (
    <section className="container mx-auto grid justify-evenly justify-items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col justify-evenly justify-items-center gap-1">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          DeFi ONE <br className=" xs:inline" />
         Swap tokens and NFTs on every chain,  including BitCoin. 
        </h1>
        <p className="max-w-[980px] text-lg text-muted-foreground text-justified">
       DeFi ONE is the first product delivery planned within our roadmap that spans 100+ years and envisages DAO driven data center ownership powering the future of public blockchains and the era of decentralized opportunity. If you are new to Quantum One DAO, connect your wallet using the button above to view your Da-Fi Token balance and verify if you were a recipient of our randomized airdrop. The 1st 3k users will automatically receive an airdrop in a random amount. </p> 

<p className="max-w-[980px] text-lg text-muted-foreground">In the near term, we are finalizing plans for a token sale campaign to help fund the launch of DeFi ONE. The final details will be formally announced via press release in the next few weeks. DeFi ONEs user interface is live and ready for developers to swap in our smart contract addresses upon deployment. Currently, we anticipate including the following goals within the formal campaign announcement: 
</p>
      <ol className="list-decimal list-inside space-y-2 text-lg text-muted-foreground">

<li> Upgrade smart contracts for our existing ERC20 DAO governance token and deployment of upgraded ERC20 token on ZetaChain. </li>

<li> Deployment of optimized Uniswap v3 smart contracts on mainnet and Zetachain. </li> 

<li> Live launch of DeFi ONE PWA and mobile DApps.</li>

<li> Launch of DeFi ONE mobile wallet.</li>

<li> Continued rollout of new Quantum One website and general refinements to pre-existing roadmap, whitepaper, and DAO governance framework. </li>

<li> Additional details will be posted here and accompany several formal AP PR's planned over the next two quarters.</li>
</ol>

<div className="flex flex-col items-center justify-center space-y-6">
          <div className="space-y-3">
       <Link
          href={siteConfig.links.dafietherscan}
          target="_blank"
          rel="noreferrer"
          className="text-3xl font-bold tracking-tighter sm:text-5xl"
        >
          What is Da-Fi Token?
        </Link>
</div>
</div>

<p className="max-w-[980px] text-lg text-muted-foreground text-justified"> Da-Fi Token is legally registered with the state of Wyoming, USA as an open blockchain network token, a digital consumer asset, and as the governance token of Quantum One DAO LLC. The token is one of the few that is also represented off chain by legally will-able, physically printable share certificates through Carta. Wyoming law enables DAO LLC's to operate with full, partial, or zero autonomy and, thus, great flexibility. For those curious, our Securities and Exchange Commision (SEC) issued CIK number is 0001912440.
</p>

<p className="max-w-[980px] text-lg text-muted-foreground text-justified"> 
Upon upgrading Da-Fi Token, we plan on changing the token name and symbol to better align with our vision and brand. The total and maximum supply of the upgraded token will remain the same at 50,000 tokens. Existing holders will automatically receive the new token that's symbol will be announced along with the planned PR campaign. 
</p>

<p className="max-w-[980px] text-lg text-muted-foreground text-justified"> Access the live interface using the button below! 
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
