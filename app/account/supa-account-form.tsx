'use client'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { buttonVariants } from "@/components/ui/button" 
import { cn } from '@/lib/utils'   
import { useCallback, useEffect, useState } from 'react'
import useSupabaseBrowser from '@/utils/supabase-browser'
import { type User } from '@supabase/supabase-js'
import Avatar from './avatar'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = useSupabaseBrowser()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [waddress, setWaddress] = useState<string | null>(null)
  const [xhandle, setXhandle] = useState<string | null>(null)
  const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url, email, waddress, xhandle`)
        .eq('id', user?.id as string)
        .single()

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
        setEmail(data.email)
        setWaddress(data.waddress)
        setXhandle(data.xhandle)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    username,
    website,
    avatar_url,
    email,
    waddress,
    xhandle,
  }: {
    username: string | null
    fullname: string | null
    website: string | null
    avatar_url: string | null
    email: string | null
    waddress: string | null
    xhandle: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        email,
        waddress: address, 
        xhandle,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Account updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }
const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div className="                                   w-full px-2 py-8 space-y-8">
<Avatar
      
      uid={user?.id ?? null}
      url={avatar_url}
      size={144}
      onUpload={(url) => {
        setAvatarUrl(url)
        updateProfile({ fullname, username, website, email, waddress, xhandle, avatar_url: url })
      }}
    />
 <div className="flex flex-col">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
        <input className={cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50")} id="email" type="text" value={user?.email} disabled />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="fullName">Full Name</label>
        <input
           className={cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50")}
          id="fullName"
          type="text"
          value={fullname || ''}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="username">Username</label>
        <input className={cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50")}
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="xhandle">X Username</label>
        <input className={cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50")}
          id="xhandle"
          type="text"
          value={xhandle || ''}
          onChange={(e) => setXhandle(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="website">Website</label>
        <input className={cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50")}
          id="website"
          type="url"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

<div className="flex flex-col items-centered">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="waddress">AirDrop Wallet Address</label>
<input 
className={cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50")}
id="waddress" type="text" value={waddress || ''} onChange={(e) => setWaddress(e.target.value)}/>
</div>
<div className="flex flex-col">
<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="connectedAddress">Connected Wallet Address</label>
       <div className="flex">{ensAvatar && <img className="rounded-full border-none shadow-sm" alt="ENS Avatar" src={ensAvatar} />}
      {address && <div className={cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 overflow-x-auto hover:overflow-x-scroll")}>{ensName ? `${ensName} (${address})` : address}</div>}
 </div>
</div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Notifications</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox defaultChecked id="newsletter" />
                  <Label className="ml-2" htmlFor="newsletter">
                    Subscribe to newsletter
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox defaultChecked id="alerts" />
                  <Label className="ml-2" htmlFor="alerts">
                    Receive alerts
                  </Label>
                </div>
                <div className="flex items-center" />
              </div>
              </div>

<div className="w-full grid grid-cols-2 gap-x-4 justify-evenly">    
<button           className={buttonVariants({ variant: "outline" })} onClick={() => disconnect()}>Disconnect Wallet</button>
   
    
    

      
        <button
          className={buttonVariants({ variant: "outline" })}
          onClick={() => updateProfile({ fullname, username, website, email, waddress, xhandle, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update Account'}
        </button>
        </div>

           
      
      <div className="flex flex-col w-full mb-2">
        <form className="flex space-y-8 items-center" action="/auth/signout" method="post">
          <div className="flex items-center">
          <button className={buttonVariants({ variant: "outline", size: "default" })} type="submit">
            Sign out
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}
