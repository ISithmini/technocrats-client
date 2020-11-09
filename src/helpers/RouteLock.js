import React from 'react';
import { Redirect } from 'react-router-dom'
import { checkAccess } from './authentication'

const RouteLock = ( { Component, resource, permission, path } ) => {
  console.log(checkAccess({resource, permission}));
  return checkAccess({resource, permission})? (
    <Component/>
  ) : (
    <Redirect to={{ pathname: `/unauthorized` }} />
  )
}

export default RouteLock
