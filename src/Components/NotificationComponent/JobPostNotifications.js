import { Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext} from 'react';
import { checkAccess } from '../../helpers/authentication';

const JobPostNotification = () => {
    const user = useContext(AuthContext);

    const jobPosted = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile/postedjobs">
                  {`Your job post has been sent for reveiw. Please wait for the confirmation `}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }
    }

    const jobPostSuccessfull = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile/postedjobs">
                  {`Your Job post has been posted successfully`}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }
    }

    const jobPostRemoved = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile/postedjobs">
                  {`Your Job post has been removed. Please contact the administration for more information`}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }
    }

    const jobPostToBeReviewed = () =>{
        if (checkAccess('P0001')) {
            return (
                <div className="notification-item">
                    <Link to="/dashboard">
                        {`A new job post is waiting to be reviewed `}
                    </Link>
                </div>
            )} else {
                return (
                    <span></span>
                )}
    }

    const jobApplicationSent = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile/appliedjobs">
                  {`Your Job Application has been sent successfully.`}
                </Link>
              </div>
            ) 
          } else {
            return (
              <span></span>
            )
          }
    }

    const jobApplicationReceived = () => {
        if ( user ) {
            return(
              <div className="notification-item">
                <Link to="/myprofile/postedjobs">
                  {`A new Job Application has been received.`}
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
         {jobPosted()}
         {jobPostToBeReviewed()}
         {jobPostSuccessfull()}
         {jobPostRemoved()}
         {jobApplicationSent()}
         {jobApplicationReceived()}
           
        </div>
        

     );
}
 
export default JobPostNotification ;