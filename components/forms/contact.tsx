"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button";
import {
        Form,
        FormControl,
        FormDescription,
        FormField,
        FormItem,
        FormLabel,
        FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { updateInqueries } from './actions'

const ContactSchema = z.object({
        name: z.string().min(1, { message: "Name can not be empty" }),
        email: z.string().email(),
        message: z.string().min(1, { message: "Message can not be empty" }),
});

export default function Contact() {
        const [isPending, startTransition] = useTransition();

        const form = useForm<z.infer<typeof ContactSchema>>({
                resolver: zodResolver(ContactSchema),
                defaultValues: {
                        name: "",
                        email: "",
                        message: "",
                },
        });

        function onSubmit(data: z.infer<typeof ContactSchema>) {
                startTransition(async () => {
                      await updateInqueries(data)

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
                                        title: "Sent successfully 🎉",
                                });
                        }
                });
        }

        return (

                        <Form {...form}>
                                <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="w-full px-2 space-y-6"
                                >
FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                        <FormItem>
                                                                <FormLabel>Name</FormLabel>
                                                                <FormControl>
                                                                        <Input placeholder="Satoshi Nakamoto" {...field} />
                                                                </FormControl>

                                                                <FormMessage />
                                                        </FormItem>
                                                )}
                                        />
                                             <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                        <FormItem>
                                                                <FormLabel>Email</FormLabel>
                                                                <FormControl>
                                                                        <Input placeholder="email@example.com" {...field} />
                                                                </FormControl>

                                                                <FormMessage />
                                                        </FormItem>
                                                )}
                                        />
                                        <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                        <FormItem>
                                                                <FormLabel>Message</FormLabel>
                                                                <FormControl>
                                                                        <Textarea
                                                                                placeholder="message"
                                                                                {...field}
                                                                                type="text"
                                                                        />
                                                                </FormControl>
                                                                <FormDescription>
                                                                        {
                                                                                "We'll respond in the next 24 hours."
                                                                        }
                                                                </FormDescription>
                                                                <FormMessage />
                                                        </FormItem>
                                                )}
                                        />
    <Button
                                className="w-full flex items-center gap-2"
                                variant="outline"
                        >
                                Send{" "}
                                <AiOutlineLoading3Quarters
                                        className={cn(" animate-spin", { hidden: !isPending })}
                                />
                        </Button>
                                </form>
                        </Form>
        );
}
