import React from 'react'
import seekerImg from '../../assets/images/innovation__monochromatic.png';

function SeekerSide() {
  return (
    <div className="seekerSide col-lg-6 col-md-6 col-sm-12">
      <div className='row providerSideContent'>
        <img src={seekerImg} alt="providerImg"  className="providerImg"/>
        <div className="sideTextDiv" >Find Top <b>Job Providers</b> in Sri Lanka</div>
        <div className="searchBtnDiv" ><button className="btn seekerSearchBtn">Search Now</button></div>
      </div>
    </div>
  )
}

export default SeekerSide
