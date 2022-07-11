import Image from 'next/image'
import React from 'react'
import contact from '../public/assets/contact.jpg'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


import { HiOutlineChevronDoubleUp } from 'react-icons/hi'


const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-ful'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h3 className='py-4'>Get in touch</h3>
            <div className='grid lg:grid-cols-5 gap-8'>

   {/* left side */}
         <div className='col-span-3 lg:col-span-2  w-full h-full shadow-xl shadow-gray-400  rounded-xl p-4'>
            <div className='lg:p-4 h-full rounded-xl'>

                <div>
                    <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contact} alt="/"  />
                </div>
                <div>
                    <h2 className='py-2'>Ravi kumar</h2>
                    <p>Front-End Developer</p>
                    <p className='py-4'>I am available for internships. Contact me let us talk</p>
                </div>


                <div>
                <p className='uppercase pt-8'>Connect With Me.</p>

        <div className='flex items-center justify-between py-4'>
              
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a
                    href='https://www.linkedin.com/in/ravi-kumaar/'
                    target='_blank'
                    rel='noreferrer'
                    > 

                    <FaLinkedinIn/>
                    </a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <a
                    href='https://github.com/Raviikumar001'
                    target='_blank'
                    rel='noreferrer'
                    > 
                    <FaGithub/>
                    </a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <a href="mailto:kumarraviabhi007@gmail.com?subject=Mail from our Website">
                    <AiOutlineMail/>
                    </a>
                </div>


                </div>
            </div>

            </div>
            

         </div>


         


            </div>
            <div>
                <div className='flex justify-center py-12'>
                   <Link href='/'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/> 
                      </div>
                   </Link>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Contact