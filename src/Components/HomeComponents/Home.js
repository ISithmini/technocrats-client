import React from 'react'
import './Home.scss'
import ProviderSide from './ProviderSide'
import SeekerSide from './SeekerSide'


function Home() {
  return (
    <div className="home">

      <div className="homeSeachSection" style={{width: '90%'}}> 
        <ProviderSide/>
        <SeekerSide/>
      </div>

    </div>
  )
}

export default Home
 