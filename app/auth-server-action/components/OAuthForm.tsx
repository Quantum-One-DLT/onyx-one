import { Button } from "@/components/ui/button";
import React from "react";

export default function OAuthForm() {
	return 
      <div>
        <form action="/auth/oauth/google" method="post">
<Button className="w-full items-centered gap-2" variant="outline">Login With Google</Button>
</form>
</div>
;
}
