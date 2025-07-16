'use client'
import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface ProjectCardProps {
  title: string;
  description: string;
  fontSizeClass: string;
  repoLink?: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, fontSizeClass, repoLink, demoLink }) => {
  return (
    <Card className="relative group overflow-hidden h-[500px] w-[450px] rounded-2xl bg-lime-400 cursor-pointer">
      <CardContent className="p-0 h-full relative">
        {/* Sliding panel */}
        <div className="absolute -bottom-8 w-full bg-primary h-[25%] transition-all duration-500 px-7 pt-4 text-6xl overflow-hidden group-hover:h-full">
          <div className={`font-bold text-secondary font-main pb-2 ${fontSizeClass}`}>
            {title}
          </div>
          <div className="flex flex-col font-secondary text-xl text-transparent gap-4 group-hover:text-secondary transition-colors duration-500">
            {description}
            <div className='flex flex-col gap-4'>
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className='btn shadow-none text-secondary font-secondary bg-primary border-1 border-secondary hover:bg-secondary hover:text-primary w-[100px] text-center'
              >
                Repo
              </a>
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className='btn shadow-none text-secondary font-secondary bg-primary border-1 border-secondary hover:bg-secondary hover:text-primary w-[100px] text-center'
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
