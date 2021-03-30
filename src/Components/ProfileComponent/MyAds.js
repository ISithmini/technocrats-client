import React from 'react'
import './MyAds.scss'
import Button from '../Button/Button'

export default function MyAds() {
    return (
        <div className="myads-container">
            <h3 className="myads-info-title">My Ads</h3>
                <div className="ad-btn">
                    <Button>Post an advertisment</Button>
                </div>

                <div className="ad-container">
                    <div className="ad-block">
                        <img src="/assets/images/adimg/ad1.jpg" alt="kk" className="ad-img"/>
                        <h3>Advertisment title</h3>
                        <p>Rs. 5000</p>
                    </div>
                </div>
        </div>
    )
}
