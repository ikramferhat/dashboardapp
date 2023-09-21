import React, { useState } from 'react'
import { Container, Grid, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Container maxWidth="md">
        <Grid container alignItems='center' justifyContent='center' sx={{width: '100%', minHeight: '100vh'}}>
          <Box sx={{ textAlign: 'center' }}>
            <h1>404</h1>
            <h4>oops...page not found!</h4>
          </Box>
        </Grid>
      </Container>
  )
}

export default NotFound;
