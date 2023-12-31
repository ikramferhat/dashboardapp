import React from 'react';
import { styled } from '@mui/material/styles';

const SetionStyle = styled("div")(({ theme }) => ({
  padding: "15px",
  borderRadius: "15px",
  backgroundColor: theme.palette.background.default,
  boxShadow: "rgba(100, 100, 111, 0.2) 7px 0px 29px 0px",
  scrollMarginTop: '5.2rem'
}));

const Section = ({ children, id }) => {
  return (
    <SetionStyle id={id}>
      {children}
    </SetionStyle>
  )
}

export default Section;