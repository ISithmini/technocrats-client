import React, { useState } from 'react'
import './CreateAccount.scss'
import { useSpring, animated, config } from 'react-spring';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import createAccountImg from '../../assets/images/video_tutorial__monochromatic 3.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const CreateAccount = () => {

  const animprops1 = useSpring({
    opacity: 1, transform: "translate3d(0%, 0 ,0)",  
    from: {opacity: 0, transform: "translate3d(100%, 0 ,0)"}, 
    config: config.slow
  });

  return (
    <animated.div style={animprops1}>

        <div className="col-lg-5 col-md-6 col-sm-10 CreateAccount" >

        <img className="createAccountImg" src={createAccountImg} alt="providerImg"  />
        <div className="registerText">Register</div>

          <div className="formSection">

            <form>

              <div className="form-group">
                <input className="form-control" name="name" type="text" placeholder="Enter your name"/>
              </div>

              <div className="form-group">
                <input className="form-control" name="email" type="email" placeholder="Enter your email"/>
              </div>

              <PhoneInput className="PhoneInput"/>      

              <div className="form-group col-lg-12 locationInput" style={{float: "left"}}>
                <GooglePlacesAutocomplete apiKey="AIzaSyCCAVLrZhxhYWQk2R_PGQ4BdEKsp46iOFw" placeholder="Location"/>
              </div>

              <div className="form-group col-lg-6 col-md-10 col-sm-10 passwordInputField">
                <input className="form-control" name="password" type="password" placeholder="Enter a password"/>
              </div>

              <div className="form-group col-lg-6 col-md-10 col-sm-10 passwordInputField">
                <input className="form-control" name="password" type="password" placeholder="Re-enter password"/>
              </div>

              <div className="form-group row"><button  className="btn SignUp-btn">Sign up</button></div>

            </form>

          </div>

        </div>
    </animated.div>
  )
}

export default CreateAccount
