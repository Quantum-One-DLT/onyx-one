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

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return  
    <Card className="w-full max-w-3xl">
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:flex-row">
     <p>Hello{data.user.email}</p>
          <div className="w-24 h-24 rounded-full overflow-hidden sm:mr-4">
            <img
              alt="Avatar image"
              className="rounded-full"
              height={100}
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width={100}
            />
          </div>
          <div className="grid gap-1.5 text-sm">
            <div className="font-medium">Avatar</div>
            <div className="text-gray-500 dark:text-gray-400">Your avatar is associated with your account.</div>
          </div>
        </div>
        <div className="grid items-start gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value="Jared Palmer" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={data.user.email}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ethAddress">Ethereum Address</Label>
            <Input id="ethAddress" readOnly value="0x5FC8d32690cc91D4c39d9d3abcBD16989F875707" />
          </div>
        </div>
      </CardContent>
    </Card>
}