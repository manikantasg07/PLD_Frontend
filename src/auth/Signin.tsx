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
// import { useAuth } from "../contexts/user";
import { useAppDispatch,useAppSelector } from "../store/hooks";
import { signInThunk } from "../store/users/authSlice";

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
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


  interface LoginInput {
    username: string;
    password: string;
  }
  

export default function Sigin(){
    const {register,handleSubmit,watch,formState: { errors },} = useForm<LoginInput>();
    const navigate = useNavigate();
    // const userContext = useAuth()
    const dispatch = useAppDispatch()
    const auth=useAppSelector((state)=>state.user)
    const submitForm=async(info:LoginInput)=>{
      const result = await dispatch(signInThunk(info));
      if(result.type==="authSlice/signin/fulfilled"){
        navigate("/app");
        toast.success("Welcome");
      }
      else if(result.type==="authSlice/signin/rejected"){
          toast.error(result.payload || "Sign In failed")
      }
      
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
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <TextField
                  
                        {...register("username",{
                            required:"true"
                        })}
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={errors.username ? 'error' : 'primary'}
                    />
                    </FormControl>
                    <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <TextField
      
                        type="password"
                        {...register("password",{
                            required:"true"
                        })}
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={errors.password ? 'error' : 'primary'}
                    />
                    </FormControl>
                    {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    >
                    Sign in
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
                        href="/signup"
                        variant="body2"
                        sx={{ alignSelf: 'center' }}
                    >
                        Sign Up
                    </Link>
                    </Typography>
                </Box>
                </Card>
            </SignInContainer>
        </>
    )
}