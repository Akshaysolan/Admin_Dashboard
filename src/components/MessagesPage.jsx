import React from 'react';
import { BsFillEnvelopeFill, BsCheckAll, BsReply, BsTrash } from 'react-icons/bs';

function MessagesPage() {
  const messages = [
    { id: 1, sender: 'John Doe', text: 'About our meeting tomorrow...', time: '10 mins ago', read: false },
    { id: 2, sender: 'Support Team', text: 'Your ticket has been resolved', time: '2 hours ago', read: false },
    { id: 3, sender: 'Marketing', text: 'New campaign launch', time: '1 day ago', read: true },
    { id: 4, sender: 'Sarah Johnson', text: 'Product inquiry', time: '3 days ago', read: true },
    { id: 5, sender: 'Accounting', text: 'Invoice #12345', time: '1 week ago', read: true }
  ];

  const markAllAsRead = () => {
    alert('All messages marked as read');
  };

  return (
    <div className='page-container'>
      <div className='page-header'>
        <h2><BsFillEnvelopeFill /> Messages</h2>
        <button onClick={markAllAsRead} className='btn-mark-all'>
          <BsCheckAll /> Mark all as read
        </button>
      </div>
      
      <div className='messages-list'>
        {messages.map(message => (
          <div key={message.id} className={`message-item ${!message.read ? 'unread' : ''}`}>
            <div className="message-sender">{message.sender}</div>
            <div className="message-content">
              <p className="message-text">{message.text}</p>
              <p className="message-time">{message.time}</p>
            </div>
            <div className="message-actions">
              <button className='btn-reply' title="Reply">
                <BsReply />
              </button>
              <button className='btn-delete' title="Delete">
                <BsTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessagesPage;