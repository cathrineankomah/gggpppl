import TaskPage from "@/components/dashboard/tasks-page";
import React from "react";
import { api } from "@/trpc/server";

export default async function TasksPage() {
  const allTasks = await api.task.getTasks()

  console.log(allTasks)
  return (
    <div>
      <TaskPage />
    </div>
  );
}
