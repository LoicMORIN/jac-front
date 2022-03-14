import React from "react";
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import LoginView from "../Views/LoginView";
import SingUpView from "../Views/SignupView";
import ForgetPasswordView from "../Views/ForgetPasswordView";

import Style from "../../Style";

const Stack = createNativeStackNavigator();

function LoginScreen({navigation}:any) {
    return ( 
      <View>
        <LoginView/>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        <Button title="Password" onPress={() => navigation.navigate('ForgetPassword')} />
      </View>
    );
  }

function SignUpScreen({navigation}:any) {
    return ( 
      <View>
        <SingUpView/>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Password" onPress={() => navigation.navigate('ForgetPassword')} />
      </View>
    );
}

function ForgetPasswordScreen({navigation}:any) {
    return ( 
      <View>
        <ForgetPasswordView/>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }

function ConnexionNavigator(props: any) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  const styles = Style;
  
  export default ConnexionNavigator;