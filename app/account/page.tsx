import { Separator } from "@/components/ui/separator"
import AccountForm from "./supa-account-form"
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supa-server-actions'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account',
}

export default async function SettingsAccountPage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)  


  const { 
data: { user },} = await supabase.auth.getUser()
  if (!user) {
    redirect('/auth')
  }
 
  return (
    <div className="mt-6 max-w-[980px] px-2 lg:p-8 mx-auto">
    <div className="mx-auto px-2 flex flex-col justify-center space-y-6">
<div className="flex flex-col space-y-2 items-justified-center">
        <h1 className="text-lg font-bold tracking-tighter sm:text-xl">Account</h1>
        <Separator />
        <p className="text-base text-justify ">
          AirDrops are sent to your 'Airdrop Wallet Address'. To update, you may enter and save your address to our database without connecting your wallet. Or you may use the 'Connect Wallet' button found at the top of and copy and paste your address into the 'AirDrop Wallet Address' field. Be sure to add your X (Twitter) username to be eligible for X associated airdrop campaigns. Note that all airdrop recipients will be required to authenticate their legal identity to claim our upgraded DAO governance token. </p>

       </div>
      <Separator />
      <AccountForm user={user}/>
    </div>
   </div>
  )
}
