import React from 'react'
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
    <section className='hero'>
      <img src="/restaurant.jpg" alt="restraunt" srcSet="" />
      <div className='item'>
        <div>
          <h1>Your Perosnal Dream Maker</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ratione odit necessitatibus sit, fugit possimus quos corporis quisquam? Accusamus veniam sint quo quidem eum veritatis autem impedit libero ex odio.</p>
          <Link to="contact" spy={true.toString()} smooth={true.toString()} duration={500}>
            Book Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
