import React from 'react';
import SidePanel from './SidePanel';
import RolesPermissions from './subComponents/RolesPermissions';
import './style/RightSideContent.scss'

const Dashboard = () => {
  return (
    <div>
      <SidePanel/>
      <div className="RightSideContent" >
        <RolesPermissions/>
      </div>
    </div>
  )
}

export default Dashboard
