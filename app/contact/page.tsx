import React from "react";
import { cookies } from 'next/headers'
import { Contact } from "@/components/forms/contact";
import { createClient } from "@/utils/supa-server-actions";
import { redirect } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { type User } from '@supabase/supabase-js'

export default async function ContactPage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)  


  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth')
  }


         return (
                <div className="flex items-center mt-8 px-2 py-6 h-screen">
                        <Contact/>
                </div>
        );

 
     
  }
