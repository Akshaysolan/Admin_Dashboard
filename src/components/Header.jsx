import React, { useState } from 'react';
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsChevronDown
} from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [unreadMessages, setUnreadMessages] = useState(5);

  // Sample data
  const notifications = [
    { id: 1, text: 'New order received', time: '2 mins ago', read: false },
    { id: 2, text: 'Inventory low on Product X', time: '1 hour ago', read: false },
    { id: 3, text: 'System update available', time: '5 hours ago', read: true }
  ];

  const messages = [
    { id: 1, sender: 'John Doe', text: 'About our meeting tomorrow...', time: '10 mins ago', read: false },
    { id: 2, sender: 'Support Team', text: 'Your ticket has been resolved', time: '2 hours ago', read: false },
    { id: 3, sender: 'Marketing', text: 'New campaign launch', time: '1 day ago', read: true }
  ];

  const markAllAsRead = (type) => {
    if (type === 'notifications') {
      setUnreadNotifications(0);
    } else if (type === 'messages') {
      setUnreadMessages(0);
    }
  };

  return (
    <div className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
        <input type="text" placeholder="Search..." />
      </div>
      <div className='header-right'>
        {/* Notifications */}
        <div className="header-icon-container" onClick={() => {
          setShowNotifications(!showNotifications);
          setShowMessages(false);
          setShowProfile(false);
        }}>
          <div className="icon-wrapper">
            <BsFillBellFill className='icon' />
            {unreadNotifications > 0 && (
              <span className="notification-badge">{unreadNotifications}</span>
            )}
          </div>
          {showNotifications && (
            <div className="dropdown-menu notifications-dropdown">
              <div className="dropdown-header">
                <h4>Notifications</h4>
                <button onClick={() => markAllAsRead('notifications')}>Mark all as read</button>
              </div>
              <div className="dropdown-content">
                {notifications.map(notification => (
                  <div key={notification.id} className={`notification-item ${!notification.read ? 'unread' : ''}`}>
                    <div className="notification-text">{notification.text}</div>
                    <div className="notification-time">{notification.time}</div>
                  </div>
                ))}
              </div>
              <div className="dropdown-footer">
                <a href="/notifications">View all notifications</a>
              </div>
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="header-icon-container" onClick={() => {
          setShowMessages(!showMessages);
          setShowNotifications(false);
          setShowProfile(false);
        }}>
          <div className="icon-wrapper">
            <BsFillEnvelopeFill className='icon' />
            {unreadMessages > 0 && (
              <span className="notification-badge">{unreadMessages}</span>
            )}
          </div>
          {showMessages && (
            <div className="dropdown-menu messages-dropdown">
              <div className="dropdown-header">
                <h4>Messages</h4>
                <button onClick={() => markAllAsRead('messages')}>Mark all as read</button>
              </div>
              <div className="dropdown-content">
                {messages.map(message => (
                  <div key={message.id} className={`message-item ${!message.read ? 'unread' : ''}`}>
                    <div className="message-sender">{message.sender}</div>
                    <div className="message-text">{message.text}</div>
                    <div className="message-time">{message.time}</div>
                  </div>
                ))}
              </div>
              <div className="dropdown-footer">
                <a href="/messages">View all messages</a>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="header-icon-container" onClick={() => {
          setShowProfile(!showProfile);
          setShowNotifications(false);
          setShowMessages(false);
        }}>
          <div className="profile-wrapper">
            <BsPersonCircle className='icon profile-icon' />
            <span className="profile-name">Admin</span>
            <BsChevronDown className={`chevron ${showProfile ? 'rotate' : ''}`} />
          </div>
          {showProfile && (
            <div className="dropdown-menu profile-dropdown">
              <div className="profile-info">
                <BsPersonCircle className='large-profile-icon' />
                <div className="profile-details">
                  <div className="profile-name">Admin User</div>
                  <div className="profile-email">admin@example.com</div>
                </div>
              </div>
              <div className="dropdown-content">
                <a href="/profile">
                  <i className="icon-user"></i> My Profile
                </a>
                <a href="/settings">
                  <i className="icon-settings"></i> Settings
                </a>
                <a href="/logout">
                  <i className="icon-logout"></i> Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;