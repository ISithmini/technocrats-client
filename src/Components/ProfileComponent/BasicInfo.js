import Button from '../Button/Button'
import React, { useState, useEffect} from 'react';
import './BasicInfo.scss'
import Axios from "axios";
import { getUser } from '../../api/userApi/userApi';

const BasicInfo = ({
    user
}) => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [location, setlocation] = useState('');
    const [telNo, settelNo] = useState('');

    useEffect(() => {
      //console.log(user.id);
      getUser({_id: user.id})
      .then(res => {
        let curruser = res.data.user
          console.log(curruser.id);
          setname(curruser.name);
          setemail(curruser.email);
          setlocation(curruser.location);
          settelNo(curruser.contactNo);
      })  
    }, []);

    return (
        <div className="basicinfo-container">
            <h3 className="basic-info-title">Basic Info</h3>
            
            <div className="basic-info-content">
                <div>
                    <p className="basic-info-details">First Name</p> 
                    <p className="basic-info-details-content">{ name.split(" ", 1) }</p>
                </div>

                <div>
                    <p className="basic-info-details">Last Name</p>
                    <p className="basic-info-details-content">{ name }</p>
                </div>

                <div>
                <p className="basic-info-details">Email Address</p>
                <p className="basic-info-details-content">{ email }</p>
                </div>

                <div>
                <p className="basic-info-details">District</p>
                <p className="basic-info-details-content">{ location }</p>
                </div>

                <div>
                <p className="basic-info-details">City</p>
                <p className="basic-info-details-content">{ location }</p>
                </div>

                <div>
                <p className="basic-info-details">Phone Number</p>
                <p className="basic-info-details-content">{ telNo }</p>
                </div>
            </div>
        </div>
    )
}

export default BasicInfo;

