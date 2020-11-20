import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shrimmer from './Shrimmer'

const SkeletonUserTile = ({ theme, type }) => {
  const themeClass = theme || 'light'
  const skeletonType = type || '';
  return (
    <div className={`skeleton-wrapper ${themeClass} ${skeletonType}`}>
      
        <SkeletonElement type="avatar" />
        <SkeletonElement type="name" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <Shrimmer />
    </div>
  )
}

export default SkeletonUserTile
