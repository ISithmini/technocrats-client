import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { checkAccess } from './authentication'

const RouteLock = ( { Component, permissionCode, path, redirect } ) => {
  //console.log(checkAccess(permissionCode));
  let isAccessGranted = false;
  
  permissionCode.forEach(code => {
    if (checkAccess(code)) {
      isAccessGranted = true;
    }
  });
  return isAccessGranted? (
    <Route path={path}><Component/></Route>
  ) : (
    <Redirect to={{ pathname: `${redirect}` }} />
  )
}

export default RouteLock
