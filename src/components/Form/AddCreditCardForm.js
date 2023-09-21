import React from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { Box, TextField } from '@mui/material';
import Button from '../Buttons/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { OutlineInput, InputDate } from './Input';

const AddCreditCardForm = ({creditCardData}) => {
  const Schema = Yup.object().shape({
    CardNumber: Yup.string().required('Card number is required'),
    CardHolder: Yup.string().required('Card holder is required'),
    Cvv: Yup.string().required('CVV is required'),
    Date: Yup.date().required('Date is required').nullable()
  });

  const formik = useFormik({
    initialValues: {
      CardNumber: '',
      CardHolder: '',
      Cvv: '',
      Date: ''
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log('data', values);   
    }
  });

  const textStyle = {
    margin: 0,
    padding: 0,
    marginLeft: '10px',
    textTransform: 'capitalize',
    color: '#fc8181',
    fontSize: '9px',
    fontWeight: 400
  }

  const { errors, touched, values, isSubmitting, getFieldProps, setFieldValue } = formik;

  return (
    <Box>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
          <OutlineInput
            fullWidth
            placeholder="Card number"
            {...getFieldProps('CardNumber')}
            error={Boolean(touched.CardNumber && errors.CardNumber)}
            helperText={touched.CardNumber && errors.CardNumber}
          />
          <OutlineInput
            fullWidth
            placeholder="Card holder"
            {...getFieldProps('CardHolder')}
            error={Boolean(touched.CardHolder && errors.CardHolder)}
            helperText={touched.CardHolder && errors.CardHolder}
          />
          <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']} sx={{ p: 0 }}>
            <InputDate
              placeholder={'"month" and "year"'}
              views={['month', 'year']}
              {...getFieldProps('Date')}
              onChange={(value) => setFieldValue("Date", value, true)}
              slotProps={{
                textField: {
                    variant: "outlined",
                    error: Boolean(touched.Date && errors.Date),
                    helperText: touched.Date && errors.Date
                }
              }}
            />
          </DemoContainer>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <OutlineInput
              fullWidth
              placeholder="CVV"
              {...getFieldProps('Cvv')}
              error={Boolean(touched.Cvv && errors.Cvv)}
              helperText={touched.Cvv && errors.Cvv}
            />
            <p style={textStyle}>3 or 4 digits usually found on the signature strip</p>
          </Box>
          <div style={{margin: '30px 0px'}}>
            <Button type="submit" title="add" />
          </div>
        </Form>
      </FormikProvider>
    </Box>
  )
}

export default AddCreditCardForm;