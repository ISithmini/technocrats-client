import CommonNotifications from './CommonNotifications';
import JobInvitationNotifications from './JobInvitationNotifications';
import JobPostNotification from './JobPostNotifications';
import AdvertismentNotifications from './AdvertismentNotifications';
import ReportNotifications from './ReportNotifications';
import './NotificationModal.scss';

const NotificationModal = () => {
    return ( 
        <div className="notifications"> 
            <div className="notification-item">
                {CommonNotifications()}
                {JobPostNotification()}
        </div>
        
        </div>
     );
}
 
export default NotificationModal;