import React from 'react';
import { Redirect } from 'react-router-dom'
import { checkAccess } from './authentication'

const RouteLock = ( { Component, permissionCode, path } ) => {
  //console.log(checkAccess(permissionCode));
  let isAccessGranted = false;
  
  permissionCode.forEach(code => {
    if (checkAccess(code)) {
      isAccessGranted = true;
    }
  });
  return isAccessGranted? (
    <Component/>
  ) : (
    <Redirect to={{ pathname: `/unauthorized` }} />
  )
}

export default RouteLock
