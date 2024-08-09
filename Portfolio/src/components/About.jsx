/* eslint-disable no-unused-vars */
import React from 'react'
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion"
function About() {
  return (
    <>
    <div className='pointer-events-none overflow-clip flex justify-center items-center '>
        <motion.div
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0}} 
        className='text-slate-200 text-7xl'>About </motion.div> 
        <motion.span 
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0}} 
        className='text-slate-500 text-7xl ml-3 pointer-events-none'> Me</motion.span>
        
        <motion.div 
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0}} 
        className='ml-24 max-w-2xl text-slate-100 pt-10 tracking-tighter pointer-events-none'>{ABOUT_TEXT}</motion.div>
        </div>
        </>
  )
}

export default About