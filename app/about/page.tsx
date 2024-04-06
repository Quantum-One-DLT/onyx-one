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

<div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://quantumone.b-cdn.net/onyx/share.png">
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company</span>
            </h2>
            <p class="text-gray-700">
                We are Quantum One...
            </p>
        </div>
    </div>
</div>
</>
)
}
