import React from 'react'
import './ProviderSide.scss';
import providerImg from '../../assets/images/seo_monochromatic.png';

function ProviderSide() {
  return (
    <div className="providerSide col-lg-6 col-md-6 col-sm-12">
      <div className='row providerSideContent'>
        <img src={providerImg} alt="providerImg"  className="providerImg"/>
        <div className="sideTextDiv" >Find Top <b>Job Providers</b> in Sri Lanka</div>
        <div className="searchBtnDiv" ><button className="btn providerSearchBtn">Search Now</button></div>
      </div>
    </div>
  )
}

export default ProviderSide;
  