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
    <div className="mt-4 px-2 py-8 space-y-6">
      <div>
        <h1 className="text-lg font-medium text-center">Account Details</h1>
        <p className="text-sm text-center text-muted-foreground">
          AirDrops are sent to your Airdrop Wallet Address. To add or update this address, connect your wallet, copy and paste your Connected Wallet Address, and use the update button to save your changes. 
        </p>
      </div>
      <Separator />
      <AccountForm user={user}/>
    </div>
  )
}
