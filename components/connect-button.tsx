import { useWeb3Modal } from '@web3modal/wagmi/react'
import { buttonVariants } from "@/components/ui/button"

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <>
      <button           className={buttonVariants({ variant: "outline" })} onClick={() => open()}>Connect</button>
      <button           className={buttonVariants({ variant: "outline" })}  onClick={() => open({ view: 'Networks' })}>Networks</button>
    </>
  )
}