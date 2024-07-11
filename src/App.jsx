import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About  from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Reviews from './Components/Reviews/Reviews'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <div className="container">
        <Title subTitle='Our SERVICES' title='What We Offer'/>
       <Services/>
       <About/>
       <Title subTitle='Gallery' title='Workshop Services'/>
       <Projects/>
       <Title subTitle='REVIEWS' title='What the Customer Says'/>
       <Reviews/>
       <Title subTitle='Contact us' title='Get in Touch'/>
       <Contact/>
       <Footer/>
       </div>
    </div>
  )
}

export default App