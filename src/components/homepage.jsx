import React from 'react'
import samiksha from './samiksha.jpg';


const Homepage = () => {
  return (
    <div className='home house' >
        <section id='home'>
        <img className='sam' src={samiksha} />
        <h1>Hii, I'm Samiksha 👋</h1>
        <h2>Aspiring Software Developer | Web Development Enthusiast
        </h2>  
        </section>
      
    </div>

  )
}

export default Homepage
