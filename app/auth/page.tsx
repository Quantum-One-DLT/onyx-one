import React from "react";
import AuthForm from "./components/AuthForm";
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import { Icons } from '@/components/icons'
import { cn } from "@/lib/utils"

export default async function page() {
	const { data: userSession } = await readUserSession();

	if (userSession.session) {
		return redirect("/dashboard");
	}
	return (
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
            <AuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="#"
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
	);
}