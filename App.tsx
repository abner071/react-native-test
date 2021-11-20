import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from './src/hooks/auth';
import theme from './src/global/styles/theme';

import { SignIn } from './src/screens/SignIn';

import { Routes } from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
