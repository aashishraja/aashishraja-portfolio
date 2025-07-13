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
    title: "AI Chatbot",
    description: "Built a smart customer support bot using NLP.",
  },
  {
    title: "E-commerce Website",
    description: "Full-stack online shop with checkout system.",
  },
  {
    title: "Portfolio Site",
    description: "Responsive portfolio with animations.",
  }

];


const ProjectsHero = () => {
  return (

<Carousel className="w-full max-w-screen h-screen overflow-hidden flex items-center justify-center bg-amber-600 p-10"   opts={{
    align: "start",


  }}plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent className='-ml-0'>
  {projects.map((project, index) => (
    <CarouselItem key={index} className='pl-0 basis-1/3'>
      <div className='p-3'>
        <ProjectCard
          title={project.title}
          description={project.description}
        />
      </div>
    </CarouselItem>
  ))}
</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  )
}

export default ProjectsHero