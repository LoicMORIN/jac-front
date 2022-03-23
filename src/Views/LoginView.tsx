import React from 'react';
import {Text, View, Button,Image} from 'react-native';
import { useAuth } from "../Context/AuthContext";
import Style from '../../Style';


import ViewEmail from '../Components/Email_Intput';
import ViewPassword from '../Components/Password_Intput';
import S_inscrire from '../Components/S_inscrire';

function LoginView({navigation}:any) {
    const { login } = useAuth();
    return (
      <View style={Style.container}>
        <Image source={require('../../assets/logo_UNICEF.png')} />
        <Text style={{fontSize:30}}>Connexion à mon compte UNICEF</Text>
        <ViewEmail/>
        <ViewPassword/>
        <Button title="Se connecter" onPress={() => login()} />
        <Text onPress={() => navigation.navigate('ForgetPassword')} style={Style.text_button}> Mot de passe oublié ? </Text>
        <S_inscrire/>
      </View>
    );
  }

  
export default LoginView;


