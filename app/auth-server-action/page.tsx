import React from "react";
import { AuthFormLegacy } from '@/app/auth-server-action/components/AuthFormLegacy'
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";

export default async function page() {
        const { data: userSession } = await readUserSession();

        if (userSession.session) {
                return redirect("/account");
        }
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-96">
				<AuthFormLegacy />
			</div>
		</div>
	);
}
