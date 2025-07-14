import React from 'react'
import {ArrowUp10} from "lucide-react";

const ContactsHero = () => {
  return (
    <div className='bg-green-400 h-screen items-center justify-center flex lg:flex-row flex-col p-2 lg:overflow-hidden sm:overflow-auto'>
       <div className="flex flex-col items-center p-6 h-[200px] w-[350px] bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="flex space-x-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <ArrowUp10  className="w-8 h-8 text-gray-800 hover:text-black transition-colors duration-200" />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <ArrowUp10  className="w-8 h-8 text-pink-500 hover:text-pink-600 transition-colors duration-200" />
        </a>
        <a href="https://spotify.com/user/yourusername" target="_blank" rel="noopener noreferrer">
          <ArrowUp10  className="w-8 h-8 text-green-500 hover:text-green-600 transition-colors duration-200" />
        </a>
      </div>
    </div>


    </div>
  )
}

export default ContactsHero