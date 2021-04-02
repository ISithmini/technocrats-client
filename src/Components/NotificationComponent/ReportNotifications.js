import { Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext} from 'react';
import { checkAccess } from '../../helpers/authentication';

const ReportNotifications = () => {

    const user = useContext(AuthContext);

    const reportSuccessfull = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/">
                  {`Your report has been submitted for review. Thank you for your support `}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }


    }

    const reportToBeReviewed = () =>{
        if (checkAccess('P0001')) {
            return (
                <div className="notification-item">
                    <Link to="/dashboard">
                        {`A new Report has been recieved and waiting to be reviewed `}
                    </Link>
                </div>
            )} else {
                return (
                    <span></span>
                )}
    }




    return (

        <div className="notification-item">
           {reportSuccessfull()}
           {reportToBeReviewed()}
        </div>
      );
}
 
export default ReportNotifications;
