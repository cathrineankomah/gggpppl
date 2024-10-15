import Dashboard from "@/components/dashboard/dashboard";
import React from "react";
import { api } from "@/trpc/server";

export const runtime = 'edge';
export default async function DashboardPage() {

  const userStats = await api.user.getUserStats()
  const activities = await api.user.getActivities()
  
  return (
    <div>
      <Dashboard userStats={userStats} activities={activities} />
    </div>
  );
}
