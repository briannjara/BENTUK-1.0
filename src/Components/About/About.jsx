import React from 'react'
import './About.css'
import about from '../../assets/moms logo.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about} alt=""  className='about-img'/>
        </div>
        <div className="about-right">
            <h3>ABOUT</h3>
            <h2>Ensuring the Best Services to Our Customers</h2>
            <p>BENTUK supply is a private owned company which is legally registered, We have majored mainly in General supplies we are focused at delivering quality services to our customer to their level best.</p>
            <p>Choose us as your trusted partner because we blend industry expertise with innovative solutions tailored to meet your unique needs. </p>
        </div>
      
    </div>
  )
}

export default About
