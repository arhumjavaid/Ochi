// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className='w-full min-h-screen bg-zinc-800 text-white'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App