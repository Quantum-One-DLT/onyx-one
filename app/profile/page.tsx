import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import useSupabaseBrowser from '@/utils/supabase-browser'

export default async function PrivatePage() {
  const cookieStore = cookies()
  const supabase = useSupabaseBrowser()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return <p>Hello {data.user.email}</p>
}