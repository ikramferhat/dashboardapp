import React from 'react';
import { styled } from '@mui/material/styles';

const SetionStyle = styled("div")(({ theme }) => ({
  padding: "15px",
  borderRadius: "15px",
  backgroundColor: theme.palette.background.default,
  boxShadow: "rgba(100, 100, 111, 0.2) 7px 0px 29px 0px"
}));

const Section = ({ children }) => {
  return (
    <SetionStyle>
      {children}
    </SetionStyle>
  )
}

export default Section;