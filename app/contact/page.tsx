import React from "react";
import ContactForm from "@/components/forms/contact-form";
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default async function ContactPage() {
        const { data: userSession } = await readUserSession();

        if (userSession.session) {
         return (
                <div className="flex items-center mt-8 px-2 py-6 h-screen">
                        <ContactForm />
                </div>
        );

 
        }
  return redirect("/auth");      
}
