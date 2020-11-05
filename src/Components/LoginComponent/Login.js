import React, { useState, useEffect } from 'react'
import './LoginPage.scss'

const Login = () => { 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className="LoginPage col-lg-6">

      <div className="greetingSection">

        <div className="welcome">Hi<br/>Welcome</div>
        <br/>

        <div className="welcomeText" style={{textAlign:"center"}}>
          <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
        </div>

        <div style={{textAlign:"center"}}>
          
          <p className="loginTitle">Login</p>

          <div className="LoginForm col-lg-8 col-md-12 col-sm-12">

            <form onSubmit={(e) => {handleSubmit(e)}}>

              <div className="form-group">
                <input className="form-control" type='number' name='phoneNumber' id='phoneNumber' placeholder='Mobile Number' />
              </div>

              <div className="form-group"><button className="btn Login-btn">Send OTP</button></div>

            </form>

            <div className="secBreak">
              <hr className="LoginHr" />
              <div className="LoginOr">OR</div>
              <hr className="LoginHr" />
            </div>
            
            <form  onSubmit={(e) => {handleSubmit(e)}}>

              <div className="form-group">
                <input className="form-control" onChange={(e) => {setEmail(e.target.value)}} type='email' name='email' id='email' placeholder='Email Address' />
              </div>

              <div className="form-group">
                <input className="form-control" onChange={(e) => {setPassword(e.target.value)}} type='password' name='password' id='password' placeholder='Enter Password' />
              </div>

              <button  className="btn Login-btn">Login</button>

            </form>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Login
