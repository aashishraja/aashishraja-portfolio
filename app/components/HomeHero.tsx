'use client'
import React from 'react'
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const HomeHero = () => {
  return (
    <div className='bg-green-400 h-screen flex lg:flex-row flex-col p-2 lg:overflow-hidden sm:overflow-auto'>
        <div className='bg-amber-300 flex-1 h-[100%] p-2'>
            <div className='bg-pink-400 rounded-2xl h-full relative w-full aspect-[3/4]'>
                <Image
                src="/aashish.png"
                alt="My photo"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"/>
            </div>
        </div>
        <div className='bg-amber-900 flex-1 flex flex-col p-2 gap-2'>
            <div className='lg:flex-1 bg-blue-500 flex flex-row gap-2 h-48'>
                <div className='bg-green-400 rounded-2xl flex-[2] flex items-center justify-center text-center'>Hi! my Name is Aashish Raja</div>
                <div className='bg-green-800 rounded-2xl flex-1'></div>
            </div>
            <div className='lg:flex-1 bg-blue-900 flex flex-row gap-2 h-48'>
                <div className='bg-green-400 rounded-2xl flex-1'></div>
                <div className='bg-green-800 rounded-2xl flex-[2] flex items-center justify-center text-center p-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
            <div className='flex-1 bg-blue-950 flex flex-row gap-2 sm:h-48'>
                <div className='bg-green-400 rounded-2xl flex-1 flex items-center justify-center'>
  <Carousel className='w-full h-full bg-pink-800 flex items-center justify-center relative rounded-2xl overflow-hidden' plugins={[
        Autoplay({
          delay: 5000,
          jump:false,
          stopOnMouseEnter:true,
          stopOnInteraction:false
        }),
      ]}>

    <CarouselContent className='h-full'>
      <CarouselItem className='h-full flex items-center justify-center'>
        <div className="w-full h-full flex items-center justify-center text-white text- bg-yellow-200  ">
          Slide 1
        </div>
      </CarouselItem>
      <CarouselItem className='h-full flex items-center justify-center'>
        <div className="w-full h-full flex items-center justify-center text-white text- bg-yellow-200 ">
          Slide 2
        </div>
      </CarouselItem>
      <CarouselItem className='h-full flex items-center justify-center'>
        <div className="w-full h-full flex items-center justify-center text-white text- bg-yellow-200 ">
          Slide 3
        </div>
      </CarouselItem>
      <CarouselItem className='h-full flex items-center justify-center'>
        <div className="w-full h-full flex items-center justify-center text-white text- bg-yellow-200 ">
          Slide 3
        </div>
      </CarouselItem>
      <CarouselItem className='h-full flex items-center justify-center'>
        <div className="w-full h-full flex items-center justify-center text-white text- bg-yellow-200 ">
          Slide 3
        </div>
      </CarouselItem>
      <CarouselItem className='h-full flex items-center justify-center'>
        <div className="w-full h-full flex items-center justify-center text-white text- bg-yellow-200 ">
          Slide 3
        </div>
      </CarouselItem>
    </CarouselContent>
<CarouselPrevious className='absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-amber-400 rounded-full w-10 h-10 flex items-center justify-center' />
<CarouselNext className='absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-amber-400 rounded-full w-10 h-10 flex items-center justify-center' />

  </Carousel>
</div>

                <a href='/AashishRajaCV.pdf' download>
                    <div className="bg-green-800 h-full rounded-2xl flex items-center justify-center align-middle text-5xl p-3 text-center text-wrap flex-1"> Download my CV</div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default HomeHero
