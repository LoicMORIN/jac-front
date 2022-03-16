import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AuthProvider } from "./src/Context/AuthContext";
import AuthNavigator from './src/Route/AuthNavigator'



export default function App() {
  return (
    <AuthProvider>
      <AuthNavigator />
    </AuthProvider>
  );
}