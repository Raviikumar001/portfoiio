import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about' className='w-full m:h-screen p-2 items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2  text-gray-600'>I am currently in my 4th year in pursuing my professional degree.I had a always
                    a knack for technology and working with computers. In 2021 I started to take web developoment
                    seriously and thought to pursue it as a carrer. I started working with HTML & CSS and make minor edits in the
                    sites i built. This small edits turned into a love for programming.
                    
                     </p>
                     <p className='py-2  text-gray-600'>
                        Facinated with how programming can influnce and solve problems intrigued me more.
                        I started to learn javascript and started to make websites more interactive. Learning React has been a new experiance
                        for me. Facinated by how this technology can help make digital interactions more robust made me want to be a Front-End developer. 
                     </p>
                     <p className='py-2  text-gray-600 underline cursor-pointer'>Check out my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image 
            className='rounded-xl'
            src="/../public/assets/about.jpg"
            alt='/' 
            width='540' 
            height='550'
           /> 
            </div>
        </div>
    </div>
  )
}

export default About