"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { sendEmail } from "@/utils/send-email"
import { toast } from "@/components/ui/use-toast"
import { AuthTokenResponse } from "@supabase/supabase-js"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface ContactProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Contact({ className, ...props }: ContactProps) {
  const ContactSchema = z.object({
    name: z.string().min(1, { message: "Name can not be empty" }),
    email: z.string().email(),
    message: z.string().min(1, { message: "Message can not be empty" }),
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof ContactSchema>>({
                resolver: zodResolver(ContactSchema),
                defaultValues: {
                        name: "",
                        email: "",
                        message: "",
                },
        });
  async function onSubmit(data: z.infer<typeof ContactSchema>) {

    setIsLoading(true)
    startTransition(async () => {
                            const { error } = JSON.parse(
                                   await sendEmail(data)
                            );

                            if (error) {
                                  toast({
                                           title: "Send failed!",
                                           description: (
                                                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                                                        <code className="text-white">{error.message}</code>
                                                </pre>
                                        ),
                                });
                        } else {
                                toast({
                                        title: "Message successfully sent 🎉",
                                });
                        }
                });
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)


  }


  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="Name"
              placeholder="Satoshi Nakamoto"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
 <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
 <div className="grid gap-1">
            <Label className="sr-only" htmlFor="message">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Message"
              type="text"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          <Button
                                className="w-full flex items-center gap-2"
                                variant="outline"
                        >
                                Send Message{" "}
                                <AiOutlineLoading3Quarters
                                        className={cn(" animate-spin", { hidden: !isPending })}
                                />
        </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
</div>
</div>

  )
}