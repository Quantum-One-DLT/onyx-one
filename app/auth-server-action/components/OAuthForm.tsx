import { Button } from "@/components/ui/button";
import React from "react";
import { signInWithGithub } from "@/app/auth/actions";

export default function OAuthForm() {
	return <Button className="w-full">Login With Github</Button>;
}
