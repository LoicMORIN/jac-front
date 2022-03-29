import React from 'react';
import {Text, View, Button,Image} from 'react-native';
import { useAuth } from "../Context/AuthContext";
import Style from '../../Style';

import ButtonLogin from '../Components/Button_login';
import ViewEmail from '../Components/Email_Intput';
import ViewPassword from '../Components/Password_Intput';


function LoginView({navigation}:any) {
    const { login } = useAuth();
    return (
      <View style={Style.container}>
        <Image source={require('../../assets/logo_UNICEF.png')} />
        <Text style={{fontSize:24,fontFamily:'Poppins', fontWeight:'bold',margin:20,marginRight:35 }}>Connexion à mon compte UNICEF</Text>
        <ViewEmail/>
        <ViewPassword/>
        <View style={{marginVertical:20}}>
          <Text onPress={() => navigation.navigate('ForgetPassword')} style={[Style.text_button,{fontFamily:'Poppins',}]}> Mot de passe oublié ? </Text>
        </View>
        <ButtonLogin/>
        <View style={{flexDirection: 'row',alignSelf: "center", marginTop: 80,}}>
          <Text style={{fontFamily:'Poppins',}}> Pas encore inscrit ? </Text>
          <Text onPress={() => navigation.navigate('SignUp')} style={[Style.text_button,{fontFamily:'Poppins',}]}> S'inscrire </Text>    
        </View>
      </View>
    );
  }

  
export default LoginView;


