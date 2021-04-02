import CommonNotifications from './CommonNotifications';
import JobInvitationNotifications from './JobInvitationNotifications';
import JobPostNotification from './JobPostNotifications';
import AdvertismentNotifications from './AdvertismentNotifications';
import ReportNotifications from './ReportNotifications';
import './NotificationModal.scss';

const NotificationModal = () => {
    return ( 
        <div className="notifications"> 
            <ul className="notification-dropdown">
                <li className='notification-item'>{CommonNotifications()}</li>
                <li className='notification-item'>{ReportNotifications()}</li>
                <li className='notification-item'>{JobPostNotification()}</li>
                <li className='notification-item'>{JobInvitationNotifications()}</li>
                <li className='notification-item'>{AdvertismentNotifications()}</li>

        </ul>
        
        </div>
     );
}
 
export default NotificationModal;