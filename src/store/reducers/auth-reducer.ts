import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum AuthStatus {
  Authenticated = 'authenticated',
  Unauthenticated = 'unauthenticated',
  Loading = 'loading',
}

interface AuthState {
  status: AuthStatus;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
}

const initialState: AuthState = {
  status: AuthStatus.Authenticated,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.status = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload;
    },
    login: (state, action: PayloadAction<{ id: string; name: string; email: string }>) => {
      state.status = AuthStatus.Authenticated;
      state.user = action.payload;
    },
    logout: (state) => {
      state.status = AuthStatus.Unauthenticated;
      state.user = null;
    },
  },
});

export const { setAuthStatus, setUser, login, logout } = authSlice.actions;
export default authSlice.reducer;

