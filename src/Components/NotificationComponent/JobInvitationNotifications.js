import { Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext} from 'react';

const JobInvitationNotifications = () => {
    const user = useContext(AuthContext);

    const jobInvitationSent = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile">
                  {`Your invitation t0, ${user.name} has been sent successfully. `}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }
    }

    const jobInvitationReceived = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile">
                  {`You have received a new Job invitation from ${user.name} `}
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
        {jobInvitationSent()}
        {jobInvitationReceived()}
           
        </div>
        

     );
}
 
export default JobInvitationNotifications;