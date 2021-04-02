<<<<<<< HEAD
import {React, useContext, useState} from 'react';
=======
import React, { useState, useContext, useEffect } from 'react';
>>>>>>> origin/main
import './Profile.scss'
import { RiAdvertisementLine } from 'react-icons/ri';
import { MdCardMembership, MdFavoriteBorder } from 'react-icons/md';
import { BsChatSquare, BsBriefcase } from 'react-icons/bs';
import { AiOutlineProfile, AiOutlineMenuUnfold,AiOutlineMenuFold } from 'react-icons/ai';
import { ImFileOpenoffice } from 'react-icons/im';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { RiLockPasswordLine ,RiMenuUnfoldLine, RiMenuFoldLine} from 'react-icons/ri';
import BasicInfo from './BasicInfo';
import { NavLink, Route } from 'react-router-dom';
import MyAds from './MyAds';
import MyMembership from './MyMembership';
import MyChats from './MyChats';
import MyInvoices from './MyInvoices';
import PostedJobs from './PostedJobs';
import MyFavourites from './MyFavourites';
import AppliedJobs from './AppliedJobs';
import Button from '../Button/Button'
import { AuthContext } from '../../context/AuthContext';


export default function Profile() {

    const { user, dispatch } = useContext(AuthContext);
    const [userType, setUserType] = useState(false);
    const [menu, setMenu] = useState(false);

    const displayMenu = () => {
        setMenu(true);
    }

    const hideMenu = () => {
        setMenu(false);
    }
    
    return (
        <div className="myprofile-container">
        <div className="pro-switch-button"> 
            {!userType && <Button buttonType="outLine" onClick={(e) =>{setUserType(!userType)}}>Switch to job seeker mode</Button>}
            {userType && <Button buttonType="outLine" onClick={(e) =>{setUserType(!userType)}}>Switch to job provider mode</Button>}
        </div>    
            {!userType && <p className="mypro-heading">Viewing profile as job provider</p>}
            {userType && <p className="mypro-heading">Viewing profile as job seeker</p>}



                <div className="myprofile-content">
                { !menu &&
                    <div className="toggle-icon-show" onClick={displayMenu}>
                      <AiOutlineMenuUnfold/>
                  </div>
                }
                { menu &&
                    <div className="toggle-icon-show hide" onClick={hideMenu}>
                        <AiOutlineMenuFold/>
                    </div>
                }
                    <div className = {menu ? "myprofile-categories active" : "myprofile-categories"}>
                        <NavLink to="/myprofile/" exact className="sidebar-title" onClick={hideMenu}>
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <AiOutlineProfile/>
                                </div>
                                <div className="sidebar-title-txt">
                                    Basic Information
                                </div>
                            </div>
                        </NavLink>

                        <NavLink to="/myprofile/myads" exact className="sidebar-title" onClick={hideMenu}>
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <MdCardMembership/>
                                </div>
                                <div className="sidebar-title-txt">
                                    My Advertisments
                                </div>
                            </div>
                        </NavLink>

                        <NavLink to="/myprofile/myfavourites" exact className="sidebar-title" onClick={hideMenu}>
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <MdFavoriteBorder/>
                                </div>
                                <div className="sidebar-title-txt">
                                    My Faviourites
                                </div>
                            </div>
                        </NavLink>

                        <NavLink to="/myprofile/mychats" exact className="sidebar-title" onClick={hideMenu}>
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <BsChatSquare/>
                                </div>
                                <div className="sidebar-title-txt">
                                    My Chats
                                </div>
                            </div>
                        </NavLink>

                        <NavLink to="/myprofile/myinvoices" exact className="sidebar-title" onClick={hideMenu}>
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <FaFileInvoiceDollar/>
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
                                    <BsBriefcase/>
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
                                        <ImFileOpenoffice/>
                                    </div>
                                     
                                    <div className="sidebar-title-txt">
                                    Applied Jobs
                                    </div>
                                    
                                </div>
                            </NavLink>}
                    </div>

                    <div className="myprofile-content-info">
                        <Route path="/myprofile/"  exact>
                            <BasicInfo user={user}/>
                        </Route>
                        <Route path="/myprofile/myads"  exact component={MyAds} />
                        <Route path="/myprofile/myfavourites"  exact component={MyFavourites} />
                        <Route path="/myprofile/mymembership"  exact component={MyMembership} />
                        <Route path="/myprofile/mychats"  exact component={MyChats} />
                        <Route path="/myprofile/myinvoices"  exact component={MyInvoices} />
                        <Route path="/myprofile/postedjobs"  exact component={PostedJobs} />
                        <Route path="/myprofile/appliedjobs"  exact component={AppliedJobs} />
                    </div>
                </div>
        </div>
    )
}
