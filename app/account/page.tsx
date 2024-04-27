import { Separator } from "@/components/ui/separator"
import AccountForm from "./supa-account-form"
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supa-server-actions'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function SettingsAccountPage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)  


  const { 
data: { user },} = await supabase.auth.getUser()
  if (!data?.user) {
    redirect('/auth')
  }
 
  return (
    <div className="mt-4 px-4 py-8 space-y-8">
    <div className="mx-auto px-2 flex w-full flex-col justify-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Account Profile</h1>
        <p className="text-sm text-justified-center text-muted-foreground">
          AirDrops are sent to your 'Airdrop Wallet Address' shown in your account profile below. To add or update this address, you may simply enter and save your address to our database without connecting your wallet. For those who prefer to connect their wallet, use the 'Connect Wallet' button found at the top of the page, copy and paste your address into the 'AirDrop Wallet Address' field, and use the Update Account button to save your profile.</p>

        <Link
          href="/defione"
          target="_blank"
          rel="noreferrer"
          className="text-1xl font-bold tracking-tighter sm:text-3xl"
        >
         Learn about DeFi ONE!
        </Link>
     
      </div>
      <Separator />
      <AccountForm user={user}/>
    </div>
  )
}
