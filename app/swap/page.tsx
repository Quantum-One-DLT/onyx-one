import React from "react";
import { SendTransaction } from '@/components/forms/send-transaction'
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";

export default async function SwapPage() {
        
        return (
                <div className="flex items-center justify-center h-screen">
                        <SendTransaction />
                </div>
        );
}