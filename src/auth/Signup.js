import React from "react";
import { useState } from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/user";
import { Link as RouterLink} from "react-router-dom";




const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    overflow:"scroll",
    msOverflowStyle:"auto",
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '450px',
    },
    boxShadow:
      'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
      boxShadow:
        'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
  }));


  const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      backgroundImage:
        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
      backgroundRepeat: 'no-repeat',
      ...theme.applyStyles('dark', {
        backgroundImage:
          'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
      }),
    },
  }));


export default function Sigup(){

    const {register,handleSubmit,watch,formState: { errors },} = useForm();
    const navigate = useNavigate();
    const userContext = useAuth()
    const submitForm=async(info)=>{
        // try {
        //     const data = await axios.post(process.env.REACT_APP_BACKEND_URL+"/users/signup",info,{ withCredentials: true } )
        //     navigate("/dashboard");
            
        // } catch (error) {
        //     console.log(error);
        //     if(error.response){
        //         toast.error(error.response.data)
        //     }
            
        // }
        await userContext.signup(info);
    }
    return(
        <>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(submitForm)}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="firstname">First Name</FormLabel>
              <TextField
                error={errors.firstname}
                {...register("firstname",{
                    required:"First name is Required"
                })}
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={errors.firstname ? 'error' : 'primary'}
              />
              {errors.firstname && <p style={{color:"red"}}>{errors.firstname.message}</p>}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastname">Last Name</FormLabel>
              <TextField
                error={errors.lastname}
                {...register("lastname",{
                    required:"Lastname is Required"
                })}
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={errors.lastname ? 'error' : 'primary'}
              />
              {errors.lastname && <p style={{color:"red"}}>{errors.lastname.message}</p>}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
              type="email"
                error={errors.email}
                {...register("email",{
                    required:"Email is Required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                })}
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={errors.email ? 'error' : 'primary'}
              />
              {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <TextField
                error={errors.username}
                {...register("username",{
                    required:"Username is Required"
                })}
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={errors.username ? 'error' : 'primary'}
              />
              {errors.username && <p style={{color:"red"}}>{errors.username.message}</p>}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={errors.password}
                type="password"
                {...register("password",{
                    required:"password is Required",
                    validate: {
                        minLength: (value) =>
                          value.length >= 7 || "Must be 7 or more characters long",
                        uppercase: (value) =>
                          /[A-Z]/.test(value) || "Must include at least one uppercase letter",
                        number: (value) =>
                          /[0-9]/.test(value) || "Must include at least one number",
                        specialChar: (value) =>
                          /[@$!%*?&#]/.test(value) ||
                          "Must include at least one special character",
                      },
                })}
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={errors.password ? 'error' : 'primary'}
              />
              {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="confirm password">Confirm Password</FormLabel>
              <TextField
                error={errors.confirmPassword}
                type="password"
                {...register("confirmPassword",{
                    required:"Confirn the Password",
                    validate:(value,{ password })=>{
                        return value === password || "Passwords do not match"
                    }
                })}
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={errors.confirmPassword ? 'error' : 'primary'}
              />
              {errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword.message}</p>}
            </FormControl>
            {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Sign Up
            </Button>
            {/* <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Forgot your password?
            </Link> */}
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center' }}>
              Don&apos;t have an account?{' '}
              <Link
                href="/signin"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign In
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
        </>
    )
}