import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  
  return (
    <>
     <Navbar></Navbar>
     <div className='flex m-8 p-3'>
     <Sidebar></Sidebar>
     <HeroSection></HeroSection>
     

     </div>
     




     <Footer></Footer>
     
    </>
  )
}

export default App
