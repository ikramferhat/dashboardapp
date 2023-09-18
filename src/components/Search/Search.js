import React from 'react'
import { OutlinedInput,IconButton, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Search } from '@mui/icons-material'
import './style.css';

const InputSearch = ({value, changeFunc, withShadow, startIcon, endIcon}) => {

  const Input = styled(OutlinedInput)({
    '&.MuiOutlinedInput-root': {
        flex: 1,
        width: "100%",
        borderRadius: 10,
        boxShadow: `${withShadow && 'rgba(100, 100, 111, 0.2) 7px 0px 29px 0px'}`,
        '& fieldset': {
            borderColor: 'lightgray',
            borderRadius: 10,
          },
          '&:hover fieldset': {
            borderColor: '#35beb1'
          },
          '&.Mui-focused fieldset': {
            borderColor: '#35beb1'
          }
    }
  });
  return (
    <Input
      value={value}
      onChange={changeFunc}
      placeholder='Search...'
      startAdornment={
       startIcon && 
         <IconButton edge="start">
           <Icon component={Search} style={{color: 'grey'}} />
         </IconButton>
      }
      endAdornment={
        endIcon &&
          <IconButton edge="end">
            <Icon component={Search} style={{color: 'grey'}} />
          </IconButton>
      }
    />
  )
}

export default InputSearch;