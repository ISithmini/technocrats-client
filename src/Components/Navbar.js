import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/js/src/collapse.js";
import { AuthContext } from '../context/AuthContext';
import { logOut } from '../api/userApi/userApi';
import { checkAccess } from '../helpers/authentication';

function Navbar() {

  const { user, dispatch } = useContext(AuthContext);

  const handleLogin = async () => {
    await logOut().then(res =>{
      console.log(res);
      dispatch({ type: 'REMOVE_USER', user: '' });
    })
    
  }

  const renderLoginButton = () => {
    if (! user ) {
      return(
        <Link className="nav-link" to="/Login">
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Log in</button>
        </Link>
      ) 
    } else {
      return (
        <Link className="nav-link" to="" >
          <button onClick={handleLogin} className="btn btn-outline-primary my-2 my-sm-0" type="submit">Log out</button>
        </Link>
      )
    }
  }

  const renderCreateAccountButton = () => {
    if (! user ) {
      return(
        <Link className="" to="/register">
          <button className="btn btn-primary my-2 my-sm-0" type="submit">Create Account</button>
        </Link>
      ) 
    } else {
      return (
        <span></span>
      )
    }
  }

  const renderGreeting = () => {
    if ( user ) {
      return(
        <Link className="" to="/register">
          <span type="submit">{`Hey, ${user.name}`}</span>
        </Link>
      ) 
    } else {
      return (
        <span></span>
      )
    }
  }

  const renderDashboardButton = () => {
    if (checkAccess({ resource: 'dashboard', permission: 'dashboardAccess' })) {
      return (
        <Link className="nav-link" to="/dashboard">
          <span type="submit">{`Dashboard`}</span>
        </Link>
      )
    } else {
      return (
        <span></span>
      )
    }
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link className="navbar-brand" to="/">TechnocratsJobs</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContext">

        <ul className="navbar-nav mr-auto">

          <li className="nav-item ">
            <Link className="nav-link" to='/jobs'>Jobs <span className="sr-only">(current)</span></Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/seekers">Freelancers</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/seekers">About us</Link>
          </li>
        </ul>
        
        { renderGreeting() }

        { renderDashboardButton() }

        { renderLoginButton() }

        { renderCreateAccountButton() }

      </div>

    </nav>
  )
}

export default Navbar
