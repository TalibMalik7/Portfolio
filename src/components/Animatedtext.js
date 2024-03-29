
import React from 'react'
import {motion} from "framer-motion"

const quote={
  initial:{
    opacity:0,
  },
  animate:{
     opacity:1,
     transition:{
         delay:0.5,
         staggerChildren:0.5,
},
  }
}
const singleWord ={
  initial: {
    opacity:0,
    y:50
  },
  animate:{
       opacity:1,
       y:0,
       transition:{
        duration:1
       }
  }
}

const Animatedtext = ({text,className=''}) => {
  return (
    <div className='w-full h-auto py-2 flex items-center justify-center text-center overflow-hidden '>
      <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
      variants={quote} initial="initial" animate="animate"
      >
        {
        text.split(" ").map((word,index)=>{
          return <motion.span className='inline-block' key={word+'-'+index}
          variants={singleWord} 
          >
            {word}&nbsp;
          </motion.span>
        }
        )}
       </motion.h1>
      
      </div>
  )
}

export default Animatedtext