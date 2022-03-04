import React from 'react';
import {Text, View, Button  } from 'react-native';
import { useAuth } from "../Context/AuthContext";
import SingupView from './SignupView'
import Style from '../../Style';
import SignUpButton from '../Components/SignUpButton'


function LoginView() {
    const { login } = useAuth();
    return (
      <View style={Style.container}>
        <Text>Ecran de connexion</Text>
        <Button title="Se connecter" onPress={() => login()} />
        <SignUpButton/>
      </View>
    );
  }

  
  export default LoginView;


