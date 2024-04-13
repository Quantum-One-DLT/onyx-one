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
import { useState, useTransition } from "react";
import { updateInqueries } from '@/app/contact/actions'
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar } from "../ui/avatar";
import Link from "next/link";

const ContactSchema = z.object({
        name: z.string().min(1, { message: "Name can not be empty" }),
        email: z.string().email(),
        message: z.string().min(1, { message: "Message can not be empty" }),
});
type ContactValues = z.infer<typeof ContactSchema>
export function Contact() {
        const [isPending, startTransition] = useTransition();
        const [isLoading, setIsLoading] = useState<boolean>(false)

        const form = useForm<z.infer<typeof ContactSchema>>({
                resolver: zodResolver(ContactSchema),
                defaultValues: {
                        name: "",
                        email: "",
                        message: "",
                },
        });

        function onSubmit(data: ContactValues) {
         
     updateInqueries(data)

     }

       

        return (<div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="text-gray-500 dark:text-gray-400">
            We are in the process of rolling out this website and enabling this form. Send us an email by clicking or tapping our email address listed below. Thanks for your patience! 
          </p>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold">Contact Details</h3>
            </CardHeader>
            <CardContent>
   <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-4 h-4" />
                  <span>Quantum One DAO LLC</span>
                </div>
              
                <div className="flex items-center space-x-2">
                  <Avatar className="w-4 h-4" />
                  <span>30 N Gould St STE R WY, USA 82801</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-4 h-4" />
                  <span>+1(307)200-8918</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-4 h-4" />
                  <Link href="mailto:support@quantumone.io">support@quantumone.io</Link>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold">Leave a Message</h3>
            </CardHeader>
            <CardContent>

                        <Form {...form}>
                                <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="w-full px-2 space-y-6"
                                >
<FormField
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
    <Button variant="outline" type="submit" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.quantum className="mr-2 h-4 w-4" />
        )}{" "}
        Send Message
      </Button>
                                </form>
                        </Form>
                        </CardContent>
                        </Card>
                        </div>
                        </div>
        );
        }
