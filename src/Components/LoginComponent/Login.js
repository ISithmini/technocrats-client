import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import './LoginPage.scss'
import { useSpring, animated, config } from 'react-spring';
import { logIn } from '../../api/userApi/userApi';
import { AuthContext } from '../../context/AuthContext';

const Login = () => { 

  const animprops1 = useSpring({
    opacity: 1, transform: "translate3d(0%, 0 ,0)",  
    from: {opacity: 0, transform: "translate3d(100%, 0 ,0)"}, 
    config: config.slow
  })
  
  const { dispatch } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('')
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    logIn({ email, password })
    .then(res => {
      console.log(res);
      dispatch({ type: 'GET_USER' });
      history.goBack();
    })
    .catch(err => {
      console.log(err.response);
      setEmailError(err.response.data.errors.email);
      setPasswordError(err.response.data.errors.password);
    })
  }

  return (
    <animated.div style={animprops1}>

    <div className="LoginPage">

      <div className="greetingSection">
        <div className="welcome">Hi! Welcome</div>
        <br/>
        <div className="welcomeText" style={{textAlign:"center"}}>
          <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
        </div>
      </div>

        <div style={{textAlign:"center"}}>
          
          <div className="LoginForm">
            <p className="loginTitle">Login</p>
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
                <input 
                  className="form-control" 
                  onChange={(e) => {setEmail(e.target.value)}} 
                  required={true} 
                  type='email' name='email' id='email' 
                  placeholder='Email Address' />
                  <div className=" alert-danger" >
                    { emailError }
                  </div>
              </div>

              <div className="form-group">
                <input 
                  className="form-control" 
                  onChange={(e) => {setPassword(e.target.value)}} 
                  type='password' name='password' id='password' 
                  placeholder='Enter Password' />
                  <div className=" alert-danger" >
                    { passwordError }
                  </div>
              </div>
              <button  className="btn Login-btn">Login</button>
            </form>

          </div>

        </div>

      </div>
    </animated.div>
  )
}

export default Login
