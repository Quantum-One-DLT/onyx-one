import { logout } from "@/app/auth/actions";
import SignOut from "@/app/dashboard/components/SignOut";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function page() {

    return (
          
            <SignOut/>
    )
        
}