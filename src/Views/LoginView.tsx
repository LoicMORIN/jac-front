import React from 'react';
import {Text, View, Button  } from 'react-native';
import { useAuth } from "../Context/AuthContext";
import Style from '../../Style';



function LoginView({navigation}:any) {
    const { login } = useAuth();
    return (
      <View style={Style.container}>
        <Text>Ecran de connexion</Text>
        <Button title="Se connecter" onPress={() => login()} />
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        <Button title="Password" onPress={() => navigation.navigate('ForgetPassword')} />
      </View>
    );
  }

  
export default LoginView;


