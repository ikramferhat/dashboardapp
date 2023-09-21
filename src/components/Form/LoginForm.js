import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { Box, Checkbox, IconButton, InputAdornment, Icon } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '../Buttons/Button';
import { OutlineInput } from './Input';
import Context from '../../Context';

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  const Schema = Yup.object().shape({
    email: Yup.string().email().required('Email is required')
      .test('match', 'Verify your email', 
        function(email) { 
          return email === 'user@email.com'; 
        }),
    password: Yup.string().required('Password is required')
      .test('match', 'Verify your password', 
        function(password) { 
          return password === 'user123'; 
        }),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      checked: false
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log('data', values);
      setUser(true);
      localStorage.setItem("user", "isUser");
      navigate('/dashboard');
    }
  });

  const { errors, touched, values, getFieldProps } = formik;

  return (
    <Box sx={{ minHeight: 320 }}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
          <OutlineInput
            fullWidth
            placeholder="email"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <OutlineInput
            fullWidth
            placeholder="password"
            type={showPassword ? 'text' : 'password'}
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon component={showPassword ? Visibility : VisibilityOff} sx={{ color: '#35beb1' }} />
                  </IconButton>
                </InputAdornment>
            )}}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Checkbox
              checked={values.checked}
              {...getFieldProps('checked')}
              sx={{ color: '#35beb1', '&.Mui-checked': { color: '#35beb1' } }}
            />
            <p>Remember me</p>
          </Box>
          <div style={{margin: '30px 0px'}}>
            <Button type="submit" title="login" />
          </div>
        </Form>
      </FormikProvider>
    </Box>
  )
}

export default LoginForm;