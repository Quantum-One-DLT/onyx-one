import Link from "next/link"
import { Metadata } from 'next'; 
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import ConnectButton from "@/components/connect-button";
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'DeFi ONE',
};

export default async function DefionePage() {
  
const { data: userSession } = await readUserSession();

 if (!userSession.session) {
   return redirect("/auth");
 }   

return (
    <section className="container mx-auto max-w-[980px] px-4 justify-evenly gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col justify-evenly gap-1 space-y-8">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Swap tokens & NFTs on every chain, including BitCoin with<br className=" xs:inline" />
          DeFi ONE.
        </h1>
        <p className="max-w-[980px] text-lg text-justified">
       DeFi ONE (DFI1) is the first product delivery planned within our roadmap that spans 100+ years and envisages DAO driven data center ownership powering the future of public blockchains and the era of decentralized opportunity. If you are new to Quantum One DAO, connect your wallet using the button above to view your Da-Fi Token balance and verify if you were a recipient of our randomized airdrop. The 1st 3K Quantum One users will automatically receive an airdrop of our governance token in a random amount. </p> 

<p className="max-w-[980px] text-lg">
DeFi ONE (DFI1) is a KYC/KYB compliant, decentralized digital asset exchange designed to utilize the interoperability and abstractability of ZetaChain and augmented with an AI layer compromised of programmable, cross-chain messaging capable autonomous agents and vectorized databases to enable AI token, NFT, and native-to-native coin swaps on every chain, including BitCoin. DFI1 will offer automated market maker (AMM) capabilities, simplified yet highly secure onboarding experience and user interface powered by compliant smart accounts that meet or exceed US investment bank account standards. Accordingly, users and DFI1 token holders will be required to authenticate their identity prior to platform use and token ownership.

DFI1's incentivized development and bug bounty programs are designed to motivate talented individuals and teams to find security vulnerabilities and ideate new algorithms, protocols, and architectures within classical, quantum and photonic computing scopes to ultimately enable inclusive enterprise use cases across numerous industries. Areas of focus will include: </p>
<ol className="list-decimal list-inside space-y-2 text-lg text-justify">

<li> Regulatory compliant cross chain governance and asset custody  </li>

<li>Chain-agnostic NFT's representing legally authenticated identity claims</li>

<li>Simpler and more efficient management of DAO's across multiple blockchains</li>

<li>Translating DeFi to the insurance industry</li>

<li>
True post quantum and photonic compute security and usability</li>

<p className="max-w-[980px] text-lg">In the near term, we are finalizing plans for a token sale campaign to help fund the launch of DFI1. The final details will be formally announced via press release in the next few weeks. DFI1's user interface is live and ready for developers to swap in our smart contract addresses and live API keys upon deployment. Currently, we anticipate including the following goals within the formal campaign announcement: 
</p>
      <ol className="list-decimal list-inside space-y-2 text-lg text-justify">


<li> Deployment of optimized Uniswap v3 smart contracts on Zetachain. </li> 

<li> Live launch of DeFi ONE PWA and mobile DApps.</li>

<li> Deployment of DFI1's ZRC20 omnichain governance token on ZetaChain. We'll post the Simple Agreement for Future Token (SAFT) and tokenomics once finalized.
 </li>

<li> Launch of DeFi ONE mobile wallet.</li>

<li> Continued rollout of new Quantum One website and general refinements to pre-existing roadmap, whitepaper, and DAO governance framework. </li>

<li> Additional details will be posted here and accompany several formal AP PR's planned over the next two quarters.</li>
</ol>

<Separator/>
<p className="max-w-[980px] text-lg"> Access the DFI1 demo using the button below! Please note that demos are not considered fully tested, functional applications. 
</p>
      
         <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.defione}
                    className={buttonVariants({ size: "small" })}
        >
          DFI1
        </Link>
      </div>
    </section>
  )
}
