/* eslint-disable no-unused-vars */
import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {easeIn, easeInOut, motion} from "framer-motion"

function Technologies() {
  return (
    <div className='overflow-hidden border-b-4 border-slate-600'>
    <motion.h2 
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}} 
    transition={{duration:0.4}}
    className='text-slate-200 text-4xl mt-20  text-center pointer-events-none'>Technologies</motion.h2>
    <div className='flex justify-center text-7xl mt-10 mb-10'>
    <motion.div
    initial={{y:-10}}
    animate={{y:[10,-10]}}
    transition={{
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
      delay:0,
      duration:1,
    }} 
    className='border-4 ml-3 rounded-2xl border-slate-600'>
    <RiReactjsLine className='text-center  text-cyan-400'/>
    </motion.div>
    <motion.div
      initial={{y:-10}}
      animate={{y:[10,-10]}}
      transition={{
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
        delay:0.2,
        duration:1
      }} 
       className='border-4 ml-3 rounded-2xl border-slate-600'>
    <TbBrandNextjs className='text-center text-slate-100'/>
    </motion.div>
    <motion.div
      initial={{y:-10}}
      animate={{y:[10,-10]}}
      transition={{
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
        delay:0.4,
        duration:1,
      }} 
       className='border-4 ml-3 rounded-2xl border-slate-600'>
    <FaNodeJs className='text-center text-green-400'/>
    </motion.div>
    <motion.div
      initial={{y:-10}}
      animate={{y:[10,-10]}}
      transition={{
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
        delay:0.6,
        duration:1,
      }} 
      className='border-4 ml-3 rounded-2xl border-slate-600'>
    <RiTailwindCssFill className='text-center  text-cyan-600'/>
    </motion.div>
    <motion.div
      initial={{y:-10}}
      animate={{y:[10,-10]}}
      transition={{
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
        delay:0.8,
        duration:1,
      }} 
       className='border-4 ml-3 rounded-2xl border-slate-600'>
    <SiMongodb className='text-center  text-green-600'/>
    </motion.div>
    <motion.div
      initial={{y:-10}}
      animate={{y:[10,-10]}}
      transition={{
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
        delay:1,
        duration:1,
      }}  className='border-4 ml-3 rounded-2xl border-slate-600'>
    <IoLogoJavascript className='text-center  text-yellow-500'/>
    </motion.div>
    </div>
    </div>
  )
}

export default Technologies