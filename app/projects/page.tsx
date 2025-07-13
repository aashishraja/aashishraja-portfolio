import React from 'react'
import Navbar from '../components/Navbar'
import Test from '../components/Test'
import ProjectsHero from '../components/ProjectsHero'


const ProjectPage = () => {
  return (
        <div className="h-[100vh] bg-red-500 flex">
      <div className="flex flex-1 flex-col">
        <Navbar/>
        <ProjectsHero/>
        <Test/>
      </div>
    </div>
  )
}

export default ProjectPage