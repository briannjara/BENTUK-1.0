import React from 'react'
import './About.css'
import about from '../../assets/moms logo.jpg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <motion.img

            initial={{opacity: 0, x: -150}}
            whileInView={{x:0, opacity:1}}
            transition={{
              delay:0.2,
               x:{
               type:"spring", 
               stiffness:60}, 
               opacity:{
               duration:1},
             ease:"easeIn",
             duration:1}}
            
            
            
            
            
            
            src={about} alt=""  className='about-img'/>
        </div>



        <div className="about-right">
            <motion.h3
            initial={{opacity: 0, x: 150}}
            whileInView={{x:0, opacity:1}}
            transition={{
              delay:0.3,
               x:{
               type:"spring", 
               stiffness:60}, 
               opacity:{
               duration:1},
             ease:"easeIn",
             duration:1}}
            
            
            
            
            >ABOUT</motion.h3>
            <motion.h2

            initial={{opacity: 0, x: 200}}
            whileInView={{x:0, opacity:1}}
            transition={{
              delay:0.4,
               x:{
               type:"spring", 
               stiffness:60}, 
               opacity:{
               duration:0.6},
             ease:"easeIn",
             duration:1}}
            
            
            
            >Ensuring the Best Services to Our Customers</motion.h2>
            <motion.p
            initial={{opacity: 0, x: 250}}
            whileInView={{x:0, opacity:1}}
            transition={{
              delay:0.5,
               x:{
               type:"spring", 
               stiffness:60}, 
               opacity:{
               duration:0.6},
             ease:"easeIn",
             duration:1}}


            
            
            
            
            >BENTUK supply is a private owned company which is legally registered, We have majored mainly in General supplies we are focused at delivering quality services to our customer to their level best.</motion.p>
            <motion.p
            initial={{opacity: 0, x: 300}}
            whileInView={{x:0, opacity:1}}
            transition={{
              delay:0.6,
               x:{
               type:"spring", 
               stiffness:60}, 
               opacity:{
               duration:0.6},
             ease:"easeIn",
             duration:1}}


            
            
            
            
            
            >Choose us as your trusted partner because we blend industry expertise with innovative solutions tailored to meet your unique needs. </motion.p>
        </div>
      
    </div>
  )
}

export default About
