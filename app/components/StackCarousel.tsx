"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
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
      
      <Carousel className="w-full relative" opts={{
    align: "center",
    loop: true


  }}plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}>
        <CarouselContent>
          {techStack.map((tech, index) => {
            // Conditionally assign font size classes based on length
            const fontSizeClass =
              tech.length > 12 ? "text-2xl" : tech.length > 8 ? "text-3xl" : "text-4xl";

            return (
              <CarouselItem
                key={index}
                className=" w-full flex items-center justify-center shrink-0 grow-0 basis-full"
              >
                <div
                  className={`text-secondary font-secondary p-4 rounded-md w-full text-center ${fontSizeClass}`}
                >
                  {tech}
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        {/* Buttons snug to left/right of green card */}
        <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-transparent border-0 hover:bg-secondary" />
        <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-transparent border-0 hover:bg-secondary" />
      </Carousel>
    </div>
  )
}

export default StackCarousel
