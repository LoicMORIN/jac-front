import React from 'react';
import {Text, View, Button  } from 'react-native';
import { useAuth } from "../Context/AuthContext";
import Style from '../../Style';



function LoginView() {
    const { login } = useAuth();
    return (
      <View style={Style.container}>
        <Text>Ecran de connexion</Text>
        <Button title="Se connecter" onPress={() => login()} />
      </View>
    );
  }

  
  export default LoginView;


