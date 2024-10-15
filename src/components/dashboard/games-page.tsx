import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Gamepad2, Star, Zap } from "lucide-react";
import Image from "next/image";

export default function GamesPage() {
  const games = [
    {
      id: 1,
      title: "Puzzle Master",
      description: "Solve challenging puzzles and train your brain",
      reward: 10,
      timeEstimate: "5 min per puzzle",
      category: "Puzzle",
      difficulty: "Medium",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      title: "Word Whiz",
      description: "Test your vocabulary and spelling skills",
      reward: 8,
      timeEstimate: "3 min per round",
      category: "Word",
      difficulty: "Easy",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      title: "Math Challenge",
      description: "Sharpen your mental math abilities",
      reward: 12,
      timeEstimate: "2 min per challenge",
      category: "Math",
      difficulty: "Hard",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      title: "Memory Match",
      description: "Improve your memory with this classic game",
      reward: 7,
      timeEstimate: "4 min per game",
      category: "Memory",
      difficulty: "Easy",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      title: "Trivia Quest",
      description: "Test your knowledge across various topics",
      reward: 15,
      timeEstimate: "10 min per quiz",
      category: "Trivia",
      difficulty: "Medium",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold">Games to Play</h1>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <Input
          className="flex-grow"
          placeholder="Search games..."
          type="search"
        />
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="puzzle">Puzzle</SelectItem>
            <SelectItem value="word">Word</SelectItem>
            <SelectItem value="math">Math</SelectItem>
            <SelectItem value="memory">Memory</SelectItem>
            <SelectItem value="trivia">Trivia</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Games</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <Card key={game.id} className="flex flex-col">
            <CardHeader>
              <div className="relative mb-4 aspect-square">
                <Image
                  src={game.image}
                  alt={game.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <CardTitle>{game.title}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="mr-1 h-4 w-4 text-yellow-500" />
                  <span>{game.reward} Gains per play</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-blue-500" />
                  <span>{game.timeEstimate}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Gamepad2 className="mr-1 h-4 w-4 text-purple-500" />
                  <span>{game.category}</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 text-orange-500" />
                  <span>{game.difficulty}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Play Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
