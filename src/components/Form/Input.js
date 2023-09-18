import React from 'react';
import { TextField, Select, FilledInput } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';

  const OutlineInput = styled(TextField)({
    '&.MuiTextField-root': {
      margin: '10px 0px',
      '& .MuiOutlinedInput-root': {  
        '& fieldset': {           
          borderColor: 'lightgrey',
          borderRadius: 10,
        },
        '&:hover fieldset': {
          borderColor: '#35beb1', 
        },
        '&.Mui-focused fieldset': { 
          borderColor: '#35beb1',
        },
        },
      }
  });

  const SelectInput = styled(Select)({
    marginTop: '10px',
    borderRadius: 10,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: 'lightgrey',
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: '#35beb1'
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: '#35beb1'
    }
  });

  const FilledInputText = styled(TextField)({
    '& .MuiInputBase-root.MuiFilledInput-root': {
      marginBottom: '10px',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      '&:after': {
        borderColor: '#35beb1',
      },
      '&:before': {
        borderColor: 'lightgrey',
      },
      '&:hover': {
        '&:before': {
            borderColor: '#35beb1',
          },
      },
    }
  });

  const InputDate = styled(DatePicker)({
    '&.MuiTextField-root': {
      margin: '10px 0px',
      '& .MuiOutlinedInput-root': {  
        '& fieldset': {           
          borderColor: 'lightgrey',
          borderRadius: 10,
        },
        '&:hover fieldset': {
          borderColor: '#35beb1', 
        },
        '&.Mui-focused fieldset': { 
          borderColor: '#35beb1',
        },
      },
    }
  });

export {OutlineInput, SelectInput, FilledInputText, InputDate}