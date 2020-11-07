import React from 'react'
import seekerImg from '../../assets/images/innovation__monochromatic.png';
import { useSpring, animated, config } from 'react-spring';

function SeekerSide() {

  const animprops1 = useSpring({opacity: 1, transform: "translate3d(0%, 0 ,0)",  from: {opacity: 0, transform: "translate3d(50%, 0 ,0)"}, delay: 400})

  return (
    <div className="seekerSide col-lg-6 col-md-6 col-sm-12">
      <div className='row providerSideContent'>
        <img src={seekerImg} alt="providerImg"  className="providerImg"/>
        <animated.div style={animprops1}><div className="sideTextDiv" >Find Top <b>Job Seekers</b> in Sri Lanka</div></animated.div>
        <div className="searchBtnDiv" ><button className="btn seekerSearchBtn">Search Now</button></div>
      </div>
    </div>
  )
}

export default SeekerSide
