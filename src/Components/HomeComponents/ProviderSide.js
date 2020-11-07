import React from 'react'
import './styles/ProviderSide.scss';
import providerImg from '../../assets/images/seo_monochromatic.png';
import { useSpring, animated, config } from 'react-spring';

function ProviderSide() {
  const animprops = useSpring({opacity: 1, transform: "translate3d(0%, 0 ,0)",  from: {opacity: 0, transform: "translate3d(-50%, 0 ,0)"},  delay: 400})
  //const animprops1 = useSpring({opacity: 1, transform: "translate3d(0%, 0 ,0)",  from: {opacity: 0, transform: "translate3d(50%, 0 ,0)"}})
  
  return (
    <div className="providerSide col-lg-6 col-md-6 col-sm-12">
      <div className='row providerSideContent'>
        <img src={providerImg} alt="providerImg"  className="providerImg"/>
        <animated.div style={animprops}><div className="sideTextDiv" >Find Top <b>Job Providers</b> in Sri Lanka</div></animated.div>
        <div className="searchBtnDiv" ><button className="btn providerSearchBtn">Search Now</button></div>
      </div>
    </div>
  )
}

export default ProviderSide;
  