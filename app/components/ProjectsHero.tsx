'use client'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import ProjectCard from './ProjectCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. COMING SOON",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. COMING SOON",
  },
  {
    title: "Portfolio Site",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. COMING SOON",
  }
];

const ProjectsHero = () => {
  return (
    <Carousel className="w-full max-w-screen h-screen overflow-hidden flex items-center justify-center p-10" opts={{
      align: "center",
    }} plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]}>
      <CarouselContent className='-ml-0'>
        {projects.map((project, index) => {
          // Assign font size based on title length
          const fontSizeClass =
            project.title.length > 10 ? "text-2xl"
              : project.title.length > 6 ? "text-3xl"
              : "text-1xl";

          return (
            <CarouselItem key={index} className='pl-0 basis-1/3'>
              <div className='p-3'>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  fontSizeClass={fontSizeClass}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default ProjectsHero
