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
                <div className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <small className="text-muted">3 days ago</small>
                      </div>
                      <p className="mb-1"> Hello {`${user.name}`}, Welcome to the MicroJob Portal! </p>
                  </div>
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
                <div className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <small className="text-muted">3 days ago</small>
                      </div>
                      <p className="mb-1"> You have successfully updated your profile. Click here to see! </p>
                  </div>
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
                <div className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <small className="text-muted">3 days ago</small>
                      </div>
                      <p className="mb-1"> You have a new message from Nisuri. Click here to see! </p>
                  </div>
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