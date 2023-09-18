import React from 'react';
import { styled } from '@mui/material/styles';

const PageStyle = styled("div")(({ theme }) => ({
  padding: '10px 2px',
  width: "100%",
  height: "100%",
  margin: "120px auto",
  boxSizing: "border-box"
  })
);

const Page = ({ children }) => {
  return (
    <PageStyle>
      {children} 
    </PageStyle>
  )
}

export default Page;