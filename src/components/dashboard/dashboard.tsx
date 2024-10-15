"use client";
import {  buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  BarChart,
  Clock,
  DollarSign,
  Gamepad2,
  Gift,
  Target,
  User,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

interface UserStats {
  tasksDone: number;
  gamesHours: number;
  gainsEarned: number;
  currentBalance: number;
}
interface Activity {
  type: string;
  action: string;
}
interface DashboardProps {
  activities: Activity[];
  userStats: UserStats;
}
  
export default function Dashboard(
  { activities, userStats }: DashboardProps
) {

  const stats = [
    { title: "Tasks Done", value: userStats.tasksDone, icon: Target },
    { title: "Games Hours", value: userStats.gamesHours, icon: Clock },
    { title: "Gains Earned", value: userStats.gainsEarned, icon: BarChart },
    { title: "Current Balance", value: `$${userStats.currentBalance.toFixed(2)}`, icon: DollarSign },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'task':
        return Target;
      case 'game':
        return Gamepad2;
      case 'raffle':
        return Gift;
      case 'investment':
        return DollarSign;
      case 'user':
        return User;
      case 'transaction':
        return CreditCard;
      default:
        return BarChart;
    }
  };

  return (
    <>
      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">
        <div className="mx-auto w-full">
          <h2 className="mb-8 text-3xl font-bold">Dashboard</h2>

          {/* Stats Grid */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {activities.map((activity, index) => {
                  const Icon = getActivityIcon(activity.type);
                  return (
                    <li key={index} className="flex items-center">
                      <Icon className="mr-3 h-5 w-5 text-primary" />
                      <span>{activity.action}</span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Link href="/dashboard/tasks" className={buttonVariants()}>
                <Target className="mr-2 h-4 w-4" />
                Find Tasks
              </Link>
              <Link href="/dashboard/games" className={buttonVariants()}>
                <Gamepad2 className="mr-2 h-4 w-4" />
                Play Games
              </Link>
              <Link href="/dashboard/raffle" className={buttonVariants()}>
                <Gift className="mr-2 h-4 w-4" />
                Enter Raffle
              </Link>
              <Link href="/dashboard/investments" className={buttonVariants()}>
                <DollarSign className="mr-2 h-4 w-4" />
                Invest Gains
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
