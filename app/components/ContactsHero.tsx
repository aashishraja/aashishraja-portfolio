import React from 'react'
import { Github,Linkedin, Mail } from "lucide-react";

const ContactsHero = () => {
  return (
    <div className='h-screen items-center justify-center flex lg:flex-row flex-col p-2 lg:overflow-hidden sm:overflow-auto'>
      <div className="flex flex-col items-center p-6 h-[400px] w-[350px] bg-primary rounded-2xl shadow-md justify-center">
        <h2 className="text-2xl text-secondary font-main mb-4">Contact Me</h2>
        <h3 className="text-xl text-secondary font-secondary mb-8 ">Feel free to get in touch</h3>
        <div className="flex space-x-10">
          <a href="https://github.com/aashishraja" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 text-secondary hover:text-secondary transition-colors duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/aashish-raja-a51b54222" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 text-secondary hover:text-secondary transition-colors duration-200" />
          </a>
          <a href="mailto:aashishraja@example.com">
            <Mail className="w-8 h-8 text-secondary hover:text-secondary transition-colors duration-200" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactsHero
