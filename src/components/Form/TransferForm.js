import React from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { Box, Icon } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import PaymentIcon from '@mui/icons-material/Payment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Button from '../Buttons/Button';
import { SelectInput, FilledInputText, OutlineInput } from './Input';

const TransferForm = ({creditCardData}) => {
  const Schema = Yup.object().shape({
    amount: Yup.string().required('Amount is required'),
    payment: Yup.string().required('Payment receiver is required')
  });

  const formik = useFormik({
    initialValues: {
      amount: '',
      payment: '',
      creditCard: creditCardData[0].cardNumber
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log('data', values);   
    }
  });

  const { errors, touched, values, isSubmitting, getFieldProps, setFieldValue } = formik;

  return (
    <Box>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        <SelectInput
          id="outlined-select-credit-card"
          fullWidth
          MenuProps={{
            disableScrollLock: true,
          }}
          defaultValue={creditCardData[0].cardNumber}
          startAdornment={
            <Icon component={PaymentIcon} sx={{mr: 2}} style={{ color: '#35beb1' }} />
          }
          {...getFieldProps('creditCard')}
        >
          {creditCardData.map((option) => (
            <MenuItem color='lightgrey' key={option.cardNumber} value={option.cardNumber}>
              **** **** **** {option.cardNumber.slice(-4)}
            </MenuItem>
          ))}
        </SelectInput>
        <OutlineInput
          fullWidth
          placeholder="Payment receiver (credit card number)"
          {...getFieldProps('payment')}
          error={Boolean(touched.payment && errors.payment)}
          helperText={touched.payment && errors.payment}
        />
        <FilledInputText
          fullWidth
          placeholder="Amount"
          variant="filled"
          InputProps={{
            startAdornment: <Icon component={AttachMoneyIcon} sx={{mr: 2, mt: 1.5}} style={{ color: '#35beb1' }} />
          }}
          {...getFieldProps('amount')}
          error={Boolean(touched.amount && errors.amount)}
          helperText={touched.amount && errors.amount}
        />
        <div style={{margin: '30px 0px'}}>
          <Button type="submit" title="transfer money" />
        </div>
        </Form>
      </FormikProvider>
    </Box>
  )
}

export default TransferForm;