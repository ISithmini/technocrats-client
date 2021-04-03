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
import Button from '../Button/Button';

const CreateAccount = () => {

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
    <div >

        <div className="CreateAccount" >
        <div className="reg-form-title">Create Account</div>
          <div className="formSection">
            <form onSubmit={(e) => {handleSubmit(e)}}>

              <div className="form-group">
                <lable className="form-group-lable">Name</lable>
                <div className="lable-gap"></div>
                <input 
                  className="form-control" 
                  required={true} name="name" id="name"
                  type="text" 
                  placeholder="Enter your name"
                  onChange={(e) => {setName(e.target.value)}} />
              </div>

              <div className="form-group">
                <lable className="form-group-lable">Email Address</lable>
                <div className="lable-gap"></div>
                <input 
                  className="form-control" name="email" 
                  type="email" 
                  placeholder="Enter your email"
                  onChange={(e) => {setEmail(e.target.value)}}/>
                  <div className=" alert-danger" >
                    { emailError }
                  </div>
              </div>

              <div className="form-group">
                <lable className="form-group-lable">Phone No.</lable>
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
              </div>     

              <div className="form-group locationInput" style={{float: "left"}}>
                <lable className="form-group-lable">Location</lable>
                { locationInput() }
                <div className=" alert-danger" >
                    { locationError }
                </div> 
              </div>

              <div className="form-group passwordInputField">
                <lable className="form-group-lable">Password</lable>
                <div className="lable-gap"></div>
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

              <div className="form-group passwordInputField">
                <div></div>
                <input 
                  className="form-control" 
                  name="rePassword" type="password" 
                  placeholder="Re-enter password"
                  onChange={(e) => {setRePassword(e.target.value)}} />
                  <div className=" alert-danger" >
                    { passwordMatch }
                  </div>
              </div>

              <div className="reg-submit-btn">
                <Button 
                  buttonType='primary' 
                  buttonSize="wide" 
                  buttonColour='dark-blue'>Sign up</Button>
              </div>

            </form>

          </div>

        </div>
    </div>
  )
}

export default CreateAccount
