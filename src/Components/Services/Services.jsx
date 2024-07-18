import React, { useEffect } from 'react'
import './Services.css'
import service_1 from '../../assets/cereals.jpg'
import service_2 from '../../assets/mechanical.jpg'
import service_3 from '../../assets/plumbing.jpg'
import service_icon_1 from '../../assets/cereal1.png'
import service_icon_2 from '../../assets/engine2.png'
import service_icon_3 from '../../assets/spanner2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Services = () => {
  useEffect(()=> {
    Aos.init({ duration: 1000 })
  
  }, [])
  return (
    <div className='services' id='services'>
         

        <div className="service" data-aos="flip-left">
        <img src={service_1} alt="" />
        <div className="caption">
            <img src={service_icon_1} alt="" />
            <p>Food Supplies</p>
        </div>
        </div>

        <div className="service" data-aos="flip-left">
        <img src={service_2} alt="" />
        <div className="caption">
            <img src={service_icon_2} alt="" />
            <p>Mechanical Services</p>
        </div>
        </div>

        <div className="service" data-aos="flip-left">
        <img src={service_3} alt="" />
        <div className='caption'>
            <img src={service_icon_3} alt="" />
            <p>Plumbing Services</p>
        </div>
        </div>

    </div>

    
  )
}

export default Services
