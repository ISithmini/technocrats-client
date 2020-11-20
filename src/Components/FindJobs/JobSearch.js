import React from 'react'
import './style/JobSearch.scss'
import PostList from './subComponents/PostList'

const JobSearch = () => {
  return (
    <div className="JobSearch">

      <div>
        Filters
      </div>

      <div>
        <PostList/>
      </div>

    </div>
  )
}

export default JobSearch
