'use client'
import React from 'react'
import Image from 'next/image';

import StackCarousel from './StackCarousel';
import Navbar from './Navbar';

const HomeHero = () => {
  return (
    <div className=' h-screen flex lg:flex-row flex-col p-1 lg:overflow-hidden sm:overflow-auto'>
        <div className=' flex-1 h-[100%] p-1'>
            <div className='bg-primary rounded-2xl h-full relative w-full aspect-[3/4]'>
                <Image
                src="/aashish.png"
                alt="My photo"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"/>
            </div>
        </div>
        <div className=' flex-1 flex flex-col p-1 gap-2'>
            <div className='lg:flex-1  flex flex-row gap-2 h-48'>
                <div className='bg-primary text-secondary rounded-2xl flex-[2] flex items-center justify-center text-center text-4xl font-secondary'>Hi! my Name is Aashish Raja</div>
                <div className='bg-primary rounded-2xl flex-1'></div>
            </div>
            <div className='lg:flex-1  flex flex-row gap-2 h-48'>
                <div className='bg-primary text-secondary rounded-2xl flex-1 flex items-center justify-center text-center p-3 font-secondary'>Seeking challenging opportunities to further develop technical skills and 
contribute to cutting-edge projects. </div>
                <div className='bg-primary text-secondary rounded-2xl flex-[2] flex items-center justify-center text-center p-3 font-secondary'>
                    Results oriented aspiring Data Analyst with a passion for leveraging AI and ML to drive innovation, with a 
proven ability to deliver under pressure.
                </div>
            </div>
            <div className='flex-1 flex flex-row gap-2 sm:h-48'>
                  <div className='bg-primary text-secondary rounded-2xl flex-1 flex flex-col items-center justify-center relative'>
                    <div className="text-left text-3xl mb-2 font-main">Tech Stack</div>
                    <div><StackCarousel /></div>
                  </div> 

                <a href='/AashishRajaCV.pdf' download>
                    <div className="bg-primary text-secondary h-full rounded-2xl flex items-center justify-center align-middle text-4xl p-5 text-center text-wrap flex-1 font-secondary"> Download my CV</div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default HomeHero
