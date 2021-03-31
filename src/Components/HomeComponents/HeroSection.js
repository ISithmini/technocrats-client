import React from 'react';
import Button from '../Button/Button';
import { heroData } from './HeroData';
import './HeroSection.scss';

const HeroSection = ({
  backgroundColour,
  reverse,
  imageLink,
  title,
  description,
  buttonText
}) => {
  return (
    <div className={backgroundColour == 'dark'? "HeroSection dark":"HeroSection"}>
      <div className={reverse? "hero-container reverse": "hero-container"}>
        <div className="hero-image-section">
          <img src={`${imageLink}`} alt="provier" className="hero-image"/>
        </div>
        <div className="hero-content-section">
          <div className={backgroundColour == 'dark'? "hero-content-title dark": "hero-content-title"}>
            { title }
          </div>
          <div className={backgroundColour == 'dark'? "hero-content-description dark":"hero-content-description"}>
            { description }
          </div>
          <div className="hero-content-button-section">
            { backgroundColour == 'dark' &&
              <Button>{`${buttonText}`}</Button>
            }
            { backgroundColour != 'dark' &&
              <Button buttonColour="dark-blue" >{`${buttonText}`}</Button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
