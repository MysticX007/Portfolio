/* eslint-disable no-unused-vars */
import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from "framer-motion"
function Projects() {
  return (
    <div className=''>
        <motion.h2
        initial={{y:-100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5}} 
        className='text-slate-100 text-center mt-10 mb-16 text-6xl pointer-events-none '>Projects</motion.h2>
        {PROJECTS.map((project,index)=>
            <motion.div
            initial={{y:-100,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.5}}  key={index} className='mb-8 flex justfiy-center'>
                <div className=''>
                <img src={project.image} width={300} height={200} className='ml-56 rounded-3xl border-slate-200 border-4 cursor-pointer transition duration-200 ease-linear hover:scale-125'></img>
                </div>
                <div className=''>
                <h3 className='ml-48 mt-5 text-slate-400 text-2xl pointer-events-none'>{project.title}</h3>
                <p className='ml-48 mt-5 max-w-3xl text-slate-300 pointer-events-none'>{project.description}</p>
                <p className='text-slate-300 ml-48 mt-8'>{project.technologies.map((a)=>{
                  return(
                    <button key={index} className='mr-3 text-xs bg-purple-950 rounded-md p-1 pr-2 pl-2 pointer-events-none'>{a}</button>
                  )
                })}</p>
                </div>
            </motion.div>)}
            </div>
        
  )}

export default Projects