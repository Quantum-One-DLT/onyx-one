"use client"
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { buttonVariants } from "@/components/ui/button"
import { Avatar } from '@/components/ui/avatar'

export default function Daccount () {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div className="container items-centered">
<div className="flex flex-col items-centered">
<Avatar />
      <div>{ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button           className={buttonVariants({ variant: "outline" })} onClick={() => disconnect()}>Disconnect</button>
   </div>
    </div>
    </div>
  )
}