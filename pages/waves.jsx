// import React from 'react'
// import Project2 from '../public/assets/projects/project2.png'
// import Image from 'next/image'
// import Link from 'next/link'

// import {RiRadioButtonFill} from 'react-icons/ri'

// const waves = () => {
//   return (
//     <div className='w-full'>
//         <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
//             <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
//             <Image className='absolute z-1 ' layout='fill' objectFit='cover' src={Project2} alt='/' />
            
//             <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
//                 <h2 className='py-2'>Waves Music App</h2>
//                 <h3>React Js</h3>
//             </div>
//        </div>

//        <div className='max-w-[1240px] mx-auto p-2 md:grid-cols-5 gap-8 pt-8'>
//         <div className='cols-span-4'>
//             <p>Project</p>
//             <h2>Overview</h2>
//             <p>The app was build using React JS and is hosted on vercel. Users will be
//                 able to listen to music, this is a library where users can choose different 
//                 music to play from.
                
               
//             </p>
//             <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
//             <button className='px-8 py-2 mt-4 '>Code</button>


//         </div>
        
//         <div className='col-span-4  md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
//             <div className='p-2'>
//                 <p className='text-center font-bold pb-2'> Techonologies</p>
//                 <div>
//                     <p className='text-gray-600 py-2 items-center'> <RiRadioButtonFill className='pr-1'/> React</p>
//                     <p className='text-gray-600 py-2 items-center'> <RiRadioButtonFill className='pr-1'/></p>
//                 </div>

//             </div>

//         </div>

//        </div>


//     </div>
//   )
// }

// export default waves


import Image from 'next/image';
import React from 'react';
import Project2 from '../public/assets/projects/project2.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Project2}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Waves Music</h2>
          <h3>React JS /CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>

          <p>The app was build using React JS and is hosted on vercel. Users will be
                able to listen to music, this is a library where users can choose different 
                music to play from</p>
        
          <a
            href='https://github.com/Raviikumar001/musicplayer'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://musicplayer-nu.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
             
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;