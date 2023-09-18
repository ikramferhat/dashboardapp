import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dashboard, BarChart, CurrencyExchange, CreditCard } from '@mui/icons-material';
import { Icon, Divider, Box, Avatar } from '@mui/material';
import SwitchTheme from '../SwitchTheme';
import person from '../../images/user2.png';
import './style.css';

const menu = [
  {
    name: 'overview',
    path: '/dashboard',
    iconName: Dashboard
  },
  {
    name: 'statistics',
    path: '/dashboard/statistics',
    iconName: BarChart
  },
  {
    name: 'cards',
    path: '/dashboard/cards',
    iconName: CreditCard
  },
  {
    name: 'transactions',
    path: '/dashboard/transactions',
    iconName: CurrencyExchange
  }
]

const LeftSidebar = ({ hamburgerOpen, toggleHamburger, width, breakpoint }) => {
  return (
    <div id="sid">
      {width <= breakpoint && hamburgerOpen &&
        <div className="sidebarOverlay" onClick={()=> {toggleHamburger()}}/>
      }
      <div
        className="sidebar left"
        style={{
          transform: width > breakpoint  ? 'translateX(0%)' :
          hamburgerOpen ? 'translateX(0)' :  'translateX(-100%)'
        }}
      >
        <div className='account-container'>
          <Avatar  alt="user" src={person} />
          <h3>user@email.com</h3>
        </div>
        <div className='liste'>
          {menu.map((item, i) => {
            return (
              <NavLink end to={item.path} activeClassName="active">
                <Icon component={item.iconName} />
                <p>{item.name}</p>
              </NavLink>
            )
          })}
        </div>
        <Divider sx={{ m: 1 }} />
        <Box sx={{ p: '10px', pb: '100px'}}>
          <SwitchTheme />
        </Box>
      </div>
    </div>
  )
}

export default LeftSidebar;