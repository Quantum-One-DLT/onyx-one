import { logout } from "@/app/auth/actions";
import SignOut from "@/app/dashboard/components/SignOut";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function page() {

    return (
          <div className="container px-4 py-8 items-centered">
          <div className="mt-6">
            <h1 className="font-medium text-center"> Click to Sign Out </h1>
            <SignOut/>
</div>
</div>
    )
        
}