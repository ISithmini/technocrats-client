import React from 'react'
import './styles/Home.scss'
import ProviderSide from './ProviderSide'
import SeekerSide from './SeekerSide'
import { useSpring, animated, config } from 'react-spring';

const Home = () => {
  const animprops = useSpring({opacity: 1, transform: "translate3d(0%, 0 ,0) scale(1)",  from: {opacity: 0, transform: "translate3d(-50%, 0 ,0) scale(0.5)"}, config:{ mass: 2, tension: 100, friction: 26 }})
  const animprops1 = useSpring({opacity: 1, transform: "translate3d(0%, 0 ,0)",  from: {opacity: 0, transform: "translate3d(50%, 0 ,0)"}, config:{ mass: 2, tension: 100, friction: 26 }})
  
  return (
    <div className="home">
      <div className="homeSeachSection" style={{width: '90%'}}> 
      <animated.div style={animprops}><ProviderSide/></animated.div>
      <animated.div style={animprops1}><SeekerSide/></animated.div>
      </div>

    </div>
  )
}

export default Home
 