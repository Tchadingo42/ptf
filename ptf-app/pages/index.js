import Head from 'next/head'
import { BsMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle,AiFillYoutube,AiFillLinkedin} from 'react-icons/ai';
import { FaTiktok} from 'react-icons/fa'
import Image from "next/image";
import dev from "../public/dev-ed-wave.png"
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Christopher Teko Belan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='bg-white px-10 md:px-10 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>

          {/*Navbar part */}
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-gray-200'>developedbyed</h1>
            <ul className='flex item-center'>
              <li>
                <BsMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-4 py-2 rounded-md ml-8'
                  href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          {/* Presentation part */}
          <div className='text-center p-10 '>
            <h2 className='text-4xl py-2 text-emerald-600 font-medium md:text-6xl'>
              Christopher Teko</h2>
            <h3 className='text-xl py-2 md:text-3xl dark:text-gray-400'>Web develeper and Growth Hacker</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200'>Freelancer providing services for web programming web marketing and growth aquisition.</p>
            <p className='dark:text-gray-200 pb-5'>Join me down below to step up your business to the next level</p>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillYoutube />
            <AiFillLinkedin />
            <FaTiktok />
          </div>

          {/*Image*/}
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image alt="chris the super Dev" src={dev}  layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

          {/*Services description */}
        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1 dark:text-gray-400'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Since the beginning of my journee as a freelance web expert, I have done remote work for
              <span className='text-emerald-600'> Agencies and clients </span>consulted for
              <span className='text-emerald-600'> B2B and B2C businesses </span> and collaborated with
              talented people to build a digital portfolio of different skills.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200' >
              I have offer a wide range of services from web develepement mainly with Javascript technologies
              to lead aquisition and growth marketing optimisation.
            </p>
          </div>

          {/*Card Frontend */}
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-lg my-10 dark:bg-white' >
              < Image alt='ptf image 1' src={design} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2' >Beautiful Designs</h3>
                <p className='py-2' >Creating elegant designs suited for your needs</p>
                <h4 className='text-emerald-600 py-4' >Frontend tools I use</h4>
                <p className='text-gray-800 py-1'>React JS</p>
                <p className='text-gray-800 py-1'>Vue JS</p>
                <p className='text-gray-800 py-1'>Tailwind CSS</p>
                <p className='text-gray-800 py-1'>Bootstrap</p>
                <p className='text-gray-800 py-1'>SASS</p>
                <p className='text-gray-800 py-1'>Figma</p>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Elementor</p>
          </div>

          {/* Card Backend */}
          
            <div className='text-center shadow-lg p-10 rounded-lg my-10 dark:bg-white' >
              < Image alt='ptf image 1' src={code} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2' >Solid architectures</h3>
                <p className='py-2' >Web programming and data manipulation</p>
                <h4 className='text-emerald-600 py-4' >Backend tools and Frameworks I use</h4>
                <p className='text-gray-800 py-1'>Node JS</p>
                <p className='text-gray-800 py-1'>Ruby on rails</p>
                <p className='text-gray-800 py-1'>MySQL</p>
                <p className='text-gray-800 py-1'>Docker</p>
                <p className='text-gray-800 py-1'>Git</p>
                <p className='text-gray-800 py-1'>Apache</p>
                <p className='text-gray-800 py-1'>Worpress</p>
          </div> 

           {/* Card Webmarketing */}
          
            <div className='text-center shadow-lg p-10 rounded-lg my-10 dark:bg-white' >
              < Image alt='ptf image 1' src={consulting} width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2' >Webmarketing</h3>
                <p className='py-2' >Growth Hacking, Lead aquisition, SEO, Email Marketing</p>
                <h4 className='text-emerald-600 py-4' >Webmarketing tools and CRM I use</h4>
                <p className='text-gray-800 py-1'>Google tag Manager</p>
                <p className='text-gray-800 py-1'>Zapier</p>
                <p className='text-gray-800 py-1'>PhantomBuster</p>
                <p className='text-gray-800 py-1'>Import.io</p>
                <p className='text-gray-800 py-1'>Linkedin sales manager</p>
                <p className='text-gray-800 py-1'>SurveySparrow</p>
                <p className='text-gray-800 py-1'>Hubspot </p>
            </div>
          </div> 
        </section>

         {/* End ptf text*/}
         <section>
          <div>
            <h3 className='text-3xl py-1 text-center dark:text-gray-400' >Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Since the beginning of my journee as a freelance web expert, I have done remote work for
              <span className='text-emerald-600'> Agencies and clients </span>consulted for
              <span className='text-emerald-600'> B2B and B2C businesses </span> and collaborated with
              talented people to build a digital portfolio of different skills.</p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200' >
              I have offer a wide range of services from web develepement mainly with Javascript technologies
              to lead aquisition and growth marketing optimisation.</p>
          </div>

           {/* End ptf images */}
           <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className='basis-1/3 flex-1'>
              <Image alt='ptf web image 5' src={web5} className='rounded-lg object-cover'
              width={'100%'} height={'100%'} layout="responsive"/>
              </div>
            <div className='basis-1/3 flex-1' >
              <Image alt='ptf web image 6' src={web6} className='rounded-lg object-cover'
              width={'100%'} height={'100%'} layout="responsive"/>
              </div>
            <div className='basis-1/3 flex-1' >
              <Image alt='ptf web image 3' src={web3} className='rounded-lg object-cover'
              width={'100%'} height={'100%'} layout="responsive"/>
              </div>
            <div className='basis-1/3 flex-1' >
              <Image alt='ptf web image 4' src={web4} className='rounded-lg object-cover'
              width={'100%'} height={'100%'} layout="responsive"/>
              </div>
            <div className='basis-1/3 flex-1' >
              <Image alt='ptf web image 1' src={web1} className='rounded-lg object-cover'
              width={'100%'} height={'100%'} layout="responsive"/>
              </div>
            <div className='basis-1/3 flex-1' >
              <Image alt='ptf web image 2' src={web2} className='rounded-lg object-cover'
              width={'100%'} height={'100%'} layout="responsive"/>
              </div>

           </div>
         </section>
      </main>
    </div>
  );
}
