import React from 'react';
import { Redirect } from 'react-router-dom'
import { checkAccess } from './authentication'

const RouteLock = ( { Component, permissionCode, path } ) => {
  console.log(checkAccess(permissionCode));
  return checkAccess(permissionCode)? (
    <Component/>
  ) : (
    <Redirect to={{ pathname: `/unauthorized` }} />
  )
}

export default RouteLock
