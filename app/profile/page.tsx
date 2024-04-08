import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ProfileForm } from '@/components/forms/profile-form'
import { createClient } from '@/utils/supa-server-actions'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"


export default async function ProfilePage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  let { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return  
    <p>Hello{data.user.email}</p>
}