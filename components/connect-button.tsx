import { useWeb3Modal } from '@web3modal/wagmi/react'
import { buttonVariants } from "@/components/ui/button"

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <>
      <button onClick={() => open()}>Connect</button>
      <button onClick={() => open({ view: 'Networks' })}>Networks</button>
    </>
  )
}