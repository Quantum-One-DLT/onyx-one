import React from "react";
import ContactForm from "@/components/forms/contact-form";
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";

export default async function ContactPage() {
        const { data: userSession } = await readUserSession();

        if (userSession.session) {
         return (
                <div className="flex items-center mt-24 px-4 py-8 h-screen">
                        <ContactForm />
                </div>
        );

 
        }
  return redirect("/auth");      
}
