import React from 'react'
import './Hero.css'
import  { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Hero = () => {
  useEffect(()=> {
    Aos.init({ duration: 2000})
  }, [])

  return (
    <div className='hero container' id='hero'>
        <div className="hero-text" >
            <h1  data-aos="zoom-in">Welcome To Bentuk</h1>
            <p  data-aos="zoom-in">At our company, we pride ourselves on delivering the highest quality services tailored to meet your every need.</p>
          <a className='WhatsApp btn' href="" target=''>Whatsapp</a>
        </div>
      
    </div>
  )
}

export default Hero
