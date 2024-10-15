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
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Clock,
  DollarSign,
  Percent,
  TrendingUp,
  Users,
} from "lucide-react";

export default function InvestmentsPage() {
  const investments = [
    {
      id: 1,
      title: "Tech Growth Fund",
      description:
        "Invest in a diversified portfolio of high-growth technology companies.",
      minInvestment: 1000,
      expectedReturn: 12,
      riskLevel: "High",
      duration: "12 months",
      totalPool: 1000000,
      currentPool: 750000,
      investors: 1500,
      category: "Technology",
    },
    {
      id: 2,
      title: "Real Estate Income Trust",
      description:
        "Stable returns from a mix of commercial and residential real estate properties.",
      minInvestment: 500,
      expectedReturn: 8,
      riskLevel: "Medium",
      duration: "24 months",
      totalPool: 5000000,
      currentPool: 3750000,
      investors: 5000,
      category: "Real Estate",
    },
    {
      id: 3,
      title: "Green Energy Initiative",
      description:
        "Support and profit from sustainable energy projects worldwide.",
      minInvestment: 250,
      expectedReturn: 10,
      riskLevel: "Medium-High",
      duration: "18 months",
      totalPool: 2000000,
      currentPool: 1200000,
      investors: 3000,
      category: "Energy",
    },
    {
      id: 4,
      title: "Global Bond Fund",
      description:
        "Low-risk investment in government and corporate bonds from around the world.",
      minInvestment: 100,
      expectedReturn: 5,
      riskLevel: "Low",
      duration: "36 months",
      totalPool: 10000000,
      currentPool: 8500000,
      investors: 20000,
      category: "Bonds",
    },
    {
      id: 5,
      title: "AI and Robotics Venture",
      description:
        "High-potential investments in artificial intelligence and robotics startups.",
      minInvestment: 2000,
      expectedReturn: 15,
      riskLevel: "Very High",
      duration: "60 months",
      totalPool: 500000,
      currentPool: 250000,
      investors: 500,
      category: "Technology",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold">Investment Opportunities</h1>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <Input
          className="flex-grow"
          placeholder="Search investments..."
          type="search"
        />
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="real-estate">Real Estate</SelectItem>
            <SelectItem value="energy">Energy</SelectItem>
            <SelectItem value="bonds">Bonds</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Risk Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Risk Levels</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="very-high">Very High</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Investments</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="new">New Opportunities</TabsTrigger>
          <TabsTrigger value="closing-soon">Closing Soon</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {investments.map((investment) => (
          <Card key={investment.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{investment.title}</CardTitle>
              <CardDescription>{investment.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <DollarSign className="mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">Min. Investment</p>
                    <p>{investment.minInvestment} Gains</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Percent className="mr-2 h-4 w-4 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">Expected Return</p>
                    <p>{investment.expectedReturn}%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4 text-yellow-500" />
                  <div>
                    <p className="text-sm font-medium">Risk Level</p>
                    <p>{investment.riskLevel}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-purple-500" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p>{investment.duration}</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Investment Pool</span>
                  <span className="text-sm font-medium">
                    {investment.currentPool.toLocaleString()} /{" "}
                    {investment.totalPool.toLocaleString()} Gains
                  </span>
                </div>
                <Progress
                  value={(investment.currentPool / investment.totalPool) * 100}
                />
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-indigo-500" />
                <span>{investment.investors} investors</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Invest Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
