import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import { logOut } from '../../api/userApi/userApi';
import { checkAccess } from '../../helpers/authentication';
//import Button from '../Button/Button';
import './NavBarComponent.css';

const NavBarComponent = () => {

	const { user, dispatch } = useContext(AuthContext);

	const [click, setClick] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [isSignedIn, setIsSignedIn] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const checkScrolled = () => {
		if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	window.addEventListener('scroll', checkScrolled, { passive: true });


	const handleLogin = async () => {
    await logOut().then(res =>{
      //console.log(res);
      dispatch({ type: 'REMOVE_USER', user: '' });
    })
    
  }

  const renderLoginButton = () => {
    if (! user ) {
      return(
        <li className="menu-item">
          <Link className="nav-menu-link" to="/Login">
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Log in</button>
          </Link>
        </li>
      ) 
    } else {
      return (
        <li className="menu-item">
          <Link className="nav-menu-link" to="" >
            <button onClick={handleLogin} className="btn btn-outline-primary my-2 my-sm-0" type="submit">Log out</button>
          </Link>
        </li>
      )
    }
  }

  const renderCreateAccountButton = () => {
    if (! user ) {
      return(
        <li className="menu-item">
          <Link className="nav-menu-link" to="/register">
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
        <li className="menu-item">
          <Link className="nav-menu-link" to="/">
            {`Hey, ${user.name}`}
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
        <li className="menu-item">
          <Link className="nav-menu-link" to="/dashboard">
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
		<>
			<div className={scrolled || click ? 'navbar navbar-coloured' : 'navbar'}>
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
					TECHNOCRATES
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<div className={click ? 'nav-menu active' : 'nav-menu'}>
						<ul>
							<li className="menu-item">
								<NavLink to="/jobs" className="nav-menu-link" onClick={closeMobileMenu}>
								Jobs
								</NavLink>
							</li>
							<li className="menu-item">
								<NavLink to="/seekers" className="nav-menu-link" onClick={closeMobileMenu}>
								Freelancers
								</NavLink>
							</li>
							<li className="menu-item">
								<NavLink to="" className="nav-menu-link" onClick={closeMobileMenu}>
								About us
								</NavLink>
							</li>
						</ul>
						<ul className="menu-button-section">
							
							{ renderGreeting() }
							{ renderDashboardButton() }
							{ renderLoginButton() }
							{ renderCreateAccountButton() }
							
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBarComponent;
