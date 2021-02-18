import React from 'react'
import { heroData } from '../Components/HomeComponents/HeroData'
import HeroSection from '../Components/HomeComponents/HeroSection'
//import './styles/Home.scss'

const Home = () => {
  
  return (
    <>
      {heroData.map((data) => {
        return(
          <HeroSection {...data}/>
        )
      })}
    </>
  )
}

export default Home
 