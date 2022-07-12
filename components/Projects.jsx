import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Project1 from '../public/assets/projects/Project1.png'
import Project2 from '../public/assets/projects/project2.png'
import Project3 from '../public/assets/projects/project3.png'
import ProjectItems from './ProjectItems'

const Projects = () => {
  return (
    <div id='projects'className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl  tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've built</h2>

        </div>
        <div className='grid md:grid-cols-2 gap-8'>

    
           <ProjectItems title='Github Battle' image={Project1} projectUrl='/gitbhubBattle' />

           <ProjectItems title='Waves Music' image={Project2} projectUrl='/waves' />

           <ProjectItems title='Blog' image={Project3} projectUrl='/blog' />



        </div>

    </div>
  )
}

export default Projects