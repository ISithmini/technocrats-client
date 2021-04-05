import React from "react";
import "./JobFormComponent.scss";
import NewJobFormComponent from './NewJobFormComponent'


import { BiCalendarPlus } from "react-icons/bi";
import { ImUserPlus } from "react-icons/im";
import { CgLivePhoto } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { RiStickyNoteFill } from "react-icons/ri";


const JobFormComponent = () => {
  return (
    <div>
      <div className="container">
        <div className="head-title text-center">
          <br />
          <h2>Welcome to the Job Panel</h2>
          <p className="description">
            Reprehenderit esse labore id veniam ut veniam non ex adipisicing
            amet ullamco dolor proident.
          </p>
        </div>
        <div className="row">
          <div className="col-md-2">
            <div class="sidenav">
              <a href="#"><BiCalendarPlus/> &nbsp; New</a>
              <a href="#"><ImUserPlus/> &nbsp;  Pending</a>
              <a href="#"><CgLivePhoto/>&nbsp; Ongoing</a>
              <a href="#"><TiTick/>&nbsp; Finished</a>
              <a href="#"><RiStickyNoteFill/>&nbsp;&nbsp;Draft</a>
            </div>
          </div>
          <div className="col"><NewJobFormComponent/></div>
        </div>
      </div>
    </div>
  );
};

export default JobFormComponent;
