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
    <div className="w-full py-6 space-y-6">
      <div className="container space-y-2 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are a team of passionate individuals dedicated to bringing innovation to the world. Our mission is to
              make the impossible possible, one breakthrough at a time.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-6">
          <ol className="list-decimal list-inside space-y-2">
            
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
        </div>
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  )
}

