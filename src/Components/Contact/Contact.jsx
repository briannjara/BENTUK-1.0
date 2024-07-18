import React from 'react'
import msm_icon from '../../assets/messsage.png'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/location.png'
import './Contact.css'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'
import  { useEffect } from 'react'























const Contact = () => {
     


const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "17e52078-fca1-4535-a13c-2d59de9a3c2d");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Email Sent!!");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        }
      

        useEffect(()=> {
          Aos.init({ duration: 2000})
        }, [])



  return (
    <div className="contact" id='contact'>
        <div data-aos="fade-right"
        
        
        className="contact-col">
            <h3
            

            
           
            
            
            
            
            >Send us a message <img src={msm_icon} alt="" /></h3>
            <p
            
            
            >Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
            <ul 
                      
            
            
            >
                <li><img src={mail_icon} alt="" />bettyshee2023@gmail.com</li>
                <li><img src={phone_icon} alt="" />+254 729 776 569</li>
                <li><img src={location_icon} alt="" />6th 4 Paramount Plaza House, Murang'a Road Off Kipande Road, Nairobi Starehe District, CBD. |P.O BOX 28417,00200. CITY SQUARE</li>
            </ul>
        </div>      
        <div data-aos="fade-left"



        className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required/>
                <label>Phone Number</label>
                <input type="email" name='email' placeholder='Enter your Email' required/>
                <label>Write your messages here</label>
                <textarea name='message' placeholder='Enter your Message' rows="6" required></textarea>
                <button className='btn dark-btn' type='submit'>Submit<span>&#10148;</span></button>
            </form>
            <span className='span'>{result}</span>
        </div>      
    </div>
  )
}

export default Contact
