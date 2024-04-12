"use server";

import { createSupbaseServerClient } from "@/utils/supaone";
import { redirect } from "next/navigation";

type formData = {
    name: string;
    email: string;
    message: string;
}
    

export async function updateInqueries(data:formData) {
      const supabase = await createSupbaseServerClient();

     const { data: inqueries, error } = await supabase
  .from('inqueries')
  .insert([
    { name: 'data.name', email: 'data.email', message: 'data.message'},
  ])
  .select()
}