import { Separator } from "@/components/ui/separator"
import { AccountForm } from "./account-form"

export default function SettingsAccountPage() {
  return (
    <div className="mt-10 px-4 py-8 space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}
