import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import { LeftSidebar } from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')({
  flexGrow: 1,
  minHeight: '100vh',
  width: 'calc(100% - 230px)'
});

const Layout = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

   
  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
    if(!hamburgerOpen) {
      document.getElementsByTagName("body")[0].style.overflow = 'hidden';
      document.getElementsByTagName("body")[0].style.paddingRight = '15px';
    }else {
      document.getElementsByTagName("body")[0].style.overflow = 'auto';
      document.getElementsByTagName("body")[0].style.paddingRight = '0px';
    }
  }
  useEffect(() => {
    if(width >= breakpoint && hamburgerOpen) {
      setHamburgerOpen(false)
      document.getElementsByTagName("body")[0].style.overflow = 'auto';
      document.getElementsByTagName("body")[0].style.paddingRight = '0px';
    }
   }, [width]);

  return (
    <RootStyle>
      <LeftSidebar hamburgerOpen={hamburgerOpen} width={width} toggleHamburger={toggleHamburger} breakpoint={breakpoint} />
      <Navbar isOpen={hamburgerOpen} toggleHamburger={toggleHamburger} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  )
}

export default Layout;
