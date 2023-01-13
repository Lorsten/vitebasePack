import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type authState = {
  isLoggedIn: boolean;
  language: string;
};

const initialStateAuth: authState = {
  isLoggedIn: false,
  language: 'sv',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});
export const { login } = authSlice.actions;

export default authSlice.reducer;
