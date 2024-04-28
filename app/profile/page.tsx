import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ProfileForm } from '@/components/forms/profile-form'
import { createClient } from '@/utils/supa-server-actions'
import { Avatar } from '@/components/ui/avatar'

export default async function ProfilePage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return <p className="mt-10 px-4 py-8 text-center font-bold">Hello {data.user.email}! Your complete profile is coming soon!</p>
<Avatar/>
}