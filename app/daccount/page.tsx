"use client"
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export default function Daccount () {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div className="container items-centered">
<div className="flex flex-col items-centered">
      <div>{ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
   </div>
    </div>
  )
}