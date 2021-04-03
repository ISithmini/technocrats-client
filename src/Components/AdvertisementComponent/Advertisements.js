import React, { useState, useContext, useEffect } from 'react';
import './Advertisements.scss'
import { AiOutlineProfile, AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthContext';
import { MdCardMembership, MdFavoriteBorder } from 'react-icons/md';
import { BsChatSquare, BsBriefcase } from 'react-icons/bs';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { ImFileOpenoffice } from 'react-icons/im';
import { NavLink, Route } from 'react-router-dom';
import NewAds from './NewAds';
import PendingAds from './PendingAds';
import OngoingAds from './OngoingAds';
import FinishedAds from './FinishedAds';
import DraftsAds from './DraftsAds';
import Button from '../Button/Button'
import Testing from './Testing';



export default function Advertisements() {
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
        <div className="advertisements-container">
            <p className="advertisements-heading">Welcome to the Advertiesment Panel</p>
            <div className="advertisements-content">
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
                <div className={menu ? "advertisements-categories active" : "advertisements-categories"}>
                    <NavLink to="/advertisements/" exact className="sidebar-title" onClick={hideMenu}>
                        <div className="sidebar-content">
                            <div className="sidebar-icon">
                                <AiOutlineProfile />
                            </div>
                            <div className="sidebar-title-txt">
                                New
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/advertisements/pendingads" exact className="sidebar-title" onClick={hideMenu}>
                        <div className="sidebar-content">
                            <div className="sidebar-icon">
                                <MdCardMembership />
                            </div>
                            <div className="sidebar-title-txt">
                                Pending
                                </div>
                        </div>
                    </NavLink>

                    <NavLink to="/advertisements/ongoingads" exact className="sidebar-title" onClick={hideMenu}>
                        <div className="sidebar-content">
                            <div className="sidebar-icon">
                                <MdFavoriteBorder />
                            </div>
                            <div className="sidebar-title-txt">
                                Ongoing
                                </div>
                        </div>
                    </NavLink>

                    <NavLink to="/advertisements/finishedads" exact className="sidebar-title" onClick={hideMenu}>
                        <div className="sidebar-content">
                            <div className="sidebar-icon">
                                <BsChatSquare />
                            </div>
                            <div className="sidebar-title-txt">
                                Finished
                                </div>
                        </div>
                    </NavLink>

                    <NavLink to="/advertisements/draftsads" exact className="sidebar-title" onClick={hideMenu}>
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
                <div className="advertisements-content-info">
                    <Route path="/advertisements/" exact>
                        <NewAds user={user} />
                    </Route>
                   
                    <Route path="/advertisements/pendingads" exact component={PendingAds} />
                    <Route path="/advertisements/ongoingads" exact component={OngoingAds} />
                    <Route path="/advertisements/finishedads" exact component={FinishedAds} />
                    <Route path="/advertisements/draftsads" exact component={DraftsAds} />
                    <Route path="/advertisements/testing" exact component={Testing} />
                    
                </div>
            </div>
        </div>
    )
}
