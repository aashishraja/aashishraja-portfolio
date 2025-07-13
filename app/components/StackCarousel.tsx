"use client"
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function StackCarousel() {
  const techStack = [
    "C/C++",
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "scikit-learn",
    "Pandas",
    "C#",
    "HTML/CSS",
    "Mendix",
    "MATLAB/Simulink"
  ]

  return (
    <div className="w-[300px] h-full flex-col flex items-center justify-center">
      
      <Carousel className="w-full relative">
        <CarouselContent>
          {techStack.map((tech, index) => {
            // Conditionally assign font size classes based on length
            const fontSizeClass =
              tech.length > 12 ? "text-2xl" : tech.length > 8 ? "text-3xl" : "text-4xl";

            return (
              <CarouselItem
                key={index}
                className=" bg-amber-600 w-full flex items-center justify-center shrink-0 grow-0 basis-full"
              >
                <div
                  className={`text-white font-semibold bg-green-600 p-4 rounded-md w-full text-center ${fontSizeClass}`}
                >
                  {tech}
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        {/* Buttons snug to left/right of green card */}
        <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  )
}

export default StackCarousel
