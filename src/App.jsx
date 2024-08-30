/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App() {
  return (
  <>
  <div className=" fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
  <Navbar/>
  <Hero/>
  <About/>
  <Technologies/>
  <Projects/>
  <Contact/>
  </>
  )
}

export default App