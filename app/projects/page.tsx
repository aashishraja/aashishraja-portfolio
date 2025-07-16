import React from 'react'
import Navbar from '../components/Navbar'

import ProjectsHero from '../components/ProjectsHero'


const ProjectPage = () => {
  return (
        <div className="h-[100vh] bg-secondary flex">
      <div className="flex flex-1 flex-col">
        <Navbar/>
        <ProjectsHero/>

      </div>
    </div>
  )
}

export default ProjectPage