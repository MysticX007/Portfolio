/* eslint-disable no-unused-vars */
import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"

function Contact() {
  return (
    <div className='text-slate-300 overflow-hidden '>
    <motion.h3
    initial={{y:100,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.5}}
     className='text-3xl mt-28 text-center pointer-events-none'>Get In Touch</motion.h3>
    <motion.p 
     initial={{x:100,opacity:0}}
     whileInView={{x:0,opacity:1}}
     transition={{duration:0.5}}
     className='flex justify-center items-center text-1xl mt-10 pointer-events-none'>{CONTACT.address}</motion.p>
    <motion.p
     initial={{x:-100,opacity:0}}
     whileInView={{x:0,opacity:1}}
     transition={{duration:0.5}}
      className='flex justify-center items-center text-1xl mt-3 pointer-events-none'>{CONTACT.phoneNo}</motion.p>
    <motion.a
     initial={{x:100,opacity:0}}
     whileInView={{x:0,opacity:1}}
     transition={{duration:0.5}}
      href='#' className='flex justify-center items-center text-1xl mt-3 mb-8 underline hover:text-blue-400 pointer-events-none'>{CONTACT.email}</motion.a>
    </div>
  )
}

export default Contact