"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { api } from "@/trpc/react";
import Link from "next/link";

export function TaskButton({ id }: { id: number }) {
  console.log(id);

  const { data: task } = api.task.getSingleTask.useQuery({
    id: 1,
  });
  console.log(task);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">View Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{task?.name}</DialogTitle>
          <DialogDescription>{task?.description}</DialogDescription>
        </DialogHeader>
        <h4 className="text-bold">How to complete task</h4>
        <p>{task?.howTo}</p>
        <DialogFooter>
          <Link
            href={`/dashboard/tasks/${id}`}
            className={buttonVariants({ className: "w-full" })}
          >
            Start Task
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
