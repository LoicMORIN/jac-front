import React from 'react';
import {Text, View, Button, } from 'react-native';
import { useAuth } from "../Context/AuthContext";
import Style from '../../Style';



function LoginView({navigation}:any) {
    const { login } = useAuth();
    return (
      <View style={Style.container}>
        <Text>Ecran de connexion</Text>
        <Button title="Se connecter" onPress={() => login()} />
        <Text onPress={() => navigation.navigate('ForgetPassword')} style={Style.text_button}> Mot de passe oublié ? </Text>
        <Text onPress={() => navigation.navigate('SignUp')} style={Style.text_button}> S'inscrire </Text>
      </View>
    );
  }

  
export default LoginView;


