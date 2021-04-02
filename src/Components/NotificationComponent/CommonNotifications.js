import { Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext} from 'react';

const CommonNotifications = () => {
    const user = useContext(AuthContext);

    const welcomeNotification = () =>{
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile">
                  {`Hello, ${user.name},Welcome to Microjob Portal! `}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }
    }

    const profileUpdateNotification = () =>{
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile">
                  {`You have successfully updated your profile. Click here to see! `}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }

    }

    const chatNotification = () =>{
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile">
                  {`You have a new message from Nisuri. Click here to see! `}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }

    }

    return (  
        <div className="notification-item">
            { welcomeNotification() } 
            {profileUpdateNotification()}
            {chatNotification()}
        </div>
    );
}
 
export default CommonNotifications;