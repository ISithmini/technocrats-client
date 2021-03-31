import React from "react";
import "./JobSeekerComponent.scss";
import { AiFillStar } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const JobSeekerComponent = () => {
  return (
    <div>
      <div className="col-sm-12 col-md-6 col-lg-6 col p-4 shadow card jobseeker-card">
        <div className="row seeker-details img">
          <div className="col-4 text-center  job-seeker-card-image-sec">
            <div className="text-center job-seeker-card-img-container">
              <img src="/assets/images/Avatar-Image.png" alt="avatar" />
            </div>
          </div>
          <div className="col-8 text-center seeker-detail-pannel">
            <span>Sathira Nipun</span>
            <br />
            <p>Member since 2016</p>
            <div className="row p-0 m-o">
              <div className="col-md-6 ">Level 01</div>
              <div className="col-md-6">
                <AiFillStar /> 4.5
              </div>
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

            <p>Positive Feedback | 25</p>
          </div>
        </div>
        <span class="border seeker-location text-center border-right-0 border-left-0">
          <MdLocationOn /> &nbsp; Rathmalana ,Moratuwa ,Sri Lanka
        </span>
        <br/>
        <p className="job-seeker-description">I am professional Graphic Designer since more than 5 years. please view my profile or contact me for get more details</p>
        <button type="button" className="btn font-weight-bold btn-primary mt-2">
              View Profile
            </button>
      </div>
    </div>
  );
};

export default JobSeekerComponent;
