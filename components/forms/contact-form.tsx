
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Feel free to leave any enquiries below, or give us a call to speak with our helpful sales team.
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
                <span>30 N Gould St STE R WY, USA 82801</span>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar className="w-4 h-4" />
                <span>(307) 200-8918</span>
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
              <Input id="name" placeholder="Enter your name" />
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
              <Button>Send message</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

