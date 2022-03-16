import React from "react";
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import LoginView from "../Views/LoginView";
import SingUpView from "../Views/SignupView";
import ForgetPasswordView from "../Views/ForgetPasswordView";

import Style from "../../Style";

const Stack = createNativeStackNavigator();


function ConnexionNavigator(props: any) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen name="SignUp" component={SingUpView} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  const styles = Style;
  
  export default ConnexionNavigator;