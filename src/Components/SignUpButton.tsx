import React from "react";
import {Button} from 'react-native';
import SignupView from '../Views/SignupView';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SignUpButton(): any {
    <Button title="S'inscrire" onPress={() => <SignupView />} />
} 

export default SignUpButton;