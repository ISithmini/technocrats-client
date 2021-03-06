import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { logOut } from "../../api/userApi/userApi";
import { checkAccess } from "../../helpers/authentication";
//import Button from '../Button/Button';
import './NavBarComponent.css';
import Button from '../Button/Button';
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import NotificationModal from '../NotificationComponent/NotificationModal';
import { MdNotifications, MdNotificationsActive} from "react-icons/md";
import { Badge } from 'reactstrap';

const NavBarComponent = () => {
  const { user, dispatch } = useContext(AuthContext);

  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const checkScrolled = () => {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", checkScrolled, { passive: true });

  const handleLogin = async () => {
    await logOut().then((res) => {
      //console.log(res);
      dispatch({ type: "REMOVE_USER", user: "" });
    });
  };

  const renderLoginButton = () => {
    if (!user) {
      return (
        <li className="menu-item" onClick={closeMobileMenu}>
          <Link className="nav-menu-link" to="/Login">
            <Button buttonType="outline">Log in</Button>
          </Link>
        </li>
      );
    } else {
      return (
        <li className="menu-item" onClick={handleLogin} >
          <Link className="nav-menu-link" to="" >
            <Button buttonType="outline">Log out</Button>
          </Link>
        </li>
      );
    }
  };

  const renderCreateAccountButton = () => {
    if (!user) {
      return (
        <li className="menu-item" onClick={closeMobileMenu}>
          <Link className="nav-menu-link" to="/register">
            <Button>Create Account</Button>
          </Link>
        </li>
      );
    } else {
      return <span></span>;
    }
  };

  const renderGreeting = () => {
    if (user) {
      return (
        <li className="menu-item" onClick={closeMobileMenu}>
          <Link className="nav-menu-link" to="/myprofile">
            <FaUserCircle />
          </Link>
        </li>
      );
    } else {
      return <span></span>;
    }
  };
  const renderChatIcon = () => {
    if (user) {
      return (
        <li className="menu-item" onClick={closeMobileMenu}>
          <Link className="nav-menu-link" to="/myChats">
            <AiFillMessage />
          </Link>
        </li>
      );
    } else {
      return <span></span>;
    }
  };

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (user && show) {
      document.addEventListener('mousedown', (event) => {
        if (!ref.current.contains(event.target))
          setShow(false);
      });
    } else {
      document.removeEventListener('mousedown', () => { });
    }
  }, [show]);

  const notificationClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const renderNotificationIcon = () => {
    if (user) {
      return (
        <li className="menu-item" onClick={closeMobileMenu}>
          <div ref={ref}>
            <Link className="nav-menu-link" onClick={notificationClick}>
            <MdNotificationsActive/> <Badge className="badge" color="danger">4</Badge>
            </Link>
            {show && (
              <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={30}
              >
                <Popover id="popover-contained">
                  <Popover.Title as="h2" className="notifications-title">
                    Notifications
                  </Popover.Title>
                  <Popover.Content>
                    <NotificationModal />
                  </Popover.Content>
                </Popover>
              </Overlay>
            )}
          </div>
        </li>
      );
    } else {
      return <span></span>;
    }
  };

  const renderDashboardButton = () => {
    if (checkAccess("P0001")) {
      return (
        <li className="menu-item" onClick={closeMobileMenu}>
          <Link className="nav-menu-link" to="/dashboard">
            <span type="submit">{`Dashboard`}</span>
          </Link>
        </li>
      );
    } else {
      return <span></span>;
    }
  };

  return (
    <div className="navbar-stick" >
      <div className={scrolled || click ? 'navbar navbar-coloured' : 'navbar'}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TECHNOCRATES
					</Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <ul className="menu-button-section">
              {/* <li className="menu-item">
								<NavLink to="/jobs" className="nav-menu-link" onClick={closeMobileMenu}>
								Jobs
								</NavLink>
							</li>
							<li className="menu-item">
								<NavLink to="/seekers" className="nav-menu-link" onClick={closeMobileMenu}>
								Freelancers
								</NavLink>
							</li> */}
              <li className="menu-item">
                <NavLink to="" className="nav-menu-link" onClick={closeMobileMenu}>
                  About us
								</NavLink>
              </li>

              {renderDashboardButton()}
              {renderGreeting()}
              {renderNotificationIcon()}
              {renderChatIcon()}
              {renderLoginButton()}
              {renderCreateAccountButton()}

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default NavBarComponent;