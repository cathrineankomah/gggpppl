'use client'
import React from 'react'
 
import { useParams } from 'next/navigation'
import {api} from '@/trpc/react'
export default function TaskPage() {
    const params = useParams<{id:string}>()

    const {data:task} = api.task.startTask.useQuery({
        id:Number(params.id)
    })

    console.log(task)
  return (
    <div>
      Some Task
    </div>
  )
}
