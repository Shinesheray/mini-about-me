import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import Image from "next/image";
import shineshery from '../public/Shinesheray.jpg';
import code from '../public/code.png';
import {useState} from "react"; // this will be where we add the Darkmode functionality

export default function Home() {
  const [darkMode, setDarkMode] = useState(false); // setting the state for dark mode theme
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Shinesheray Myeza</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/**Main section */}
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='h-screen'>
          {/**Navigation Section */}
          <nav className='py-10 mb-12 flex justify-between'>

            <h1 className='text-xl font-burtons dark:text-white'>
              Created by Shinesheray in Next.js
            </h1>

            <ul className='flex items-center'>
             <li className='dark:text-white'>Dark Mode
              <BsFillMoonStarsFill  onClick={() => setDarkMode(!darkMode)} className='cursor-pointer  text-2xl dark:text-white'/>
             </li> {/* This is the Dark mode icon */}
             <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://www.linkedin.com/in/shinesheray-myeza-7b5273120/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </nav>

          {/* Page section */}
          <div className='text-center p-10'>
             <h2 className='text-5xl py-2 text-teal-600 font medium md:text-6xl'>Shinesheray Myeza</h2>
             <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Junior Fullstack Software Engineer</h3>
             <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white'>Hi My Name is <span className='text-teal-500'>Shinesheray Myeza</span> and this is a page to get to know a little bit about me!
              I am a fun exciting person who is always eager to learn and develop my skills. I really enjoy spending time with my <span className='text-teal-500'>Family </span>
              and solo consol gaming nights with <span className='text-teal-500'>pizza</span> too. My favourite color is <span className='text-orange-500'>Orange</span> becuse it brings out the joy in life for me. 
             </p>
             
          </div>
           
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
          <AiFillLinkedin/>
          </div> {/**added Linkedin Icon for spice */}

            <div className="relative">
              <Image className="rounded-full  mx-auto border w-80 h-80 mt-19 overflow-hidden" src={shineshery} objectfit="cover" alt="Shinesheray"/>
            </div>
        </section>

        {/**Section2 */}

        <section>
          <div>
          <div className='text-center py-10 shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900'>
          <Image src={code} width={100} hieght={100} className="mt-20" alt="hashtag"/>
          <h3 className='text-2xl py-2 dark:text-white'>Why do I want to be a developer at SovTech?</h3>

             <p className='text-md py-1 leading-8 text-gray-800 md:text-xl dark:text-white'>
              I want to be a developer at <span className='text-teal-500'>SovTech</span> because of its a Tech first innovative company. I really would like to be a part of something thats <span className='text-teal-500'>bigger</span> than myself
              where I am able to further develop and grow in a space that is always changing. I especially like how supporting new ideas is part of the <span className='text-teal-500'>SovTech</span> culture.
               I often have random ideas on how to improve my work, and would love to work for a business that is so supportive of anyone with an idea, irrespective of their experience. 
             </p>
          </div>
          </div> 
        </section>
      </main>
    </div>
  )
}
