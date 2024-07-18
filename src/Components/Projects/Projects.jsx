import React from 'react'
import { Link } from 'react-scroll';
import './Projects.css'
import gallery_1 from '../../assets/contact us.jpg'
import gallery_2 from '../../assets/IT.jpg'
import gallery_3 from '../../assets/plutools.jpg'
import gallery_4 from '../../assets/elec.jpeg'
import { motion } from 'framer-motion';




const Projects = () => {
  return (
    <div className='project' id='projects'>
      <div className="gallery">
        <motion.img 
        initial={{opacity: 0, x: -50}}
        whileInView={{x:0, opacity:1}}
        transition={{
          delay:0.2,
           x:{
           type:"spring", 
           stiffness:60}, 
           opacity:{
           duration:0.6},
         ease:"easeIn",
         duration:1}}






        src={gallery_1} alt="" />
        <motion.img 
        initial={{opacity: 0, x: -300}}
        whileInView={{x:0, opacity:1}}
        transition={{
          delay:0.2,
           x:{
           type:"spring", 
           stiffness:60}, 
           opacity:{
           duration:0.8},
         ease:"easeIn",
         duration:1}}






        
        src={gallery_2} alt="" />
        <motion.img 
        initial={{opacity: 0, x: 300}}
        whileInView={{x:0, opacity:1}}
        transition={{
          delay:0.2,
           x:{
           type:"spring", 
           stiffness:60}, 
           opacity:{
           duration:0.8},
         ease:"easeIn",
         duration:1}}
        
        
        
        
        
        src={gallery_3} alt="" />
        <motion.img 
        initial={{opacity: 0, x: 50}}
        whileInView={{x:0, opacity:1}}
        transition={{
          delay:0.2,
           x:{
           type:"spring", 
           stiffness:60}, 
           opacity:{
           duration:0.6},
         ease:"easeIn",
         duration:1}}
        
        
        
        
        
        src={gallery_4} alt="" />
      </div>
      <motion.button
      initial={{opacity: 0, x: -50}}
      whileInView={{x:0, opacity:1}}
      transition={{
        delay:0.2,
         x:{
         type:"spring", 
         stiffness:60}, 
         opacity:{
         duration:0.6},
       ease:"easeIn",
       duration:1}}
      
      
      
      
      className='btn dark-btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Enquire</Link><span>&#10148;</span></motion.button>
    </div>
  )
}

export default Projects
