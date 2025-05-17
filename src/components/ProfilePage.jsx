import React, { useState } from 'react';
import { BsPersonCircle, BsGear, BsBoxArrowRight, BsPencil } from 'react-icons/bs';

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '+1 (555) 123-4567',
    position: 'Administrator',
    joinDate: 'January 15, 2022'
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className='page-container'>
      <div className='profile-header'>
        <div className='profile-avatar'>
          <BsPersonCircle className='avatar-icon' />
          <button onClick={handleEdit} className='btn-edit-profile'>
            <BsPencil /> {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
        <h2>My Profile</h2>
      </div>

      <div className='profile-details'>
        <div className='detail-item'>
          <label>Full Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.name}</p>
          )}
        </div>
        <div className='detail-item'>
          <label>Email</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.email}</p>
          )}
        </div>
        <div className='detail-item'>
          <label>Phone</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.phone}</p>
          )}
        </div>
        <div className='detail-item'>
          <label>Position</label>
          <p>{profile.position}</p>
        </div>
        <div className='detail-item'>
          <label>Member Since</label>
          <p>{profile.joinDate}</p>
        </div>
      </div>

      {isEditing && (
        <div className='profile-actions'>
          <button className='btn-save'>Save Changes</button>
        </div>
      )}

      <div className='profile-footer'>
        <a href="/settings" className='btn-settings'>
          <BsGear /> Account Settings
        </a>
        <a href="/logout" className='btn-logout'>
          <BsBoxArrowRight /> Logout
        </a>
      </div>
    </div>
  );
}

export default ProfilePage;