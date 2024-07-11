import React from 'react'
import { Link } from 'react-scroll';
import './Projects.css'
import gallery_1 from '../../assets/contact us.jpg'
import gallery_2 from '../../assets/IT.jpg'
import gallery_3 from '../../assets/plutools.jpg'
import gallery_4 from '../../assets/elec.jpeg'

const Projects = () => {
  return (
    <div className='project' id='projects'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Enquire</Link><span>&#10148;</span></button>
    </div>
  )
}

export default Projects
