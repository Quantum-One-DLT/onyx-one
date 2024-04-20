import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { AuthFormLegacy } from '@/app/auth-server-action/components/AuthFormLegacy'
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import AuthForm from "@/app/auth/components/AuthForm"

export const metadata: Metadata = {
  title: 'Onboarding', 
}

export default function OnboardingPage() {
  return (
    <>
      <div className="hidden">
        <Image
          src="https://quantumone.b-cdn.net/onyx/IMG_4777.jpeg"
          width={1280}
          height={843}
          alt="Onboarding"
          className="block dark:hidden"
        />
        <Image
          src="https://quantumone.b-cdn.net/onyx/IMG_5036.jpeg"
          width={1280}
          height={843}
          alt="Onboarding-two"
          className="hidden"
        />
      </div>
      <div className="container relative h-[640px] grid grid-cols-1 flex-col items-center justify-center mx-auto md:grid-cols-2 lg:max-w-none lg:px-0">
        <Link
          href="/auth"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-inherit p-10 text-white md:flex dark:border-r">
                    <div className="absolute inset-0 bg-inherit">
          <Image
          src="https://quantumone.b-cdn.net/onyx/og-image.jpg"
          width={2048}
          height={1946}
          alt="Onboarding-two"
          style={{objectFit: "contain"}}
          
        />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            
          </div>
          <div className="relative z-20 mt-auto">
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center items-center">
      <Link href="/" className="flex items-center space-x-2 mb-8">
        <Icons.quantum className="h-8 w-8" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
              <h1 className="text-2xl font-semibold tracking-tight">
                Join our presale list!
              </h1>
              <p className="text-sm text-muted-foreground">
                Limited to the 1st 3K users.
              </p>
            </div>
            <AuthFormLegacy />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}