import { Metadata } from 'next'
import Image from 'next/image'
import Link from "next/link"
import { siteConfig } from "@/config/site"

import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/app/auth/components/user-auth-form"


export const metadata: Metadata = {
  title: "About Us",
  description: "About Quantum One.",
}

export default function AboutPage() {
return (
    
<>

<div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <Image src="https://quantumone.b-cdn.net/onyx/share.png"
height={1024}
width={1024}
alt="Roton logo"
className="block"

/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="border-b-2 border-gray-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="font-muted">Our Company</span>
            </h2>
            <p className="text-align-justify">
                We are Quantum One...
            </p>
        </div>
    </div>
</div>
</>
)
}
