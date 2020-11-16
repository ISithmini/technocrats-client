import React from 'react';
import SidePanel from './SidePanel';
import RolesPermissions from './subComponents/RolesPermissions';
import './style/RightSideContent.scss'
import { Route, useRouteMatch } from 'react-router-dom';
import RouteLock from '../../helpers/RouteLock';
import ManageUser from './subComponents/ManageUser';
import ManageCategories from './subComponents/ManageCategories';

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
          {...props} Component={ RolesPermissions } 
          permissionCode={['P0103', 'P0102']}/>
      )}/>

      <Route 
        path={`${url}/manageUser`} 
        render = {props => (
        <RouteLock 
          {...props} Component={ ManageUser } 
          permissionCode={['P0105', 'P0201', 'P0202']}/>
      )}/>

      <Route 
        path={`${url}/manageCategories`} 
        render = {props => (
        <RouteLock 
          {...props} Component={ ManageCategories } 
          permissionCode={['P0301']}/>
      )}/>
        
      </div>
    </div>
  )
}

export default Dashboard
