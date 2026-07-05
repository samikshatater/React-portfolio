import React from 'react'
import Homepage from './components/homepage'
import About from './components/About'
import Education from './components/Education'
import Skill from './components/Skill'
import Contact from './components/contact'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div >
      <Header />
      <Homepage />
      <hr />
      <About />
      <hr  />
      <Education />
      <hr  />
      <Skill />
      <hr />
      <Contact />
      <hr className='last' />
      <Footer />
      
    </div>
  )
}

export default App
