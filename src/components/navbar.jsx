/* eslint-disable no-unused-vars */
import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'

function Navbar() {
  return (
  <div className="flex items-center flex-shrink-0 justify-between overflow-hidden">
    <div className='text-3xl my-8 mx-20 text-slate-300 pointer-events-none'>Ar</div>
    <nav className="mx-10 my-8 flex justify-end gap-10 text-2xl text-slate-500">
    <a href='#' className='hover:text-slate-50'><FaLinkedin/></a>
    <a href='https://github.com/MysticX007' className='hover:text-slate-50'><FaGithub/></a>
    <a href='https://x.com/home' className='hover:text-slate-50'><FaSquareXTwitter/></a>
    <a href='https://www.instagram.com/xyz.___.arnab/' className='hover:text-slate-50'><FaInstagram/></a>
    </nav>
    </div>
  )
}

export default Navbar