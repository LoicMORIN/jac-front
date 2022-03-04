import { StatusBar } from 'expo-status-bar';
import {Text, View} from 'react-native';
import React from 'react';
import { AuthProvider } from "./src/Context/AuthContext";
import AuthNavigator from './src/Route/AuthNavigator'

import Style from './Style';


export default function App() {
  return (
    <AuthProvider>
      <AuthNavigator />
    </AuthProvider>
  );
}