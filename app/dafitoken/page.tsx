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


export const metadata: Metadata = {
  title: 'DA-FI Token',
}

export default function DafitokenPage() {
    return (
        <div className="w-full py-6 space-y-8">
        <div className="container space-y-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3 text-center">
       <Link
          href={siteConfig.links.dafietherscan}
          target="_blank"
          rel="noreferrer"
          className="text-3xl font-bold tracking-tighter sm:text-5xl"
        >
          What is Da-Fi Token?
        </Link>
</div>
              <p className="max-w-[980px] text-lg text-justify"> 
              Da-Fi Token is legally registered with the state of Wyoming, USA as an open blockchain network token, a digital consumer asset, and as the governance token of Quantum One DAO LLC. The token is one of the few that is also represented off chain by legally will-able, physically printable share certificates through Carta. It's important to mention that Wyoming law enables DAO LLC's to operate with full, partial, or zero autonomy and, thus, great flexibility and practicality.
              </p>

              <p className="max-w-[980px] text-lg text-justify">Upon upgrading and migrating DA-FI token to a ZRC20 omnichain token on Zetachain, we anticipate changing the token name and symbol to better align with Quantum One's vision and brand. The total and maximum supply of the upgraded token will remain the same at 50,000 tokens. Existing holders will be required to claim the new token that's symbol will be announced along with the planned PR campaign provided they authenticate their identity and claim their tokens within 180 days of deployment. Through a combination of Zetachain and planned development, we're aiming for a hybrid structure that marries chain-agnostic, digital governance capabilities with traditional, physically tangible, and regulatory compliant assets secured by provably post quantum secure encryption that does not exist in today's blockchains. We're not pretending to know exactly how laws, regulations, and quantum computing will impact the industry as time progresses. However we're being as proactive as possible on all fronts. Considering we've been publicly warning the blockchain community about potential compliance issues and quantum hacks since late 2021, we like our chances at remaining ahead of the curve. 
              </p>
              <Separator/>
            </div>
            </div>
            </div>
    )
}