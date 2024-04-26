import { Separator } from "@/components/ui/separator"
import AccountForm from "./supa-account-form"
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supa-server-actions'
import { redirect } from 'next/navigation'

export default async function SettingsAccountPage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)  


  const { 
data: { user },} = await supabase.auth.getUser()
 
  return (
    <div className="mt-4 px-4 py-8 space-y-8">
    <div className="mx-auto px-2 flex w-full flex-col justify-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Account Profile</h1>
        <p className="text-sm text-justified-center text-muted-foreground">
          AirDrops are sent to your Airdrop Wallet Address. To add or update this address, connect your wallet, copy and paste your Connected Wallet Address, and use the update button to save your changes.</p>

        <Link
          href="/defione"
          target="_blank"
          rel="noreferrer"
          className="text-1xl font-bold tracking-tighter sm:text-3xl"
        >
         Learn about DeFi ONE 
        </Link>
     
      </div>
      <Separator />
      <AccountForm user={user}/>
    </div>
  )
}
