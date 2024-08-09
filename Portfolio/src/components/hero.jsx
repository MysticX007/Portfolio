/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import { HERO_CONTENT } from '../constants'
import profile from '../assets/profile.jpg'


function Hero() {
  return (
    <div className='h-screen pl-20 pt-20 text-slate-200 overflow-hidden border-b-4 border-slate-500 '>
    <motion.div
    initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.5,delay:0}}
    className='pointer-events-none text-8xl font-thin mb-5'>Arnab Das</motion.div>
    <motion.span
    initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.5,delay:0.3}} 
    className=' pointer-events-none text-2xl bg-gradient-to-r from-purple-500 via-slate-200 to-pink-300 bg-clip-text tracking-tight text-transparent '>FULL-STACK DEVELOPER</motion.span>
    <motion.div
    initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.5,delay:0.6}}className='pointer-events-none mt-10 max-w-2xl tracking-tighter'>{HERO_CONTENT}</motion.div>
    <motion.div
     initial={{x:-100,opacity:0}}
     animate={{x:0,opacity:1}}
     transition={{duration:0.5,delay:0.9}}
      className='flex justify-end mb-0 '>
    <motion.img src={profile} width={400} height={400}
     className='mr-40 mb-0 -translate-y-80 rounded-3xl border-white border-4' alt='arnab'/>
    </motion.div>
    </div>)
}

export default Hero