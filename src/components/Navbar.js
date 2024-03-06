import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {GithubIcon, LinkedInIcon, Twitter, TwitterX} from './Icons'
import {motion} from 'framer-motion'



const CustomLink = ({href,title,className=''})=> {
  const router  = useRouter();
  return <Link href={href} className={`${className} relative group`}>
   {title}
   <span className= {`h-[1px] inline-block bg-dark 
   absolute left-0 -bottom-0.5 
   group-hover:w-full transition-[width] ease duration-300 
   ${router.asPath === href? 'w-full' : 'w-0'}   
   `}

   >&nbsp;</span>
  </Link>
   // aspath shows current url
}
const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        
        <nav>
            <CustomLink href='/' title={'Home'} className='mr-4 ' />
            <CustomLink href='/about' title={'About'} className='mx-4'/>
            <CustomLink href='/projects' title={'Projects'} className='ml-4'/>
           
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
        </div>
        
        <nav className='flex items-center justify-center flex-wrap'>   
            <motion.a href='/' target='_blank'
            whileHover={{y:-2}}
            whileTap={{scale:0.8}}
            className='w-6 mr-3'
            >
              <GithubIcon className=''/>
              </motion.a>
            <motion.a href='/' target='_blank'
             whileHover={{y:-2}}
             whileTap={{scale:0.8}}
             className='w-6 mx-3'
            >
              <LinkedInIcon className=''/>
              </motion.a>
            <motion.a href='/' target='_blank'
             whileHover={{y:-2}}
             whileTap={{scale:0.8}}
             className='w-6 ml-3'>
              <Twitter className=''/>
              </motion.a>   
                 
        </nav>
    </header>
  )
}

export default Navbar