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
    title: "Detecting Fraud Transactions",
    description: "Exploratory Data Analysis of a Credit Card Transaction dataset, identifying key features of fraudulent transactions and creating a fraud detection algorithm using Python and scikit-learn. COMING SOON",
    repoLink: "",
    demoLink: "",
  },
  {
    title: "Spotify Song Recommendation System",
    description: "Built an ETL pipeline using Spotify's API to create a data warehouse for music analytics. Leveraged clustering algorithms to analyze listening trends. Technologies used include Python, pandas, and scikit-learn. COMING SOON",
    repoLink: "",
    demoLink: "",
  },
  {
    title: "Personal Portfolio Website",
    description: "Developed a responsive portfolio website to showcase personal projects and technical skills focusing on a seamless user experience. Built using Next.js and Tailwind CSS.",
    repoLink: "https://github.com/aashishraja/aashishraja-portfolio",
    demoLink: "https://youtube.com",
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
            project.title.length > 10 ? "text-xl"
              : project.title.length > 6 ? "text-2xl"
              : "text-3xl";

          return (
            <CarouselItem key={index} className='pl-0 basis-1/3'>
              <div className='p-3'>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  fontSizeClass={fontSizeClass}
                  repoLink={project.repoLink}
                  demoLink={project.demoLink}
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
