import Button from '../Button/Button'
import './BasicInfo.scss'
import React, { useEffect } from 'react'
import { getUser } from '../../api/userApi/userApi';
import { useState } from 'react';

const BasicInfo = ({
    user 
}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    useEffect(() => {
        getUser({_id: user.id})
        .then(res => {
            console.log(res.data);
            setName(res.data.user.name);
            setLocation(res.data.user.location);
            setPhoneNo(res.data.user.contactNo);
            setEmail(res.data.user.email);
        });
    }, [])

    return (
        <div>
            <div className="basicinfo-container">
                <h3 className="basic-info-title">Basic Info</h3>
                
                <div className="basic-info-content">
                    <div>
                        <p className="basic-info-details">{name}</p> 
                        <p className="basic-info-details-content">Sanjana</p>
                    </div>
    
                    <div>
                        <p className="basic-info-details">Last Name</p>
                        <p className="basic-info-details-content">Ganegoda</p>
                    </div>
    
                    <div>
                    <p className="basic-info-details">Email Address</p>
                    <p className="basic-info-details-content">{email}</p>
                    </div>
    
                    <div>
                    <p className="basic-info-details">District</p>
                    <p className="basic-info-details-content">{location}</p>
                    </div>
    
                    <div>
                    <p className="basic-info-details">City</p>
                    <p className="basic-info-details-content">Piliyandala</p>
                    </div>
    
                    <div>
                    <p className="basic-info-details">{phoneNo}</p>
                    <p className="basic-info-details-content">0716308090</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default BasicInfo

