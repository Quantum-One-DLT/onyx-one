import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import ConnectButton from "@/components/connect-button";
import { useState } from "react";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export interface AccountType {
  address?: string;
  balance?: string;
  chainId?: string;
  networkType?: string;
}
const web3AccountSchema = z.object({
  address: z
    .string()
    .min(2, {
      message: "Address is too short",
    })
    .max(30, {
      message: "Address is not valid",
    }),
  balance: z.string({
    required_error: "Account balance.",
  }),
  chain: z.string({
    required_error: "Shouldn't populate",
  }),
})

type Web3AccountValues = z.infer<typeof web3AccountSchema>

// This can come from your database or API.
const defaultValues: Partial<Web3AccountValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}




export default async function IndexPage() {
  const { data: userSession } = await readUserSession();
  const form = useForm<Web3AccountValues>({
    resolver: zodResolver(web3AccountSchema),
    defaultValues,
  })
 

	if (userSession.session) {
		return redirect("/dashboard");
	}
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Onyx <br className="hidden sm:inline" />
          embedded systems.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
         Micro FinTech. 
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.login}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Login
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.signup}
          className={buttonVariants({ variant: "outline" })}
        >
          Sign Up
        </Link>
      </div>
    </section>
  )
}
