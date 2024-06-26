
"use client" 

import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/utils/send-email'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils"
import { useState } from 'react'
import { Icons } from '@/components/icons'
import { updateInqueries } from "@/app/contact/actions"

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
const { register, handleSubmit } = useForm<FormData>();

const [isLoading, setIsLoading] = useState<boolean>(false)
  function onSubmit(data: FormData) {
    updateInqueries(data);
  }
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="text-gray-500 dark:text-gray-400">
          We are in the process of rolling out this website. This form is not yet enabled for submissions. Send us an email by clicking or tapping our email address listed below. Thanks for your patience! 
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
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Enter your name" {...register('name', { required: true })} />

              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" {...register('email', { required: true })} />
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" 
{...register('message', { required: true })}
/>
                              <Button variant="outline" type="submit" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.quantum className="mr-2 h-4 w-4" />
        )}{" "}
        Send Message
      </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

