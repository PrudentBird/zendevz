import React from 'react'
import '../components/Home/Home.css'
import Hero from '../components/Hero/Hero'
import Subhero from '../components/Subhero/Subhero'
import Reviews from '../components/Reviews/Reviews'
import Packages from '../components/Packages/Packages'

const Home = () => {
  return (
    <div>
      <Hero />
      <Subhero />
      <Packages />
      <Reviews />
    </div>
  )
}

export default Home