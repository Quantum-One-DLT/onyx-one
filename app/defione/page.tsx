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
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">The compliant, chain-agnostic DEX for the quantum/photonic era.
        </h1>
       

<p className="max-w-[980px] text-lg">
DeFi ONE (DFI1) should be a chain-agnostic, KYC/KYB compliant, decentralized digital asset exchange designed to utilize the interoperability and abstractability of ZetaChain and augmented with an off chain, quantum inspired computation and data vectorization protocol powered by programmable, cross-chain messaging capable autonomous agents. DFI1 should offer automated market maker (AMM) capabilities, a simplified yet highly secure onboarding experience and user interface powered by compliant smart accounts that meet or exceed US investment bank account standards. Accordingly, users and DFI1 token holders should be required authenticate their legal identity and or investor accreditation status prior to platform use and token ownership. DFI1's incentivized development and bug bounty programs should be designed to motivate talented individuals and teams to find security vulnerabilities and ideate new algorithms, protocols, and architectures within classical, quantum and photonic computing scopes to ultimately enable inclusive enterprise use cases across numerous industries. Areas of focus should include: 
</p>

<ol className="list-decimal list-inside space-y-2 text-lg text-start">


<li>Development of a quantum inspired, off- chain AI protocol</li>

<li>Simpler, regulatory compliant cross chain DAO governance and asset management and custody.</li>

<li>Chain-agnostic, NFT managed digital identity and accreditation </li>

<li>Chain-agnostic primitives for efficient DeFi-to-any industry translation ie. insurance</li>


</ol>

<p className="max-w-[980px] text-lg">In the near term, we are exploring partnership, grant and token sale options to help fund the launch of DFI1. The final details will be formally announced via press release and, if necessary, in SAFT format over the next quarter. 
</p>


<Separator/>
<p className="max-w-[980px] text-lg"> We have a couple of demo's we're currently working on. DFI1 has multiple cross-chain capabilities including contract-to-contract messaging, token/NFT swaps, and liquidity pools. DFI1 DEX is a Uniswap v3 based DEX that's ready for developers to add in our smart contracts and API keys upon deployment. 
</p>
      
         <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.defione}
                    className={buttonVariants({ size: "sm" })}
        >
          DFI1
        </Link>
<Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.dexdefione}
                    className={buttonVariants({ size: "sm" })}
        >
          DFI1 DEX
        </Link>
      </div>
    </section>
  )
}
