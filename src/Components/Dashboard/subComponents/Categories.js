import React from 'react'
import ManageCategories from './ManageCategories'
import '../style/Categories.scss'
import { Switch, NavLink, Route } from 'react-router-dom'
import TimeBasedCategories from './TimeBasedCategories'


const Categories = () => {

  //const { url, path } = useRouteMatch();

  return (
    <div>
      <div className="ManageCategoriesTitle" >Job Categories</div>

      <div className="Catgories">

        

        <div className="menuBar">
          
            <NavLink className="menuBar-item" exact to={ `/dashboard/manageCategories/` }>
              Field Based
            </NavLink>

            <NavLink className="menuBar-item" exact to={ `/dashboard/manageCategories/timebased` }>
              Time Based
            </NavLink>
          
        </div>
        <Switch>
          <Route exact path={ `/dashboard/manageCategories/` } component={ ManageCategories } />
          <Route exact path={ `/dashboard/manageCategories/timebased` } component={ TimeBasedCategories } />
        </Switch>
      </div>
    </div>
  )
}

export default Categories
