import { Metadata } from 'next'
import Image from 'next/image'
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/app/auth/components/user-auth-form"
import { PromoVideo } from '@/components/ui/promo-video'
import { useState } from 'react'
import { Separator } from '@/components/ui/separator'

interface YouTubeID {
  youtubeID : string;
}
export const metadata: Metadata = {
  title: 'About',
}

const youtubeID = "HR6a2aHhY_c?si=D1u5cPVyi7xuDWdf" as unknown as string;




export default function AboutPage() {
  return (
      <div className="w-full py-6 space-y-8">
      <div className="container space-y-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h1>
            <p className="max-w-[980px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify"> We seek to unite the public blockchain community to reclaim our sovereignty from cloud service providers, build a portfolio of tangible revenue generating assets, and assure a highly successful post quantum era by leveraging our $2 trillion plus USD market capitalization to build pre and post quantum capable, eco-friendly, 'DAO owned' data centers and, thus, the cornerstone of future public blockchain technology and the era of greater decentralized opportunity. Simultaneously, we are committed to advancing global economic prosperity by promoting financial inclusion, security, autonomy, asset ownership, and the regulatory compliance thereof.
            </p>
            <Separator/>
          </div>
        </div>

<div className="flex flex-col justify-center space-y-8">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl">Our Values</h1>
</div>
</div>
        <div className="max-w-[980px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify mx-auto space-y-8">
<p>Our overarching vision was formed against the backdrop of the rapidly accelerating arrival of the quantum and photonic computing era. With great humility, we postulated the rapid acceleration of quantum computing would significantly impact public blockchains 2 years before Ethereum founder Vitalik Buterin admitted on October 18, 2023 that the sudden arrival of the quantum era would, in fact, necessitate a hard fork of the Ethereum blockchain and, thus, jeopardize the integrity and continuity of not only the Ethereum blockchain, but public blockchain technology in its entirety. Buterin's admittance is proof that the significance of quantum computing as it relates to public blockchain technology has been largely understated. Thus, we firmly believe it is time to decisively reevaluate our trajectory and consolidate our collective vision before  quantum advantage becomes the next ChatGPT like technological explosion. With companies like IonQ and others proclaiming quantum advantage is around the corner, time is unquestionably of essence. </p>
          <ol className="list-decimal list-inside space-y-3">
            
             <li>Decentralization: Embrace the decentralized nature of decision-making, allowing all stakeholders to have a voice in governance processes.</li>

<li>Transparency: Ensure transparency in operations, finances, and decision-making to build trust among members and the wider community.</li>

 <li>Autonomy: Empower individuals to take ownership of their contributions and decisions within the organization.</li>

<li>Innovation: Foster a culture of innovation and experimentation to drive continuous improvement and adaptation to evolving challenges.</li>

<li>Inclusivity: Promote diversity and inclusivity, welcoming individuals from all backgrounds and perspectives to contribute to the success.</li>

<li>Accountability: Hold members accountable for their actions and decisions, establishing clear mechanisms for responsibility and consequences.</li>

<li>Sustainability: Prioritize sustainable practices in all aspects of operations, including environmental, social, and economic sustainability for both pre and post quantum computing eras.</li>

<li>Community Engagement: Actively engage with and listen to the community to ensure that the actions align with the needs and values of its members.</li>
<li>Fairness: Uphold principles of fairness and equity in resource distribution, decision-making processes, and governance structures.</li>

<li>Openness: Maintain an open and collaborative environment where ideas are freely shared, debated, and implemented for the benefit of the entire ecosystem.</li>
          </ol>
        
<Separator/>
      
     
          <div className="space-y-8">
          <h5 className="max-w-[980px] place-self-center text-center text-3xl font-bold tracking-tighter sm:text-5xl"> Why are Gemini and ChatGPT Bullish on DAO Owned Data Centers?</h5>

         
           <div className="place-self-center max-w-[980px] aspect-video overflow-hidden rounded-lg shadow-lg ">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/HR6a2aHhY_c?si=L2O3Cf7pQ-0HHhsP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
 
          </div>
          </div>
          
    

<Separator/>

<div className="flex flex-col space-y-6">
          <div className="space-y-3">
       <Link
          href={siteConfig.links.dafietherscan}
          target="_blank"
          rel="noreferrer"
          className="text-center text-3xl font-bold tracking-tighter sm:text-5xl"
        >
          What is Da-Fi Token?
        </Link>
</div>
</div>

<p className="max-w-[980px] text-lg text-muted-foreground text-justify"> Da-Fi Token is legally registered with the state of Wyoming, USA as an open blockchain network token, a digital consumer asset, and as the governance token of Quantum One DAO LLC. The token is one of the few that is also represented off chain by legally will-able, physically printable share certificates through Carta. It's important to mention that Wyoming law enables DAO LLC's to operate with full, partial, or zero autonomy and, thus, great flexibility and practicality. 
</p>

<p className="max-w-[980px] text-lg text-muted-foreground text-justify"> 
Upon upgrading and migrating DA-FI token to a ZRC20 omnichain token on Zetachain, we anticipate changing the token name and symbol to better align with Quantum One's vision and brand. The total and maximum supply of the upgraded token will remain the same at 50,000 tokens. Existing holders will automatically receive the new token that's symbol will be announced along with the planned PR campaign. 
</p>

<Separator/>

<div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Team</h2>
</div>
</div>

<div className="grid grid-cols-1 justify-items-center">
        <div><Image
          src="https://quantumone.b-cdn.net/rmourey-profile-pic.png"
          width={500}
          height={500}
          alt="Robert Mourey profile picture"
          className="rounded-full border-none shadow-sm"
        /> 
        </div>
        
        <Link
          href={siteConfig.links.linkedinRM}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-center font-muted"
        >
          Robert Mourey Jr
        </Link>
<div className="text-xs text-center font-muted">Founder/CEO</div>
</div>

<div className="grid grid-cols-1 justify-items-center">
<div><Image
          src="https://quantumone.b-cdn.net/onyx/CodyClark-prof.png"
          width={500}
          height={500}
          alt="Cody Clark profile picture"
          className="rounded-full border-none shadow-sm"
        /></div>
<div className="text-sm text-center font-muted">Cody Clark</div>
<div className="text-xs text-center font-muted">Co-Founder/COO</div>
  </div>
        </div>

        </div>
    </div>
  )
}
