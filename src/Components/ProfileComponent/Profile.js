import React, { useState, useContext, useEffect } from "react";
import "./Profile.scss";
import { RiAdvertisementLine } from "react-icons/ri";
import { MdCardMembership, MdFavoriteBorder } from "react-icons/md";
import { BsChatSquare, BsBriefcase } from "react-icons/bs";
import {
  AiOutlineProfile,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { ImFileOpenoffice } from "react-icons/im";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { HiArrowCircleRight } from "react-icons/hi";
import {
  RiLockPasswordLine,
  RiMenuUnfoldLine,
  RiMenuFoldLine,
} from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";
import { CgShapeCircle } from "react-icons/cg";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { FaMoneyBill } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";

import BasicInfo from "./BasicInfo";
import { NavLink, Route } from "react-router-dom";
import MyAds from "./MyAds";
import MyMembership from "./MyMembership";
import MyChats from "./MyChats";
import MyInvoices from "./MyInvoices";
import PostedJobs from "./PostedJobs";
import MyFavourites from "./MyFavourites";
import AppliedJobs from "./AppliedJobs";
import NewAds from "../AdvertisementComponent/NewAds";
import PendingAds from "../AdvertisementComponent/PendingAds";
import OngoingAds from "../AdvertisementComponent/OngoingAds";
import FinishedAds from "../AdvertisementComponent/FinishedAds";
import DraftsAds from "../AdvertisementComponent/DraftsAds";

import NewJobPost from "../JobComponents/JobFormComponent/NewJobFormComponent";

import Button from "../Button/Button";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { user, dispatch } = useContext(AuthContext);
  const [userType, setUserType] = useState(false);
  const [menu, setMenu] = useState(false);
  const [hover, setHover] = useState(false);

  const displayMenu = () => {
    setMenu(true);
  };

  const hideMenu = () => {
    setMenu(false);
  };

  const handleMouseHover = () => {
    setHover(true);
  };

  const noMouseHover = () => {
    setHover(false);
  };

  return (
    <div className="myprofile-container pt-2 container">
      <div className="row profile-head ">
        <div className="col-md-3 text-center">
          <h1 class="align-middle">
            {!userType && (
              <img
                src="/assets/images/job_provider.png"
                width="60%"
                alt="job_provider"
              />
            )}
            {userType && (
              <img
                src="/assets/images/job_seeker.png"
                width="60%"
                alt="job_seeker"
              />
            )}
          </h1>
        </div>

        <div className="col-md-6 text-center">
          <h1 class="display-4 usermode-head-title pt-2 align-middle">
            {!userType && (
              <p>
                {" "}
                Welcome!{" "}
                <p className="usermode-head-subtitle p-0 m-0">
                  Now you are in <strong>Job Provider Mode</strong>
                </p>{" "}
              </p>
            )}
            {userType && (
              <p>
                Welcome!{" "}
                <p className="usermode-head-subtitle p-0 m-0">
                  Now you are in <strong>Job Seeker Mode </strong>
                </p>
              </p>
            )}
          </h1>
        </div>

        <div className="col-md-3 my-auto pb-2">
          <div className="text-center ">
            {!userType && (
              <Button
                buttonType="primary"
                buttonColour="dark-blue"
                buttonSize="wide"
                onClick={(e) => {
                  setUserType(!userType);
                }}
              >
                <HiArrowCircleRight /> &nbsp; Job Seeker Mode
              </Button>
            )}
            {userType && (
              <Button
                buttonType="primary"
                buttonColour="dark-blue"
                buttonSize="wide"
                onClick={(e) => {
                  setUserType(!userType);
                }}
              >
                <HiArrowCircleRight /> &nbsp; Job Provider Mode
              </Button>
            )}
          </div>
        </div>
      </div>

      <hr className="mt-0 mb-0  " />

      <div className="row">
        <div className="col-3 profile-sidenavbar ">
          <div class="nav-side-menu ">
            <i
              class="fa fa-bars fa-2x toggle-btn"
              data-toggle="collapse"
              data-target="#menu-content"
            ></i>

            <div class="menu-list">
              <ul id="menu-content" className="menu-content ">
                <NavLink
                  to="/myprofile/"
                  exact
                  className="sidebar-title"
                  onClick={hideMenu}
                >
                  <li className="sidenavbar-tabs"> 
                      <span>
                        <FaUserCircle />
                      </span>
                      &nbsp;
                      <span className="d-none d-sm-inline">Profile </span>
                  </li>
                </NavLink>

                {!userType &&
                <NavLink to="/myprofile/postedjobs" exact className="sidebar-title" onClick={displayMenu}>
                <li
                  data-toggle="collapse"
                  data-target="#products"
                  className="collapsed sidenavbar-tabs"
                >
                    <span>
                      <BsBriefcaseFill />
                    </span>
                    &nbsp;
                    <span className="	d-none d-sm-inline">Posted Jobs</span>{" "}
                </li>

                <ul class="sub-menu collapse" id="products">
                  <NavLink
                    to="/myprofile/job-post/new-job-post"
                    exact
                    className="sidebar-title"
                    onClick={hideMenu}
                  >
                    <li className="sidenavbar-tabs">
                        <CgShapeCircle />
                        &nbsp; &nbsp;New
                    </li>
                  </NavLink>

                  <li className="sidenavbar-tabs">
                      <CgShapeCircle />
                      &nbsp; &nbsp;Pending
                  </li>
                  <li className="sidenavbar-tabs">
                      <CgShapeCircle />
                      &nbsp; &nbsp;Ongoing
                  </li>

                  <li className="sidenavbar-tabs">
                      <CgShapeCircle />
                      &nbsp; &nbsp;Finished
                  </li>

                  <li className="sidenavbar-tabs">
                      <CgShapeCircle />
                      &nbsp; &nbsp;Draft
                  </li>
                </ul>
                </NavLink>}

                {userType &&
                <NavLink to="/myprofile/appliedjobs" exact className="sidebar-title" onClick={displayMenu}>
                <li
                  data-toggle="collapse"
                  data-target="#products"
                  className="collapsed sidenavbar-tabs"
                >
                    <span>
                      <AiFillFileText />
                    </span>
                    &nbsp;
                    <span className="	d-none d-sm-inline">Applied Jobs</span>{" "}
                </li>

                <ul class="sub-menu collapse" id="products">
                  
                  <NavLink
                    to="/myprofile/job-application/new-job-application"
                    exact
                    className="sidebar-title"
                    onClick={hideMenu}
                  >
                    <li className="sidenavbar-tabs">
                        <CgShapeCircle />
                        &nbsp; &nbsp;New
                    </li>
                  </NavLink>

                  <li className="sidenavbar-tabs">
                      <CgShapeCircle />
                      &nbsp; &nbsp;Pending
                  </li>
                  <li className="sidenavbar-tabs">
                      <CgShapeCircle />
                      &nbsp; &nbsp;Ongoing
                  </li>

                  <li className="sidenavbar-tabs">
                      <CgShapeCircle />
                      &nbsp; &nbsp;Finished
                  </li>

                  <li className="sidenavbar-tabs">
                      <CgShapeCircle />
                      &nbsp; &nbsp;Draft
                  </li>
                </ul>
                </NavLink>
                
                }

                

                <NavLink
                  to="/myprofile/myfavourites"
                  exact
                  className="sidebar-title"
                  onClick={hideMenu}
                >
                  <li className="sidenavbar-tabs">
                      <span>
                        <AiFillHeart />
                      </span>
                      &nbsp;
                      <span className="d-none d-sm-inline">Favourites</span>
                  </li>
                </NavLink>

                <NavLink
                  to="/myprofile/mychats"
                  exact
                  className="sidebar-title"
                  onClick={hideMenu}
                >
                  <li className="sidenavbar-tabs">
                      <span>
                        <BsChatSquareDotsFill />
                      </span>
                      &nbsp;<span className="d-none d-sm-inline">Chat</span>
                  </li>
                </NavLink>

                <li data-toggle="collapse" data-target="#new" className="collapsed sidenavbar-tabs">
                    <span>
                      <RiAdvertisementFill />
                    </span>
                    &nbsp;
                    <span className="d-none d-sm-inline">Advertise </span>
                    <span class="arrow"></span>
                </li>

                <ul class="sub-menu collapse" id="new">
                  <NavLink
                    to="/myprofile/advertisements/"
                    exact
                    className="sidebar-title"
                    onClick={hideMenu}
                  >
                    <li className="sidenavbar-tabs">
                        <CgShapeCircle />
                        &nbsp; &nbsp; New
                    </li>
                  </NavLink>

                  <NavLink
                    to="/myprofile/advertisements/pendingads"
                    exact
                    className="sidebar-title"
                    onClick={hideMenu}
                  >
                    <li className="sidenavbar-tabs">
                        <CgShapeCircle />
                        &nbsp;  &nbsp; Pending
                    </li>
                  </NavLink>

                  <NavLink
                    to="/myprofile/advertisements/ongoingads"
                    exact
                    className="sidebar-title"
                    onClick={hideMenu}
                  >
                    <li className="sidenavbar-tabs">
                        <CgShapeCircle />
                        &nbsp; &nbsp; Ongoing
                    </li>
                  </NavLink>

                  <NavLink
                    to="/myprofile/advertisements/finishedads"
                    exact
                    className="sidebar-title"
                    onClick={hideMenu}
                  >
                    <li className="sidenavbar-tabs">
                        <CgShapeCircle />
                        &nbsp; &nbsp; Finished
                    </li>
                  </NavLink>

                  <NavLink
                    to="/myprofile/advertisements/draftsads"
                    exact
                    className="sidebar-title"
                    onClick={hideMenu}
                  >
                    <li className="sidenavbar-tabs">
                        <CgShapeCircle />
                        &nbsp; &nbsp; Draft
                    </li>
                  </NavLink>
                </ul>

                <NavLink
                  to="/myprofile/myinvoices"
                  exact
                  className="sidebar-title"
                  onClick={hideMenu}
                >
                  <li className="sidenavbar-tabs">
                      <span>
                        <FaMoneyBill />
                      </span>
                      &nbsp;
                      <span className="d-none d-sm-inline">Invoices </span>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-9  p-3">
          <Route path="/myprofile/" exact>
            <BasicInfo user={user} />
          </Route>

          <Route
            path="/myprofile/myfavourites"
            exact
            component={MyFavourites}
          />
          <Route
            path="/myprofile/mymembership"
            exact
            component={MyMembership}
          />
          <Route path="/myprofile/mychats" exact component={MyChats} />
          <Route path="/myprofile/myinvoices" exact component={MyInvoices} />
          <Route path="/myprofile/postedjobs" exact component={PostedJobs} />
          <Route path="/myprofile/appliedjobs" exact component={AppliedJobs} />

          <Route path="/myprofile/advertisements/" exact>
            {" "}
            <NewAds user={user} />
          </Route>
          <Route
            path="/myprofile/advertisements/pendingads"
            exact
            component={PendingAds}
          />
          <Route
            path="/myprofile/advertisements/ongoingads"
            exact
            component={OngoingAds}
          />
          <Route
            path="/myprofile/advertisements/finishedads"
            exact
            component={FinishedAds}
          />
          <Route
            path="/myprofile/advertisements/draftsads"
            exact
            component={DraftsAds}
          />

          <Route
            path="/myprofile/job-post/new-job-post"
            exact
            component={NewJobPost}
          />
        </div>
      </div>
    </div>
  );
}
