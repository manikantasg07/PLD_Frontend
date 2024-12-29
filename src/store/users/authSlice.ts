import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  isSuccess: boolean;
}

interface LoginInput {
    username: string;
    password: string;
}

interface SignupInput{
  firstname: string,
  lastname: string,
  email: string,
  username: string,
  password: string,
  confirmPassword:string
}
  

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  error: null,
  isSuccess: false,
};

const signInThunk = createAsyncThunk(
  "authSlice/signin",
  async (data:LoginInput, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/signin`,
        data,
        { withCredentials: true }
      );
      return response.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Sign-in failed"
      );
    }
  }
);

const signUpThunk = createAsyncThunk(
  "authSlice/signup",
  async (data:SignupInput , thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
        data,
        { withCredentials: true }
      );
      return response.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Sign-up failed"
      );
    }
  }
);

const logoutThunk=createAsyncThunk(
  "authSlice/logout",
  async(thunkAPI)=>{
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/logout`,{withCredentials:true})
    return
  }
)

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error =  (action.payload as string) || "An error occurred";
      })
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error =  (action.payload as string) || "An error occurred";
      })
      .addCase(logoutThunk.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(logoutThunk.fulfilled,(state)=>{
        state.isLoading=false
        state.user=null
        state.isLoggedIn=false
        state.isSuccess=true
      })
      .addCase(logoutThunk.rejected,(state)=>{
          state.isError=true
          state.isLoading=false
      })
  },
});

export default authSlice.reducer;
export { signInThunk, signUpThunk,logoutThunk };
