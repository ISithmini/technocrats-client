import { Button } from "bootstrap";
import React from "react";
import "./JobPreviewComponent.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const JobPreviewComponent = () => {
  return (
    <div>
      <div className="card shadow mr-0 pr-0 job-card">
        <div className="row no-gutters container ">
          <div className="col-md-3 provider-details text-center">
            <img src="/assets/images/Avatar-Image.png" alt="avatar" />
            <br />
            <span className="font-weight-bold">Sathira Nipun</span>
           
            <div className="row">
              <div className="col-md-6 p-0 m-o">Level 01</div>
              <div className="col-md-6 p-0 m-o">
                <AiFillStar /> 4.5
              </div>
            </div>
            <div className="provider-contact">
              <NavLink to=""><IoLogoWhatsapp /></NavLink>
              &nbsp;
              <NavLink to=""><AiFillMessage /></NavLink>
            </div>
            <button type="button" className="btn font-weight-bold btn-primary mt-2">
              Apply Job
            </button>
          </div>

          <div className="col-md container card pl-4 m-0 p-2 job-details">
            <div className="row ">
              <h3 className="font-weight-bold">Need a Graphic Designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                explicabo magnam adipisci sed dolorum expedita molestias
                corporis
              </p>
            </div>
            <div className="row">
              <span className="badge rounded-pill bg-primary">Photoshop</span>
              <span className="badge rounded-pill bg-primary">Illustrator</span>
              <span className="badge rounded-pill bg-primary">CorelDraw</span>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 p-0 m-o">
                <span className="font-weight-bold duedate-title">Due Date</span> <br />
                <span className="duedate"> 29 April 2020</span>
              </div>
              <div className="col-md-6 p-0 m-o">
                <span className="location">
                  <MdLocationOn /> &nbsp; Moratuwa,Sri Lanka
                </span>
                <div className="row task-budjet ">
                  <div className="budjet-display my-auto"><FaMoneyBillWave/>&nbsp; Task Budjet</div>
                  <div className="budjet-displayprice">LKR 800</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPreviewComponent;
