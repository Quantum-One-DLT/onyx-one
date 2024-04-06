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
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Our<span className="font-muted">Mission</span>
            </h2>
            <p className="text-align-justify">

Join us as we enable a new opportunity paradigm for all of humanity. 
            </p>
        </div>
  <div className="text">
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Our<span className="font-muted">Values</span>
            </h2>
            <p className="text-align-justify">


1. Decentralization: Embrace the decentralized nature of decision-making, allowing all stakeholders to have a voice in governance processes.
2. Transparency: Ensure transparency in operations, finances, and decision-making to build trust among members and the wider community.
3. Autonomy: Empower individuals to take ownership of their contributions and decisions within the organization.
4. Innovation: Foster a culture of innovation and experimentation to drive continuous improvement and adaptation to evolving challenges.
5. Inclusivity: Promote diversity and inclusivity, welcoming individuals from all backgrounds and perspectives to contribute to the success.
6. Accountability: Hold members accountable for their actions and decisions, establishing clear mechanisms for responsibility and consequences.
7. Sustainability: Prioritize sustainable practices in all aspects of operations, including environmental, social, and economic sustainability.
8. Community Engagement: Actively engage with and listen to the community to ensure that the actions align with the needs and values of its members.
9. Fairness: Uphold principles of fairness and equity in resource distribution, decision-making processes, and governance structures.
10. Openness: Maintain an open and collaborative environment where ideas are freely shared, debated, and implemented for the benefit of the entire ecosystem.
    </p>
 </div>
</div>

</div>
</>
)
}
