import React from 'react';
import { BsFillBellFill, BsCheckAll } from 'react-icons/bs';

function NotificationsPage() {
  const notifications = [
    { id: 1, text: 'New order received', time: '2 mins ago', read: false },
    { id: 2, text: 'Inventory low on Product X', time: '1 hour ago', read: false },
    { id: 3, text: 'System update available', time: '5 hours ago', read: true },
    { id: 4, text: 'New customer registered', time: '1 day ago', read: true },
    { id: 5, text: 'Weekly sales report ready', time: '2 days ago', read: true }
  ];

  const markAllAsRead = () => {
    alert('All notifications marked as read');
  };

  return (
    <div className='page-container'>
      <div className='page-header'>
        <h2><BsFillBellFill /> Notifications</h2>
        <button onClick={markAllAsRead} className='btn-mark-all'>
          <BsCheckAll /> Mark all as read
        </button>
      </div>
      
      <div className='notifications-list'>
        {notifications.map(notification => (
          <div key={notification.id} className={`notification-item ${!notification.read ? 'unread' : ''}`}>
            <div className="notification-content">
              <p className="notification-text">{notification.text}</p>
              <p className="notification-time">{notification.time}</p>
            </div>
            {!notification.read && <div className="unread-dot"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsPage;