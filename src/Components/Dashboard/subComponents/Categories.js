import React from 'react'
import ManageCategories from './ManageCategories'
import '../style/Categories.scss'
import { Link, NavLink, Route, useRouteMatch } from 'react-router-dom'

const Categories = () => {

  const { url } = useRouteMatch();

  return (
    <div>
      <div className="ManageCategoriesTitle" >Job Categories</div>

      <div className="Catgories">

        

        <div className="menuBar">
          
            <NavLink className="menuBar-item" exact to={ `${url}/fieldbase` }>
              Field Based
            </NavLink>

            <NavLink className="menuBar-item" exact to={ `${url}/workschedules` }>
              Work Schedules
            </NavLink>
          
        </div>
        <Route path={ `${url}/fieldbase` } component={ ManageCategories } />
      </div>
    </div>
  )
}

export default Categories
