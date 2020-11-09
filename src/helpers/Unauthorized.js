import React from 'react';
import lockImg from '../assets/images/lock_icon.jpg';
import './Unauthorized.scss';

const Unauthorized = () => {
  return (
    <div className="unauthorized">
      <img className="lockImg" src={lockImg} alt="lock"/>
      <span className="unauthText" >403 Forbidden !</span>
    </div>
  )
}

export default Unauthorized
