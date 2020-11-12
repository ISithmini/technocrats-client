import React, { useState } from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom';
import { checkAccess } from '../../helpers/authentication';

import './style/SidePanel.scss';

const SidePanel = () => {

  const { url } = useRouteMatch();

  const [showClicked, setShowClicked] = useState(false);
  const [SideItems, setSideItems] = useState([
    { key: 1, title: 'Manage Role Permissions', url: '/rolePermissions' },
    { key: 2, title: 'Assign and Create Roles', url: '/' },
    { key: 3, title: 'Complains', url: '/' },
    { key: 4, title: 'Control Privilages', url: '/' },
    { key: 5, title: 'Control Privilages', url: '/' },
  ]);



  return (
    <div className={ showClicked? 'sidePanel sidePanelhide': 'sidePanel sidePanelshow'}>
      <button className="btn Collapse-btn" onClick={() => {setShowClicked(!showClicked)}}>☰</button>
      <div className="SideList" >
      
          { checkAccess('P0103') == true &&
            <NavLink className="sideLink" to={`${url}/rolePermissions`}>
              <div className="sideTile">
                <span>Manage Role Permissions</span>
              </div>
            </NavLink>
          }

          { checkAccess('P0105') == true && 
            <NavLink className="sideLink" exact to={`${url}/manageUser`}>
              <div className="sideTile">
                <span>Assign Roles and Manage Users</span>
              </div>
            </NavLink>
          }

          <NavLink className="sideLink" exact to={`${url}/`}>
            <div className="sideTile">
              <span>Manage Job Posts</span>
            </div>
          </NavLink>
       
    </div>
    </div>
  )
}

export default SidePanel
