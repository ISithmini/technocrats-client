import React from 'react';
import SidePanel from '../Components/Dashboard/SidePanel';
import RolesPermissions from '../Components/Dashboard/subComponents/RolesPermissions';
import '../Components/Dashboard/style/RightSideContent.scss'
import { Route, useRouteMatch } from 'react-router-dom';
import RouteLock from '../helpers/RouteLock';
import ManageUser from '../Components/Dashboard/subComponents/ManageUser';
import Categories from '../Components/Dashboard/subComponents/Categories';

const Dashboard = () => {

  const { url } = useRouteMatch();

  return (
    <div className='dashboard'>
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
            {...props} Component={ Categories } 
            permissionCode={['P0301']}/>
        )}/>
        
      </div>
    </div>
  )
}

export default Dashboard
