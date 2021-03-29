import {React, useState} from 'react';
import './Profile.scss'
import { RiAdvertisementLine } from 'react-icons/ri';
import { MdCardMembership, MdFavoriteBorder } from 'react-icons/md';
import { BsChatSquare, BsBriefcase } from 'react-icons/bs';
import { AiOutlineProfile } from 'react-icons/ai';
import { ImFileOpenoffice } from 'react-icons/im';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import BasicInfo from './BasicInfo';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import MyAds from './MyAds';
import MyMembership from './MyMembership';
import MyChats from './MyChats';
import MyInvoices from './MyInvoices';
import PostedJobs from './PostedJobs';
import MyFavourites from './MyFavourites';
import AppliedJobs from './AppliedJobs';
import Button from '../Button/Button'

export default function Profile() {
    const [userType, setUserType] = useState(false);
    return (
        <div className="myprofile-container">
            {!userType && <Button buttonType="outLine" onClick={(e) =>{setUserType(!userType)}}>Switch to job seeker mode</Button>}
            {userType && <Button buttonType="outLine" onClick={(e) =>{setUserType(!userType)}}>Switch to job provider mode</Button>}
            {!userType && <p className="mypro-heading">Viewing profile as job provider</p>}
            {userType && <p className="mypro-heading">Viewing profile as job seeker</p>}
                <div className="myprofile-content">
                    <div className = "myprofile-categories">
                        <h3 className="profile-head-topic"> Account </h3>
                        <NavLink to="/myprofile/" className="pro-sub-link" exact>
                            <p className="profile-sub-topic"><AiOutlineProfile/> Basic info</p>
                        </NavLink>

                        <NavLink to="/myprofile/myads" className="pro-sub-link" exact>
                            <p className="profile-sub-topic"> <RiAdvertisementLine/> My Ads</p>
                        </NavLink>

                        <NavLink to="/myprofile/mymembership" className="pro-sub-link" exact>
                        <p className="profile-sub-topic"> <MdCardMembership/> My Membership</p>
                        </NavLink>

                        <NavLink to="/myprofile/myfavourites" className="pro-sub-link" exact>
                        <p className="profile-sub-topic"> <MdFavoriteBorder/> My favourites</p>
                        </NavLink>

                        <NavLink to="/myprofile/mychats" className="pro-sub-link" exact>
                        <p className="profile-sub-topic"><BsChatSquare/> My chats</p>
                        </NavLink>

                        <NavLink to="/myprofile/myinvoices" className="pro-sub-link" exact>
                        <p className="profile-sub-topic"><FaFileInvoiceDollar/> My invoices</p>
                        </NavLink>

                        <h3 className="profile-head-topic"> My Jobs </h3>

        
                        <NavLink to="/myprofile/postedjobs" className="pro-sub-link" exact>
                        {!userType && <p className="profile-sub-topic"><BsBriefcase/> Post Jobs</p>}
                        </NavLink>

                        <NavLink to="/myprofile/appliedjobs" className="pro-sub-link" exact>
                        {userType && <p className="profile-sub-topic"><ImFileOpenoffice/> Applied Jobs</p>}    
                        </NavLink>
    

                        <p className="profile-head-topic"> <RiLockPasswordLine/> Reset Password </p>
                        <p className="profile-head-topic"> <HiOutlineLogout/> Logout </p>
                    </div>

                    <div className="myprofile-content-info">
                        <Route path="/myprofile/"  exact component={BasicInfo} />
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
