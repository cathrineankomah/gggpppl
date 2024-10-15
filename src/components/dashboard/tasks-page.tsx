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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/trpc/server";
import { Clock, DollarSign, Star, Target } from "lucide-react";
import { TaskButton } from "./tasks/task-button";

export interface TaskProps {
  id: number;
  name: string;
  description: string;
  howTo: string;
  gains: number;
  duration: number;
  category: string;
  level: number;
  limit: number;
  completed: number;
}

export default async function TaskPage() {
  const tasks = await api.task.getTasks();

  // const userTasks = await api.user.getUserTasks()

  // const firstTask = await api.task.getSingleTask(1)

  // let tasks = []

  // if (userTasks === null) {
  //    tasks = allTasks
  // }else {
  //    tasks = [firstTask]
  // }

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold">Available Tasks</h1>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <Input
          className="flex-grow"
          placeholder="Search tasks..."
          type="search"
        />
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="surveys">Surveys</SelectItem>
            <SelectItem value="transcription">Transcription</SelectItem>
            <SelectItem value="data-labeling">Data Labeling</SelectItem>
            <SelectItem value="writing">Writing</SelectItem>
            <SelectItem value="user-testing">User Testing</SelectItem>
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
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>{task.name}</CardTitle>
              <CardDescription>{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="mr-1 h-4 w-4 text-green-500" />
                  <span>{task.gains} Gains</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-blue-500" />
                  <span>{task.duration}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Target className="mr-1 h-4 w-4 text-purple-500" />
                  <span>{task.category}</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 text-yellow-500" />
                  <span>{task.level}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <TaskButton id={task.id} />
            </CardFooter>
          </Card>
        ))}
      </div>
      <p>Complete first task to get access to other tasks</p>
    </div>
  );
}
