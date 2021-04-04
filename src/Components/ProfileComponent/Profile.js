import React, { useState, useContext, useEffect } from 'react';
import './Profile.scss'
import { RiAdvertisementLine } from 'react-icons/ri';
import { MdCardMembership, MdFavoriteBorder } from 'react-icons/md';
import { BsChatSquare, BsBriefcase } from 'react-icons/bs';
import { AiOutlineProfile, AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { ImFileOpenoffice } from 'react-icons/im';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { RiLockPasswordLine, RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri';
import { IoIosAddCircle } from "react-icons/io";
import BasicInfo from './BasicInfo';
import { NavLink, Route } from 'react-router-dom';
import MyAds from './MyAds';
import MyMembership from './MyMembership';
import MyChats from './MyChats';
import MyInvoices from './MyInvoices';
import PostedJobs from './PostedJobs';
import MyFavourites from './MyFavourites';
import AppliedJobs from './AppliedJobs';
import NewAds from '../AdvertisementComponent/NewAds'
import PendingAds from '../AdvertisementComponent/PendingAds'
import OngoingAds from '../AdvertisementComponent/OngoingAds';
import FinishedAds from '../AdvertisementComponent/FinishedAds';
import DraftsAds from '../AdvertisementComponent/DraftsAds';
import Button from '../Button/Button'
import { AuthContext } from '../../context/AuthContext';


export default function Profile() {

    const { user, dispatch } = useContext(AuthContext);
    const [userType, setUserType] = useState(false);
    const [menu, setMenu] = useState(false);
    const [hover, setHover] = useState(false);

    const displayMenu = () => {
        setMenu(true);
    }

    const hideMenu = () => {
        setMenu(false);
    }



    const handleMouseHover = () => {
        setHover(true);
    }

    const noMouseHover = () => {
        setHover(false)
    }

    return (
        <div className="myprofile-container">
            <div className="pro-switch-button">
                {!userType && <Button buttonType="outLine" onClick={(e) => { setUserType(!userType) }}>Switch to job seeker mode</Button>}
                {userType && <Button buttonType="outLine" onClick={(e) => { setUserType(!userType) }}>Switch to job provider mode</Button>}
            </div>
            {!userType && <p className="mypro-heading">Viewing profile as job provider</p>}
            {userType && <p className="mypro-heading">Viewing profile as job seeker</p>}



            <div className="myprofile-content">
                {!menu &&
                    <div className="toggle-icon-show" onClick={displayMenu}>
                        <AiOutlineMenuUnfold />
                    </div>
                }
                {menu &&
                    <div className="toggle-icon-show hide" onClick={hideMenu}>
                        <AiOutlineMenuFold />
                    </div>
                }
                <div className={menu ? "myprofile-categories active" : "myprofile-categories"}>
                    <NavLink to="/myprofile/" exact className="sidebar-title" onClick={hideMenu}>
                        <div className="sidebar-content">
                            <div className="sidebar-icon">
                                <AiOutlineProfile />
                            </div>
                            <div className="sidebar-title-txt">
                                Basic Information
                                </div>
                        </div>
                    </NavLink>

                    <NavLink to="/myprofile/advertisements/" exact className="sidebar-title advertisements-sidebar-title" onClick={hideMenu} onMouseEnter={handleMouseHover}//Advertisements
                        onMouseLeave={noMouseHover}>
                        <div className="advertisements-content">
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <MdCardMembership />
                                </div>
                                <div className="sidebar-title-txt">
                                   Advertisements
                                </div>
                            </div>
                            
                            <div>
                                
                                {
                                    hover &&
                                    <div className={menu ? "advertisements-categories active" : "advertisements-categories"}>
                                        <NavLink to="/myprofile/advertisements/" exact className="sidebar-title" onClick={hideMenu}>
                                            <div className="sidebar-content">
                                                <div className="sidebar-icon">
                                                    <IoIosAddCircle />
                                                </div>
                                                <div className="sidebar-title-txt">
                                                    New
                            </div>
                                            </div>
                                        </NavLink>

                                        <NavLink to="/myprofile/advertisements/pendingads" exact className="sidebar-title" onClick={hideMenu}>
                                            <div className="sidebar-content">
                                                <div className="sidebar-icon">
                                                    <MdCardMembership />
                                                </div>
                                                <div className="sidebar-title-txt">
                                                    Pending
                                </div>
                                            </div>
                                        </NavLink>

                                        <NavLink to="/myprofile/advertisements/ongoingads" exact className="sidebar-title" onClick={hideMenu}>
                                            <div className="sidebar-content">
                                                <div className="sidebar-icon">
                                                    <MdFavoriteBorder />
                                                </div>
                                                <div className="sidebar-title-txt">
                                                    Ongoing
                                </div>
                                            </div>
                                        </NavLink>

                                        <NavLink to="/myprofile/advertisements/finishedads" exact className="sidebar-title" onClick={hideMenu}>
                                            <div className="sidebar-content">
                                                <div className="sidebar-icon">
                                                    <BsChatSquare />
                                                </div>
                                                <div className="sidebar-title-txt">
                                                    Finished
                                </div>
                                            </div>
                                        </NavLink>

                                        <NavLink to="/myprofile/advertisements/draftsads" exact className="sidebar-title" onClick={hideMenu}>
                                            <div className="sidebar-content">
                                                <div className="sidebar-icon">
                                                    <FaFileInvoiceDollar />
                                                </div>
                                                <div className="sidebar-title-txt">
                                                    Drafts
                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                }
                            </div>

                        </div>
                    </NavLink>

                    <NavLink to="/myprofile/myfavourites" exact className="sidebar-title" onClick={hideMenu}>
                        <div className="sidebar-content">
                            <div className="sidebar-icon">
                                <MdFavoriteBorder />
                            </div>
                            <div className="sidebar-title-txt">
                                My Faviourites
                                </div>
                        </div>
                    </NavLink>

                    <NavLink to="/myprofile/mychats" exact className="sidebar-title" onClick={hideMenu}>
                        <div className="sidebar-content">
                            <div className="sidebar-icon">
                                <BsChatSquare />
                            </div>
                            <div className="sidebar-title-txt">
                                My Chats
                                </div>
                        </div>
                    </NavLink>

                    <NavLink to="/myprofile/myinvoices" exact className="sidebar-title" onClick={hideMenu}>
                        <div className="sidebar-content">
                            <div className="sidebar-icon">
                                <FaFileInvoiceDollar />
                            </div>
                            <div className="sidebar-title-txt">
                                My Invoices
                                </div>
                        </div>
                    </NavLink>

                    {!userType &&
                        <NavLink to="/myprofile/postedjobs" exact className="sidebar-title" onClick={hideMenu}>
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <BsBriefcase />
                                </div>

                                <div className="sidebar-title-txt">
                                    Posted Jobs
                                </div>

                            </div>
                        </NavLink>}


                    {userType &&
                        <NavLink to="/myprofile/appliedjobs" exact className="sidebar-title" onClick={hideMenu}>
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <ImFileOpenoffice />
                                </div>

                                <div className="sidebar-title-txt">
                                    Applied Jobs
                                    </div>

                            </div>
                        </NavLink>}
                </div>

                <div className="myprofile-content-info">
                    <Route path="/myprofile/" exact>
                        <BasicInfo user={user} />
                    </Route>
                    
                    <Route path="/myprofile/myfavourites" exact component={MyFavourites} />
                    <Route path="/myprofile/mymembership" exact component={MyMembership} />
                    <Route path="/myprofile/mychats" exact component={MyChats} />
                    <Route path="/myprofile/myinvoices" exact component={MyInvoices} />
                    <Route path="/myprofile/postedjobs" exact component={PostedJobs} />
                    <Route path="/myprofile/appliedjobs" exact component={AppliedJobs} />

                    <Route path="/myprofile/advertisements/" exact>
                        <NewAds user={user} />
                    </Route>

                    <Route path="/myprofile/advertisements/pendingads" exact component={PendingAds} />
                    <Route path="/myprofile/advertisements/ongoingads" exact component={OngoingAds} />
                    <Route path="/myprofile/advertisements/finishedads" exact component={FinishedAds} />
                    <Route path="/myprofile/advertisements/draftsads" exact component={DraftsAds} />
                    
                </div>
            </div>
        </div>
    )
}