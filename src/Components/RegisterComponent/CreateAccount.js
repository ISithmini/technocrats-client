import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import './CreateAccount.scss'
import { useSpring, animated, config } from 'react-spring';
import PlacesAutocomplete from 'react-places-autocomplete';
import createAccountImg from '../../assets/images/video_tutorial__monochromatic 3.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { signUp } from '../../api/userApi/userApi';
import { AuthContext } from '../../context/AuthContext';

const CreateAccount = () => {

  const animprops1 = useSpring({
    opacity: 1, transform: "translate3d(0%, 0 ,0)",  
    from: {opacity: 0, transform: "translate3d(100%, 0 ,0)"}, 
    config: config.slow
  });

  const { dispatch } = useContext(AuthContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [passwordMatch, setPasswordMatch] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactNoError, setContactNoError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [locationError, setLocationError] = useState('')
  const history = useHistory();

  useEffect(() => { //password doesn't match error handle
    setPasswordError('')
    if ( !(password === '' || rePassword === '') && (password !== rePassword))
      setPasswordMatch('Password doesn`t match');
    else
      setPasswordMatch('')
  }, [password, rePassword]);

  useEffect(() => { // clear errors
    setEmailError('');
  }, [email]);

  useEffect(() => {
    setLocationError('');
  }, [location]);

  useEffect(() => {
    setContactNoError('')
  }, [contactNo]);

  const handleSubmit = (e) => { // handle form submit + api call + errorhandle
    e.preventDefault()
    setEmailError('');
    if (!passwordMatch) {
      signUp({ name, email, contactNo, location, password })
      .then(result => {
        console.log(result);
        dispatch({ type: 'GET_USER' });
        history.push('/');
      })
      .catch(err => {
        console.log(err.response);
        setEmailError(err.response.data.errors.email);
        setPasswordError(err.response.data.errors.password);
        setLocationError(err.response.data.errors.location);
        setContactNoError(err.response.data.errors.contactNo);
      })
    }
  }

  const locationInput = () => {
    return (
      <PlacesAutocomplete
        value={location}
        onChange={(e) => {setLocation(e)}}
        
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }

  return (
    <animated.div style={animprops1}>

        <div className="col-lg-5 col-md-6 col-sm-10 CreateAccount" >

        <img className="createAccountImg" src={createAccountImg} alt="providerImg"  />
        <div className="registerText">Register</div>

          <div className="formSection">

            <form onSubmit={(e) => {handleSubmit(e)}}>

              <div className="form-group">
                <input 
                  className="form-control" 
                  required={true} name="name" id="name"
                  type="text" 
                  placeholder="Enter your name"
                  onChange={(e) => {setName(e.target.value)}} />
              </div>

              <div className="form-group">
                <input 
                  className="form-control" name="email" 
                  type="email" 
                  placeholder="Enter your email"
                  onChange={(e) => {setEmail(e.target.value)}}/>
                  <div className=" alert-danger" >
                    { emailError }
                  </div>
              </div>

              <PhoneInput 
                country={'lk'} className="PhoneInput" 
                onChange={value => setContactNo(value)}
                  inputProps={{
                      name: 'phone',
                      required: true,
              }}/>
              <div className=" alert-danger" >
                    { contactNoError }
              </div>      

              <div className="form-group col-lg-12 locationInput" style={{float: "left"}}>
                { locationInput() }
                <div className=" alert-danger" >
                    { locationError }
                </div> 
              </div>

              <div className="form-group col-lg-6 col-md-10 col-sm-10 passwordInputField">
                <input 
                  className="form-control" 
                  required={true}
                  name="password" type="password" 
                  placeholder="Enter a password"
                  onChange={(e) => {setPassword(e.target.value)}} />
                  <div className=" alert-danger" >
                    { passwordError }
                </div> 
              </div>

              <div className="form-group col-lg-6 col-md-10 col-sm-10 passwordInputField">
                <input 
                  className="form-control" 
                  name="rePassword" type="password" 
                  placeholder="Re-enter password"
                  onChange={(e) => {setRePassword(e.target.value)}} />
                  <div className=" alert-danger" >
                    { passwordMatch }
                  </div>
              </div>

              <div className="form-group row"><button  className="btn SignUp-btn">Sign up</button></div>

            </form>

          </div>

        </div>
    </animated.div>
  )
}

export default CreateAccount
