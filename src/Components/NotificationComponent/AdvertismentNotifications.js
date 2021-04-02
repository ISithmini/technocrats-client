import { Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext} from 'react';
import { checkAccess } from '../../helpers/authentication';

const AdvertismentNotifications = () => {

    const user = useContext(AuthContext);

    const advertismentPosted = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile/myads">
                  {`Your advertisment has been sent for review.Please wait for the confirmation `}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }


    }

    const advertismentSuccessfull = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile/myads">
                  {`Your advertisment has been posted successfully. Check it out `}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }


    }
    const advertismentRemoved = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile/myads">
                  {`Your advertisment has been removed. Please contact the administration for more information. `}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }


    }

    const advertismentsToBeReviewed = () =>{
        if (checkAccess('P0001')) {
            return (
                <div className="notification-item">
                    <Link to="/dashboard">
                        {`A new advertisment is waiting to be reviewed `}
                    </Link>
                </div>
            )} else {
                return (
                    <span></span>
                )}
    }




    return (

        <div className="notification-item">
           {advertismentPosted()}
           {advertismentsToBeReviewed()}
           {advertismentSuccessfull()}
           {advertismentRemoved()}
        </div>
      );
}
 
export default AdvertismentNotifications;
