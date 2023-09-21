import React, { useContext } from 'react';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Context from '../Context';

const PinkSwitch = styled(Switch)(({ bgcolor }) => ({
    opacity: 1,
    '& .MuiSwitch-track': {
      backgroundColor: '#ffc107',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'white',
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: bgcolor
    }
}));

const Toggle = styled('div')({
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: 'max-content',
    padding: '3px',
    borderRadius: '15px',
    backgroundColor: '#363642',
    boxShadow: 'rgba(100, 100, 111, 0.5) 7px 0px 29px 0px'
});

const SwitchTheme = () => {
  const {isLightTheme, setIsLightTheme} = useContext(Context);
  
  const toggleTheme = () => {
    console.log('theme==>', isLightTheme);
    setIsLightTheme(!isLightTheme);
    if (!isLightTheme) {
      localStorage.setItem("theme", "light");
      document.body.setAttribute('style', 'background: #f7fafc');
    } else {
      localStorage.setItem("theme", "dark");
      document.body.setAttribute('style', 'background: #363642');
    }
  }
  return (
    <Toggle>
      <WbSunnyIcon sx={{color: '#ffc107', fontSize: 25}} />
      <PinkSwitch
        size='medium'
        checked={!isLightTheme}
        onChange={toggleTheme}
        bgcolor={ isLightTheme ? '#fad155' : 'white' }
      />
      <ModeNightIcon sx={{color: 'white', fontSize: 25}} />
    </Toggle>
  )
}

export default SwitchTheme;