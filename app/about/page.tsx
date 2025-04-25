"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Star, Zap, Shield } from "lucide-react"
import { Contact } from '@/components/forms/contact'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          About Our Company
        </motion.h1>
        <p className="text-xl text-muted-foreground">
          We&#39;re on a mission to build a next generation blockchain network designed to act as gateway between classic and quantum blockchain realms where classic chains can leverage the power of quantum advantage and new proof of quantum work chains emerge becoming the foundation of post quantum based blockchain networks. We also advocate for public blockchain organizations and foundations to form a data center collective where DAO's own data centers to ensure sustainability, true sovereignty, and greater profitability. 
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-4">Contact Us</CardTitle>
            <CardDescription>Have questions? Get in touch with our team.</CardDescription>
          </CardHeader>
          <CardContent>
          <Contact/>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}

const teamMembers = [
  {
    name: "Robert Mourey Jr",
    role: "Founder",
    bio: "Visionary leader with 20+ years of professional experience who in November 2021 predicted the rapid advancement of quantum computing and rise of quantum based blockchain networks.",
    avatar: "https://quantumone.b-cdn.net/rmourey-profile-pic.png",
  },
  {
    name: "Cody Clark",
    role: "Co-Founder",
    bio: "Fintech guru passionate about creating cutting-edge solutions with experience unveiling tens of millions of dollars in operational efficiency.",
    avatar: "https://quantumone.b-cdn.net/onyx/CodyClark-prof.png",
  },
  {
    name: "Akira Saito",
    role: "Protocol Engineer",
    bio: "Software engineer with 15+ years of professional experience building enterprise solutions who's passionate about the mass adoption of blockchain technology.",
    avatar: "https://quantumone.b-cdn.net/onyx/asaito-profile.png",
  },
]

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of conventional wisdom to create groundbreaking solutions.",
    icon: <Star className="w-12 h-12 mx-auto text-primary" />,
  },
  {
    title: "Efficiency",
    description: "We work hard to envision from the optimal perspective to achieve a greater level of efficiency in all that we do.",
    icon: <Zap className="w-12 h-12 mx-auto text-primary" />,
  },
  {
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in all we do.",
    icon: <Shield className="w-12 h-12 mx-auto text-primary" />,
  },
]