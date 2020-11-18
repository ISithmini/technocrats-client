import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.scss'
import { AuthContext } from '../context/AuthContext';
import { logOut } from '../api/userApi/userApi';
import { checkAccess } from '../helpers/authentication';
import { AiOutlineMenu } from 'react-icons/ai'

function Navbar() {

  const { user, dispatch } = useContext(AuthContext);

  const [menuCollapse, setmenuCollapse] = useState(false);
  const [isScrollDown, setisScrollDown] = useState(false);
  const [oldScrollPosition, setoldScrollPosition] = useState(0);
  const [currentScrollPosition, setcurrentScrollPosition] = useState(0);


  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true })
  // })

  // const handleScroll = (e) => {

    
  //     setoldScrollPosition(window.pageYOffset);

  //     if (oldScrollPosition > window.pageYOffset ) {
  //       setisScrollDown(false);
        
  //     } else {
  //       setisScrollDown(true);
  //     }
  // } 

  const handleLogin = async () => {
    await logOut().then(res =>{
      //console.log(res);
      dispatch({ type: 'REMOVE_USER', user: '' });
    })
    
  }

  const renderLoginButton = () => {
    if (! user ) {
      return(
        <li className="navItem">
          <Link className="navItemLink" to="/Login">
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Log in</button>
          </Link>
        </li>
      ) 
    } else {
      return (
        <li className="navItem">
          <Link className="navItemLink" to="" >
            <button onClick={handleLogin} className="btn btn-outline-primary my-2 my-sm-0" type="submit">Log out</button>
          </Link>
        </li>
      )
    }
  }

  const renderCreateAccountButton = () => {
    if (! user ) {
      return(
        <li className="navItem">
          <Link className="navItemLink" to="/register">
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Create Account</button>
          </Link>
        </li>
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
        <li className="navItem">
          <Link className="navItemLink" to="/">
            <span type="submit">{`Hey, ${user.name}`}</span>
          </Link>
        </li>
      ) 
    } else {
      return (
        <span></span>
      )
    }
  }

  const renderDashboardButton = () => {
    if (checkAccess('P0001')) {
      return (
        <li className="navItem">
          <Link className="navItemLink" to="/dashboard">
            <span type="submit">{`Dashboard`}</span>
          </Link>
        </li>
      )
    } else {
      return (
        <span></span>
      )
    }
  }
  
  return (
    <nav className={menuCollapse? "NavBar": "NavBar hide"}>
      <div>
      <Link className="navbarBrand" to="/">TechnocratsJobs</Link>
      
      

      <button className="navbar-toggle-btn" onClick={() => {setmenuCollapse(!menuCollapse)}} >
        <AiOutlineMenu/>
      </button>
      </div>

      

        <ul className={menuCollapse? "navbar-List left-side" : "navbar-List left-side hide"}>

          <li className="navItem">
            <Link className="navItemLink" to='/jobs'>Jobs <span className="sr-only">(current)</span></Link>
          </li>

          <li className="navItem">
            <Link className="navItemLink" to="/seekers">Freelancers</Link>
          </li>

          <li className="navItem">
            <Link className="navItemLink" to="/seekers">About us</Link>
          </li>
        </ul>
        
        <ul className={ menuCollapse? "navbar-List right-list": "navbar-List right-list hide" }>

          { renderGreeting() }

          { renderDashboardButton() }

          { renderLoginButton() }

          { renderCreateAccountButton() }

        </ul>

      

    </nav>
  )
}

export default Navbar
