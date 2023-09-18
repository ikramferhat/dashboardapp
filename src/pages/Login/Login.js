import React, { useState, useRef } from 'react'
import {
  Container,
  Grid,
  IconButton,
  Popover,
} from '@mui/material';
import { Settings } from '@mui/icons-material';
import { LoginForm } from '../../components/Form';
import { Section } from '../../components/Page';
import SwitchTheme from '../../components/SwitchTheme';
import './style.css';

const Login = () => {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="login">
      <Container maxWidth="sm">
        <Grid item xs={12} md={12} lg={8} sx={{p: 2}}>
          <Section>
            <div className='title'>
              <h3>login</h3>
              <h5>You can use <span>user@email.com</span> and password <span>user123</span></h5>
            </div>
            <LoginForm />
          </Section>
        </Grid>
      </Container>
      <IconButton
        sx={{ position: 'fixed', top: 10, right: 10 }}
        onClick={handleOpen}
        ref={anchorEl}
      >
        <Settings sx={{ color: '#47C4B8'}} />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            p: 2,
            borderRadius: 5,
            backgroundColor: 'transparent'
          }
        }}
      >
        <SwitchTheme />
      </Popover>
    </div>
  )
}

export default Login;
