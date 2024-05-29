import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authFunc from "./authFunc";
// import setAuthToken from "../componenet/utils/SetAuthToken";
const initialState = {
  isLoading: false,
  isAuthenticate: false,
  isError: false,
  token: "",
  user: null,
  message: "",
  emailVerified: 0,
};
// Register user API call
// @function signUpUser
// @param {Object} Includes all the Form Data

export const signUpUser = createAsyncThunk(
  "auth/signupuser",
  async (formData, thunkAPI) => {
    try {
      return await authFunc.register(formData);
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Login user API call
// @function loginUser
// @param {Object} Includes Login Data
export const loginUser = createAsyncThunk(
  "auth/loginuser",
  async (formData, thunkAPI) => {
    try {
      return await authFunc.login(formData);
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Email verification after registration API call
// @function emailVerify
export const emailVerify = createAsyncThunk(
  "auth/emailverify",
  async (data, thunkAPI) => {
    try {
      return await authFunc.verifyEmail(data);
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Forget Password  API call
// @function forgetPassword
// @param {Object} includes email
export const forgetPassword = createAsyncThunk(
  "auth/forgetpassword",
  async (formData, thunkAPI) => {
    try {
      return await authFunc.forgetPass(formData);
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Change Password API call
// @function changePassword
// @param {Object} includes password and token
export const changePassword = createAsyncThunk(
  "auth/changepassword",
  async (formData, thunkAPI) => {
    try {
      return await authFunc.changePass(formData);
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Load user on start API call
// @function loadUser
export const loadUser = createAsyncThunk(
  "auth/loaduser",
  async (data, thunkAPI) => {
    try {
      return await authFunc.loadUser(data);
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Load user on start API call
// @function loadUser
export const emailVerifiedFunc = createAsyncThunk(
  "auth/emailverified",
  async (data, thunkAPI) => {
    try {
      return await authFunc.emailVerified(data);
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Log out user from panal and remove token
export const logOut = createAsyncThunk("auth/logout", async () => {
  return await authFunc.logOut();
});
export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isAuthenticate = false;
      state.token = "";
      state.message = "";
      state.isError = false;
      state.user = null;
    },
    resetRegister: (state) => {
      state.isLoading = false;
      state.isAuthenticate = false;
      state.token = "";
      state.message = "";
      state.isError = false;
    },
    resetLogin: (state) => {
      state.isLoading = false;
      state.isAuthenticate = false;
      state.token = "";
      state.message = "";
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder // User registration responses (fullfil, reject, pending)
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.user = action.payload;
        state.message = action.payload.message;
        state.isError = false;
        state.emailVerified = action.payload.email_verified;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.message = action.payload;
        state.isError = true;
        state.emailVerified = 0;
      }) // User Login responses (fullfil, reject, pending)
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = true;
        state.user = action.payload;
        state.token = action.payload.jwt;
        state.message = action.payload.message;
        state.emailVerified = action.payload.email_verified;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.message = action.payload;
        state.isError = true;
        state.emailVerified = 0;
      })
      // Load user on start responses (fullfil, reject, pending)
      .addCase(loadUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = true;
        state.isError = false;
        state.user = action.payload;
        state.emailVerified = action.payload.Data.email_verified;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.isError = true;
        state.emailVerified = 0;
      })
      // Email verification responses (fullfil, reject, pending)
      .addCase(emailVerify.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(emailVerify.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.isError = false;
        state.data = action.payload;
        state.message = action.payload.message;
        state.emailVerified = action.payload.email_verified;
      })
      .addCase(emailVerify.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.isError = true;
        state.message = action.payload.message;
        state.emailVerified = 0;
      })
      // Forget Password responses (fullfil, reject, pending)
      .addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.isError = false;
        state.user = action.payload;
        state.message = action.payload.message;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload || action.payload.message;
      })
      .addCase(emailVerifiedFunc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(emailVerifiedFunc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.isError = false;
        state.data = action.payload;
        state.message = action.payload.message;
        state.emailVerified = action.payload.email_verified;
      })
      .addCase(emailVerifiedFunc.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.isError = true;
        state.message = action.payload.message;
        state.emailVerified = 0;
      })
      // Change Password responses (fullfil, reject, pending)
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.isError = false;
        state.data = action.payload;
        state.message = action.payload.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      // Log out responses (fullfil, reject, pending)
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.isError = false;
        state.user = null;
        state.token = "";
        state.message = "";
        state.emailVerified = 0;
      });
  },
});

export const { reset, resetRegister, resetLogin } = authReducer.actions;
export default authReducer.reducer;
