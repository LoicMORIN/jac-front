import React from 'react';
import {Text, View, Button,Image} from 'react-native';
import { useAuth } from "../Context/AuthContext";
import Style from '../../Style';


import ViewEmail from '../Components/Email_Intput';
import ViewPassword from '../Components/Password_Intput';


function LoginView({navigation}:any) {
    const { login } = useAuth();
    return (
      <View style={Style.container}>
        <Image source={require('../../assets/logo_UNICEF.png')} />
        <Text style={{fontSize:30}}>Connexion à mon compte UNICEF</Text>
        <ViewEmail/>
        <ViewPassword/>
        <Text onPress={() => navigation.navigate('ForgetPassword')} style={[Style.text_button, {flexDirection:'row-reverse', marginBottom: 20, marginTop: 20 }]}> Mot de passe oublié ? </Text>
        <Button title="Se connecter" onPress={() => login()} />
        <View style={{flexDirection: 'row',alignSelf: "center", marginBottom: 20, marginTop: 20,}}>
          <Text> Pas encore inscrit ? </Text>
          <Text onPress={() => navigation.navigate('SignUp')} style={Style.text_button}> S'inscrire </Text>    
        </View>
      </View>
    );
  }

  
export default LoginView;


