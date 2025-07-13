'use client'
import React from 'react'

import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <Card className="relative group overflow-hidden h-[500px] w-[450px] rounded-2xl bg-lime-400 cursor-pointer">
      <CardContent className="p-0 h-full relative">
        {/* Sliding panel */}
        <div className="absolute -bottom-8 w-full bg-white h-[25%] transition-all duration-500 p-7 text-6xl overflow-hidden group-hover:h-full">
          <div className="text-3xl font-bold text-amber-500 pb-5">{title}</div>
          <div className=" flex flex-col bg-amber-500  text-2xl text-transparent gap-4 group-hover:text-red-600 transition-colors duration-500">
            {description}
            <div className='bg-blue-500 flex flex-col gap-4'>
            <div className='btn bg-amber-600 w-[100px]'>Repo</div>
            <div className='btn bg-red-700 w-[100px]'>Demo</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
