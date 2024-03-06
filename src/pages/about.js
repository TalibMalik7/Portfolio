import Animatedtext from '@/components/Animatedtext'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profilepic from '../../public/images/profile/prf1.png'

const About = () => {
  return (
    <>
    <Head>
      <title>
         MTM | About
      </title>
      <meta name='description' content='portfolia-about-section' />
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
      <Animatedtext text='Passion Fulfills Purpose!' className='mb-16' />
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start '>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2> 
            {/* /75 opacity set krra hai */}
            <p className='font-medium'>Hi, I'm Mohammed Talib Malik, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. I am always looking for 
                new and innovative ways to bring my clients' visions to life.</p>
            <p className='my-4 font-medium'>I believe that design is about more than just making things look pretty – it's about solving problems and 
                creating intuitive, enjoyable experiences for users. </p>
            <p className='font-medium'>Whether I'm working on a website or 
                  other digital product, I bring my commitment to design excellence and user-centered thinking to 
                  every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
            





          </div>
          <div className='col-span-3 relative h-max rounded-2xl border-0 border-solid border-dark'>
            <Image src={profilepic} alt='MTM' className='w-full h-auto rounded-2xl'/>
          </div>
        </div>
      </Layout>
      
    </main>

    </>
  )
}

export default About