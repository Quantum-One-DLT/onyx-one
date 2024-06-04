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
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">The compliant, chain-agnostic DEX for the quantum/photonic era:
          <br className=" xs:inline" />
          DeFi ONE.
        </h1>
       

<p className="max-w-[980px] text-lg">
DeFi ONE (DFI1) should be a chain-agnostic, KYC/KYB compliant, decentralized digital asset exchange designed to utilize the interoperability and abstractability of ZetaChain and augmented with an off chain, quantum inspired computation and data vectorization protocol powered by programmable, cross-chain messaging capable autonomous agents. DFI1 should offer automated market maker (AMM) capabilities, a simplified yet highly secure onboarding experience and user interface powered by compliant smart accounts that meet or exceed US investment bank account standards. Accordingly, users and DFI1 token holders should be required authenticate their legal identity and or investor accreditation status prior to platform use and token ownership. DFI1's incentivized development and bug bounty programs should be designed to motivate talented individuals and teams to find security vulnerabilities and ideate new algorithms, protocols, and architectures within classical, quantum and photonic computing scopes to ultimately enable inclusive enterprise use cases across numerous industries. Areas of focus should include: 
</p>

<ol className="list-decimal list-inside space-y-2 text-lg text-start">

<li>Pre-launch validation/invalidation of quantum/photonic (QP) threats to public key encryption using technologies available now - ie. LightSolver. 
</li>

<li>If QP threats are validated, we allocate all resources toward ensuring Ethereum and EVM compatible chains safely navigate their quantum contingency plan and hard fork.</li>
</ol>

<p className="max-w-[980px] text-lg"> If QP threats are invalidated, areas of focus should include:
</p>

<ol className="list-decimal list-inside space-y-2 text-lg text-start">

<li>QP inspired, off chain data vectorization protocol enabling AI at quantum speeds</li>

<li>Regulatory compliant cross chain governance and asset custody.</li>

<li>Chain-agnostic, identity claims and investor accreditation represented by NFTs</li>

<li>Simpler and more efficient management of DAO's across multiple blockchains.</li>

<li>Chain-agnostic primitives for efficient DeFi-to-any industry translation ie. insurance</li>


</ol>

<p className="max-w-[980px] text-lg">In the near term, we are exploring partnership, grant and token sale options to help fund the launch of DFI1. The final details will be formally announced via press release and, if necessary, in SAFT format over the next quarter. 
</p>


<Separator/>
<p className="max-w-[980px] text-lg"> Access the DFI1 demo using the button below! Please note that demos are not considered fully tested, functional applications. 
</p>
      
         <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.defione}
                    className={buttonVariants({ size: "sm" })}
        >
          DFI1
        </Link>
      </div>
    </section>
  )
}
