import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, IconButton, Badge, Icon, Popover, Divider } from '@mui/material';
import { Notifications, Person, Logout, Settings } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Hamburger from '../Hamburger/Hamburger';
import person from '../../images/user2.png';
import Context from '../../Context';
import './style.css'

const MenuPopover = (props) => {
  return (
    <Popover
      open={props.onOpen}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      disableScrollLock={true}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          mt: 5,
          mr: 2,
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'rgba(100, 100, 111, 0.2) 7px 0px 29px 0px',
          width: 150,
        }
      }}
    >
      {props.children}
    </Popover>
  )
}

const MenuItem = styled("button")(({ theme }) =>({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  outline: '0px',
  border: '0px',
  margin: '2px 0px',
  cursor: 'pointer',
  padding: '10px 14px',
  borderRadius: "8px",
  boxSizing:'border-box',
  color: theme.palette.color.default,
  fontSize: 15,
  transition: 'all 0.1s ease-in',
  '& span':{
    textTransform: 'capitalize',
    marginLeft: 10
  },
  '&:hover':{
    backgroundColor: 'rgba(71, 191, 179, 0.2)',
    color: '#238f84'
  }
}));

const Navbar = ({ isOpen, toggleHamburger }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logOut = () => {
    setOpen(false);
    setUser(false);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div id="nav">
      <div className="navbar">
        <div className="hamb" onClick={toggleHamburger}>
          <Hamburger isOpen={isOpen}/>
        </div>
        <div className='logo'>
          <h3>financial-dashboard</h3>
        </div>
        <IconButton onClick={handleOpen} ref={anchorEl}>
          <Avatar alt="Remy Sharp" src={person} />
        </IconButton>
        <MenuPopover 
          onOpen={open}
          anchorEl={anchorEl.current}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Person />
            <span>account</span>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Settings />
            <span>settings</span>
          </MenuItem>
          <Divider sx={{ my: 1 }} />
          <MenuItem onClick={logOut}>
            <Logout />
            <span>logout</span>
          </MenuItem>
        </MenuPopover>
        <IconButton size="large">
          <Badge badgeContent={5} color="error">
            <Icon component={Notifications} width={15} height={15} color='grey' />
          </Badge>
        </IconButton>
      </div>
    </div>
  )
}

export default Navbar;