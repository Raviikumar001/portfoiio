import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'

import Projects from '../components/Projects'
import Skills from '../components/skills'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Ravi kumar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Main />
     <About />
     <Skills />
     <Projects/>
     <Contact/>
      
    </div>
  )
}
