import React, { useRef, useEffect } from 'react'
import './Reviews.css'
import next_btn from '../../assets/nextt.png'
import back_btn from '../../assets/backk.png'
import user_1 from '../../assets/user.png'
import user_2 from '../../assets/user.png'
import user_3 from '../../assets/user.png'
import user_4 from '../../assets/user.png'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Reviews = () => {

 
  

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=>{
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}



     
useEffect(()=> {
  Aos.init({ duration: 900 })

}, [])

  return (
    <div className='reviews' id='reviews'>
        <img src={next_btn}alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_btn} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li data-aos="zoom-in">
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>James P.</h3>
                    <span>Kilimani, Kenya</span>
                  </div>
                </div>
                <p>Bentuk's hardware selection is impressive, featuring high-quality tools and equipment for all projects. The staff is professional and helpful, ensuring I find exactly what I need. Bentuk is my go-to for hardware..</p>
             </div>
            </li>

            <li data-aos="zoom-in">
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Emily R.</h3>
                    <span>Thika, Kenya</span>
                  </div>
                </div>
                <p>Bentuk's plumbing tools and fire equipment services are reliable and affordable. They are my go-to for all hardware needs. The staff is knowledgeable and helpful, making every purchase a breeze</p>
             </div>
            </li>

            <li data-aos="zoom-in">
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Willian</h3>
                    <span>Meru, Kenya</span>
                  </div>
                </div>
                <p>Bentuk offers an incredible variety of cereals, both healthy and delicious. Their staff is knowledgeable, helping me choose the best options. The quality is unmatched, making Bentuk my top choice for cereals.</p>
             </div>
            </li>

            <li data-aos="zoom-in">
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Mark L.</h3>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <p>Bentuk provides reliable and top-quality fire equipment. The staff is well-informed, offering excellent guidance on safety products. I feel confident and prepared for emergencies thanks to Bentuk's exceptional fire safety offerings.</p>
             </div>
            </li>
          </ul>
        </div>
       
    </div>
  )
}

export default Reviews
