import React from 'react'
import { getCategories, getTimeCategories } from '../api/categoryApi/categoryApi'
import './JobSearch.scss'
import PostList from '../Components/FindJobs/subComponents/PostList'
import SearchFilters from '../Components/FindJobs/subComponents/SearchFilters'

const JobSearch = () => {

  return (
    <div className="JobSearch">

      <div className="FilterPanel" >
        <SearchFilters />
      </div>

      <div>
        <PostList/>
      </div>

    </div>
  )
}

export default JobSearch
