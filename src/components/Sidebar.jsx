import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsBoxSeam,
  BsCollectionFill,
  BsPeopleFill,
  BsLayersFill,
  BsBarChartLineFill,
  BsGearFill,
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon' /> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'active-link' : ''
            }
            end
          >
            <BsGrid1X2Fill className='icon' /> Dashboard
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              isActive ? 'active-link' : ''
            }
          >
            <BsBoxSeam className='icon' /> Products
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink 
            to="/categories" 
            className={({ isActive }) => 
              isActive ? 'active-link' : ''
            }
          >
            <BsCollectionFill className='icon' /> Categories
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink 
            to="/customers" 
            className={({ isActive }) => 
              isActive ? 'active-link' : ''
            }
          >
            <BsPeopleFill className='icon' /> Customers
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink 
            to="/inventory" 
            className={({ isActive }) => 
              isActive ? 'active-link' : ''
            }
          >
            <BsLayersFill className='icon' /> Inventory
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink 
            to="/reports" 
            className={({ isActive }) => 
              isActive ? 'active-link' : ''
            }
          >
            <BsBarChartLineFill className='icon' /> Reports
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink 
            to="/settings" 
            className={({ isActive }) => 
              isActive ? 'active-link' : ''
            }
          >
            <BsGearFill className='icon' /> Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;