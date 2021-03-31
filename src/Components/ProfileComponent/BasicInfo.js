import Button from '../Button/Button'
import {React, useState} from 'react'
import './BasicInfo.scss'
import Axios from "axios";

export default function BasicInfo() {

    

    return (
        <div className="basicinfo-container">
            <h3 className="basic-info-title">Basic Info</h3>
            
            <div className="basic-info-content">
                <div>
                    <p className="basic-info-details">First Name</p> 
                    <p className="basic-info-details-content">Sanjana</p>
                </div>

                <div>
                    <p className="basic-info-details">Last Name</p>
                    <p className="basic-info-details-content">Ganegoda</p>
                </div>

                <div>
                <p className="basic-info-details">Email Address</p>
                <p className="basic-info-details-content">sanjanasithira29@gmail.com</p>
                </div>

                <div>
                <p className="basic-info-details">District</p>
                <p className="basic-info-details-content">Colombo</p>
                </div>

                <div>
                <p className="basic-info-details">City</p>
                <p className="basic-info-details-content">Piliyandala</p>
                </div>

                <div>
                <p className="basic-info-details">Phone Number</p>
                <p className="basic-info-details-content">0716308090</p>
                </div>
            </div>
        </div>
    )
}
