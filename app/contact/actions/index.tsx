"use server";

import { createSupbaseServerClient } from "@/utils/supaone";
import { redirect } from "next/navigation";

export async function updateInqueries() {
      const supabase = await.createSupbaseServerClient();

     const { data: inqueries, error } = await supabase
  .from('inqueries')
  .insert([
    { name: 'data.name', email: 'data.email', message: 'data.message'},
  ])
  .select()


    const result = await supabase.updateInqueries(data);
        return JSON.stringify(result);
}