import React from 'react';
import SidePanel from './SidePanel';
import RolesPermissions from './subComponents/RolesPermissions';
import './style/RightSideContent.scss'
import { BrowserRouter, Route, useRouteMatch } from 'react-router-dom';
import RouteLock from '../../helpers/RouteLock';
import ManageUser from './subComponents/ManageUser';

const Dashboard = () => {

  const { url } = useRouteMatch();

  return (
    <div>
      <SidePanel/>
      <div className="RightSideContent" >
      <Route 
        path={`${url}/rolePermissions`} 
        render = {props => (
        <RouteLock 
          {...props} 
          Component={ RolesPermissions } 
          path={`${url}/rolePermissions`} 
          permissionCode={['P0103', 'P0102']}/>
      )}/>

      <Route 
        path={`${url}/manageUser`} 
        render = {props => (
        <RouteLock 
          {...props} 
          Component={ ManageUser } 
          path={`${url}/manageUser`} 
          permissionCode={['P0105', 'P0201', 'P0202']}/>
      )}/>
        
      </div>
    </div>
  )
}

export default Dashboard
