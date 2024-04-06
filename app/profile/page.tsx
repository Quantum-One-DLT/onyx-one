import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ProfileForm } from '@/components/forms/profile-form'
import { createClient } from '@/utils/supa-server-actions'

export default async function PrivatePage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return 
     
       <div className="flex text-center items-center">
       <p>Hello {data.user.email}</p>
      </div>
     <ProfileForm/>

}