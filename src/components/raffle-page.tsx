'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Clock, Gift, Ticket, Users } from "lucide-react"
import Image from "next/image"

export function RafflePageComponent() {
  const raffles = [
    {
      id: 1,
      title: "iPhone 14 Pro Giveaway",
      description: "Win the latest iPhone 14 Pro. Enter now for a chance to upgrade your mobile experience!",
      entryCost: 500,
      totalEntries: 10000,
      currentEntries: 7500,
      endDate: "2023-07-15",
      image: "/placeholder.svg?height=200&width=200",
      category: "Electronics",
    },
    {
      id: 2,
      title: "$1000 Cash Prize",
      description: "Enter for a chance to win $1000 in cash. Use it for anything you want!",
      entryCost: 250,
      totalEntries: 20000,
      currentEntries: 15000,
      endDate: "2023-07-10",
      image: "/placeholder.svg?height=200&width=200",
      category: "Cash",
    },
    {
      id: 3,
      title: "PlayStation 5 Bundle",
      description: "Win a PS5 console with two controllers and 3 games of your choice!",
      entryCost: 400,
      totalEntries: 15000,
      currentEntries: 9000,
      endDate: "2023-07-20",
      image: "/placeholder.svg?height=200&width=200",
      category: "Gaming",
    },
    {
      id: 4,
      title: "Luxury Spa Getaway",
      description: "Win a weekend getaway for two at a 5-star spa resort. Relax and rejuvenate!",
      entryCost: 600,
      totalEntries: 5000,
      currentEntries: 2000,
      endDate: "2023-07-25",
      image: "/placeholder.svg?height=200&width=200",
      category: "Travel",
    },
    {
      id: 5,
      title: "High-End Gaming PC",
      description: "Win a custom-built gaming PC with top-of-the-line components. Perfect for serious gamers!",
      entryCost: 750,
      totalEntries: 8000,
      currentEntries: 4500,
      endDate: "2023-07-30",
      image: "/placeholder.svg?height=200&width=200",
      category: "Electronics",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Active Raffles</h1>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <Input className="flex-grow" placeholder="Search raffles..." type="search" />
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="cash">Cash</SelectItem>
            <SelectItem value="gaming">Gaming</SelectItem>
            <SelectItem value="travel">Travel</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ending-soon">Ending Soon</SelectItem>
            <SelectItem value="most-popular">Most Popular</SelectItem>
            <SelectItem value="lowest-cost">Lowest Cost</SelectItem>
            <SelectItem value="highest-value">Highest Value</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Raffles</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="ending-soon">Ending Soon</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {raffles.map((raffle) => (
          <Card key={raffle.id} className="flex flex-col">
            <CardHeader>
              <div className="aspect-square relative mb-4">
                <Image
                  src={raffle.image}
                  alt={raffle.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <CardTitle>{raffle.title}</CardTitle>
              <CardDescription>{raffle.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Ticket className="w-4 h-4 mr-1 text-green-500" />
                  <span>{raffle.entryCost} Gains per entry</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-blue-500" />
                  <span>Ends {raffle.endDate}</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-500">Entries</span>
                  <span className="text-sm font-medium">{raffle.currentEntries} / {raffle.totalEntries}</span>
                </div>
                <Progress value={(raffle.currentEntries / raffle.totalEntries) * 100} />
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1 text-purple-500" />
                <span>{raffle.currentEntries} participants</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Enter Raffle</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}