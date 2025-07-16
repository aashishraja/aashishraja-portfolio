'use client'
import React from 'react'
import Image from 'next/image'

import StackCarousel from './StackCarousel'
import Navbar from './Navbar'

const HomeHero = () => {
  return (
    <div className='h-screen flex lg:flex-row flex-col p-1 lg:overflow-hidden sm:overflow-auto'>
      {/* Left Image Section */}
      <div className='flex-1 h-full p-1'>
        <div className='bg-primary rounded-2xl h-full relative w-full aspect-[3/4]'>
          <Image
            src="/aashish.png"
            alt="My photo"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className='flex-1 flex flex-col p-1 gap-2'>
        {/* Intro Row */}
        <div className='lg:flex-1 flex flex-row gap-2 h-48'>
          <div className='bg-primary text-secondary rounded-2xl flex-[2] flex items-center justify-center text-center text-4xl font-secondary'>
            Hi! My Name is Aashish Raja
          </div>
          <div className='bg-primary rounded-2xl flex-1'></div>
        </div>

        {/* Image + About Row */}
        <div className='lg:flex-1 flex flex-row gap-2 h-48'>
          {/* Hand coding image with external link */}
          <a
            href="https://storyset.com/people"
            target="_blank"
            rel="noopener noreferrer"
            className='flex-1 relative bg-primary text-secondary rounded-2xl flex items-center justify-center text-center p-3 font-secondary'
          >
            <Image
              src="/Hand coding-pana.png"
              alt="Hand coding illustration"
              fill
              className="rounded-2xl object-contain"
            />
          </a>

          {/* About text */}
          <div className='bg-primary text-secondary rounded-2xl flex-[2] flex items-center justify-center text-center p-3 font-secondary'>
            Results-oriented aspiring Data Analyst with a passion for leveraging AI and ML to drive innovation, with a
            proven ability to deliver under pressure.
          </div>
        </div>

        {/* Tech Stack + CV Download Row */}
        <div className='flex-1 flex flex-row gap-2 sm:h-48'>
          {/* Tech Stack */}
          <div className='bg-primary text-secondary rounded-2xl flex-1 flex flex-col items-center justify-center relative'>
            <div className="text-left text-3xl mb-2 font-main">Tech Stack</div>
            <div><StackCarousel /></div>
          </div>

          {/* CV download link */}
          <a href='/AashishRajaCV.pdf' download className='flex-1'>
            <div className="bg-primary text-secondary h-full w-full rounded-2xl flex items-center justify-center align-middle text-4xl p-5 text-center text-wrap font-secondary cursor-pointer">
              Download my CV
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
