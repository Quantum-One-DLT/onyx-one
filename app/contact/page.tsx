import React from "react";
import ContactForm from "@/components/forms/contact-form";
import useSupabaseBrowser from '@/utils/supabase-browser'
import { redirect } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { type User } from '@supabase/supabase-js'

export default async function ContactPage() {
     const supabase = useSupabaseBrowser()

  const {
    data: { user: User},
  } = await supabase.auth.getUser()   

  if (!User) {
    return redirect("/auth");  
  }


         return (
                <div className="flex items-center mt-8 px-2 py-6 h-screen">
                        <ContactForm user={user}/>
                </div>
        );

 
     
  }
