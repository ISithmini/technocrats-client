import React from 'react'
import SkeletonElement from './SkeletonElement';
import Shrimmer from './Shrimmer';


const SkeletonTimeCategory = ({ theme, type }) => {
  const themeClass = theme || 'light'
  const skeletonType = type || '';
  return (
    <div className={`skeleton-wrapper ${themeClass} ${skeletonType}`}>
      <div className="skeleton-jobpost">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <Shrimmer />
      </div>
    </div>
  )
}

export default SkeletonTimeCategory
