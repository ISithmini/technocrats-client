import React, { useContext, useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { checkAccess } from '../../helpers/authentication';
import avatarIcon from '../../assets/images/Avatar-Image.png'
import { IoIosLock, IoMdPricetags } from "react-icons/io";
import { FaUserLock } from "react-icons/fa"

import './style/SidePanel.scss';

const SidePanel = () => {

  const { url } = useRouteMatch();

  const { user } = useContext(AuthContext);

  const [showClicked, setShowClicked] = useState(false);



  return (
    <div className={ showClicked? 'sidePanel sidePanelhide': 'sidePanel sidePanelshow'}>
      <button className="btn Collapse-btn" onClick={() => {setShowClicked(!showClicked)}}>☰</button>
      
      
          
            <div className="AccountInfo">
              <img className="AccountPic" src={ avatarIcon } alt="Avatar" />
              <div className="AccountName">
                { user.name }
              </div>
              <div className="AccountRole">
                {user.role.title}
              </div>
            </div>
            <hr className="AccountInfoHr"/>
          
        <div className="SideList" onClick={() => {setShowClicked(!showClicked)}}>
          { checkAccess('P0103') === true &&
            <NavLink className="sideTile" exact to={`${url}/rolePermissions`}>
              <IoIosLock className="sideTileIcon"/>
              Manage Role Permissions
            </NavLink>
          }

          { (checkAccess('P0105') === true || checkAccess('P0201') === true || checkAccess('P0202') === true) && 
            <NavLink className="sideTile" exact to={`${url}/manageUser`}>
              <FaUserLock className="sideTileIcon"/>
              Assign Roles and Manage Users
            </NavLink>
          }

          { checkAccess('P0301') === true &&
            <NavLink className="sideTile" to={`${url}/manageCategories`}>
              <IoMdPricetags className="sideTileIcon"/>
               Job Categories and Skills
            </NavLink>
          }
       
    </div>
    </div>
  )
}

export default SidePanel
