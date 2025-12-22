import { ActivityIndicator } from "react-native";

import { RootState } from '@/src/store';
import { AuthStatus } from "@/src/store/reducers/auth-reducer";
import { Redirect } from "expo-router";
import React from 'react';
import { useSelector } from 'react-redux';

interface AuthControllerProps {
  children: React.ReactNode;
}

export const AuthController: React.FC<AuthControllerProps> = ({ children }) => {
  const authStatus = useSelector((state: RootState) => state.auth.status);

  if(authStatus === AuthStatus.Loading) {
    return <ActivityIndicator />;
  }

  if(authStatus === AuthStatus.Unauthenticated) {
    return <Redirect href="/auth" />;
  }

  return children;
};
