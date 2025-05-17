import React, { useState } from 'react';
import { 
  BsGearFill, BsShop, BsTelephone, BsEnvelope, BsGeoAlt, BsClock,
  BsPalette, BsDisplay, BsBell, BsCreditCard, BsShieldLock,
  BsPeople, BsPersonPlus, BsPersonX, BsKey
} from 'react-icons/bs';

function Settings() {
  // Store Information
  const initialStoreData = {
    name: "My Awesome Shop",
    phone: "+1 (555) 123-4567",
    email: "contact@myawesomeshop.com",
    address: "123 Main St, Cityville, CA 90210",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed"
  };

  // Preferences
  const initialPreferences = {
    theme: "light",
    notifications: true,
    currency: "USD",
    timezone: "America/New_York"
  };

  // User Management
  const initialUsers = [
    { id: 1, name: "Admin User", email: "admin@shop.com", role: "Admin", lastActive: "Today" },
    { id: 2, name: "Manager", email: "manager@shop.com", role: "Manager", lastActive: "2 days ago" },
    { id: 3, name: "Sales Rep", email: "sales@shop.com", role: "Staff", lastActive: "1 week ago" }
  ];

  const [storeData, setStoreData] = useState(initialStoreData);
  const [preferences, setPreferences] = useState(initialPreferences);
  const [users, setUsers] = useState(initialUsers);
  const [isEditing, setIsEditing] = useState({ store: false, preferences: false });
  const [tempData, setTempData] = useState({ ...initialStoreData });
  const [tempPreferences, setTempPreferences] = useState({ ...initialPreferences });
  const [activeTab, setActiveTab] = useState('store');

  // Store Information Functions
  const generateRandomData = () => {
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
    const streets = ["Main St", "Oak Ave", "Pine Rd", "Maple Blvd", "Cedar Ln"];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const randomZip = Math.floor(10000 + Math.random() * 90000);

    const newData = {
      name: `The ${["Amazing", "Fantastic", "Super", "Ultimate"][Math.floor(Math.random() * 4)]} Store`,
      phone: `+1 (${Math.floor(200 + Math.random() * 800)}) ${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
      email: `info@${["best", "cool", "great", "awesome"][Math.floor(Math.random() * 4)]}shop.com`,
      address: `${Math.floor(100 + Math.random() * 900)} ${randomStreet}, ${randomCity}, ${["CA", "NY", "TX", "FL"][Math.floor(Math.random() * 4)]} ${randomZip}`,
      hours: `${["Mon-Fri", "Mon-Sat"][Math.floor(Math.random() * 2)]}: ${Math.floor(8 + Math.random() * 3)}AM-${Math.floor(5 + Math.random() * 4)}PM`
    };

    setStoreData(newData);
  };

  const handleEdit = (section) => {
    if (section === 'store') {
      setTempData({ ...storeData });
    } else if (section === 'preferences') {
      setTempPreferences({ ...preferences });
    }
    setIsEditing({ ...isEditing, [section]: true });
  };

  const handleSave = (section) => {
    if (section === 'store') {
      setStoreData({ ...tempData });
    } else if (section === 'preferences') {
      setPreferences({ ...tempPreferences });
    }
    setIsEditing({ ...isEditing, [section]: false });
  };

  const handleCancel = (section) => {
    setIsEditing({ ...isEditing, [section]: false });
  };

  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;
    if (section === 'store') {
      setTempData(prev => ({ ...prev, [name]: value }));
    } else if (section === 'preferences') {
      setTempPreferences(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  // User Management Functions
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const resetPassword = (id) => {
    alert(`Password reset initiated for user ${id}`);
    // In a real app, you would call an API here
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>STORE SETTINGS</h3>
        <BsGearFill className='settings-icon' />
      </div>

      <div className='settings-tabs'>
        <button 
          className={`tab-btn ${activeTab === 'store' ? 'active' : ''}`}
          onClick={() => setActiveTab('store')}
        >
          <BsShop /> Store Information
        </button>
        <button 
          className={`tab-btn ${activeTab === 'preferences' ? 'active' : ''}`}
          onClick={() => setActiveTab('preferences')}
        >
          <BsPalette /> Preferences
        </button>
        <button 
          className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <BsPeople /> User Management
        </button>
      </div>

      <div className='settings-container'>
        {/* Store Information Tab */}
        {activeTab === 'store' && (
          <div className='settings-section'>
            <div className='settings-header'>
              <h4><BsShop /> Store Information</h4>
              {!isEditing.store && (
                <div className='settings-actions'>
                  <button onClick={() => handleEdit('store')} className='btn-edit'>Edit</button>
                  <button onClick={generateRandomData} className='btn-random'>Generate Random</button>
                </div>
              )}
            </div>

            {isEditing.store ? (
              <div className='settings-form'>
                <div className='form-group'>
                  <label>Store Name</label>
                  <input
                    type="text"
                    name="name"
                    value={tempData.name}
                    onChange={(e) => handleChange(e, 'store')}
                  />
                </div>
                <div className='form-group'>
                  <label><BsTelephone /> Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={tempData.phone}
                    onChange={(e) => handleChange(e, 'store')}
                  />
                </div>
                <div className='form-group'>
                  <label><BsEnvelope /> Email</label>
                  <input
                    type="email"
                    name="email"
                    value={tempData.email}
                    onChange={(e) => handleChange(e, 'store')}
                  />
                </div>
                <div className='form-group'>
                  <label><BsGeoAlt /> Address</label>
                  <textarea
                    name="address"
                    value={tempData.address}
                    onChange={(e) => handleChange(e, 'store')}
                    rows="3"
                  />
                </div>
                <div className='form-group'>
                  <label><BsClock /> Business Hours</label>
                  <textarea
                    name="hours"
                    value={tempData.hours}
                    onChange={(e) => handleChange(e, 'store')}
                    rows="2"
                  />
                </div>
                <div className='form-actions'>
                  <button onClick={() => handleSave('store')} className='btn-save'>Save</button>
                  <button onClick={() => handleCancel('store')} className='btn-cancel'>Cancel</button>
                </div>
              </div>
            ) : (
              <div className='settings-display'>
                <div className='info-item'>
                  <h5>Store Name</h5>
                  <p>{storeData.name}</p>
                </div>
                <div className='info-item'>
                  <h5><BsTelephone /> Phone</h5>
                  <p>{storeData.phone}</p>
                </div>
                <div className='info-item'>
                  <h5><BsEnvelope /> Email</h5>
                  <p>{storeData.email}</p>
                </div>
                <div className='info-item'>
                  <h5><BsGeoAlt /> Address</h5>
                  <p>{storeData.address}</p>
                </div>
                <div className='info-item'>
                  <h5><BsClock /> Business Hours</h5>
                  <p>{storeData.hours}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <div className='settings-section'>
            <div className='settings-header'>
              <h4><BsPalette /> Preferences</h4>
              {!isEditing.preferences && (
                <button onClick={() => handleEdit('preferences')} className='btn-edit'>Edit</button>
              )}
            </div>

            {isEditing.preferences ? (
              <div className='settings-form'>
                <div className='form-group'>
                  <label><BsDisplay /> Theme</label>
                  <select
                    name="theme"
                    value={tempPreferences.theme}
                    onChange={(e) => handleChange(e, 'preferences')}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System Default</option>
                  </select>
                </div>
                <div className='form-group checkbox-group'>
                  <label>
                    <input
                      type="checkbox"
                      name="notifications"
                      checked={tempPreferences.notifications}
                      onChange={(e) => handleChange(e, 'preferences')}
                    />
                    <BsBell /> Email Notifications
                  </label>
                </div>
                <div className='form-group'>
                  <label><BsCreditCard /> Currency</label>
                  <select
                    name="currency"
                    value={tempPreferences.currency}
                    onChange={(e) => handleChange(e, 'preferences')}
                  >
                    <option value="USD">US Dollar ($)</option>
                    <option value="EUR">Euro (€)</option>
                    <option value="GBP">British Pound (£)</option>
                    <option value="JPY">Japanese Yen (¥)</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label><BsClock /> Timezone</label>
                  <select
                    name="timezone"
                    value={tempPreferences.timezone}
                    onChange={(e) => handleChange(e, 'preferences')}
                  >
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  </select>
                </div>
                <div className='form-actions'>
                  <button onClick={() => handleSave('preferences')} className='btn-save'>Save</button>
                  <button onClick={() => handleCancel('preferences')} className='btn-cancel'>Cancel</button>
                </div>
              </div>
            ) : (
              <div className='settings-display'>
                <div className='info-item'>
                  <h5><BsDisplay /> Theme</h5>
                  <p>{preferences.theme.charAt(0).toUpperCase() + preferences.theme.slice(1)}</p>
                </div>
                <div className='info-item'>
                  <h5><BsBell /> Notifications</h5>
                  <p>{preferences.notifications ? "Enabled" : "Disabled"}</p>
                </div>
                <div className='info-item'>
                  <h5><BsCreditCard /> Currency</h5>
                  <p>
                    {preferences.currency === 'USD' && 'US Dollar ($)'}
                    {preferences.currency === 'EUR' && 'Euro (€)'}
                    {preferences.currency === 'GBP' && 'British Pound (£)'}
                    {preferences.currency === 'JPY' && 'Japanese Yen (¥)'}
                  </p>
                </div>
                <div className='info-item'>
                  <h5><BsClock /> Timezone</h5>
                  <p>
                    {preferences.timezone === 'America/New_York' && 'Eastern Time (ET)'}
                    {preferences.timezone === 'America/Chicago' && 'Central Time (CT)'}
                    {preferences.timezone === 'America/Denver' && 'Mountain Time (MT)'}
                    {preferences.timezone === 'America/Los_Angeles' && 'Pacific Time (PT)'}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <div className='settings-section'>
            <div className='settings-header'>
              <h4><BsPeople /> User Management</h4>
              <button className='btn-add-user'>
                <BsPersonPlus /> Add User
              </button>
            </div>

            <div className='users-table'>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Last Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td><span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span></td>
                      <td>{user.lastActive}</td>
                      <td className='actions'>
                        <button 
                          className='btn-reset'
                          onClick={() => resetPassword(user.id)}
                          title="Reset Password"
                        >
                          <BsKey />
                        </button>
                        <button 
                          className='btn-delete'
                          onClick={() => deleteUser(user.id)}
                          title="Delete User"
                        >
                          <BsPersonX />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Settings;