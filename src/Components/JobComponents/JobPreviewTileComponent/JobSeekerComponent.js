import React from "react";
import "./JobSeekerComponent.scss";
import { AiFillStar } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const JobSeekerComponent = () => {
  return (
    <div>
      <div className="row col-12 container  jobseekertilecard">
        <div className="col-sm-s12 col card jobseeker-card">
          <div className="row seeker-details img">
            <div className="col-4 text-center">
              <img src="/assets/images/Avatar-Image.png" alt="avatar" />
            </div>
            <div className="col-8 text-center seeker-details">
              <span>Sathira Nipun</span>
              <div className="row">
                <div className="col-md-6 p-0 m-o">Level 01</div>
                <div className="col-md-6 p-0 m-o">
                  <AiFillStar /> 4.5
                </div>
                <div className="provider-contact">
                  <NavLink to="">
                    <IoLogoWhatsapp />
                  </NavLink>
                  &nbsp;
                  <NavLink to="">
                    <AiFillMessage />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-s12 col card jobseeker-card">sdfhds</div>
      </div>
    </div>
  );
};

export default JobSeekerComponent;
