import React from 'react';
import {Text, View,Image} from 'react-native';
import { useAuth } from "../Context/AuthContext";
import Style from '../../Style';

import ButtonLogin from '../Components/login/Button_login';
import ViewEmail from '../Components/Email_Intput';
import ViewPassword from '../Components/login/Password_Intput';


function LoginView({navigation}:any) {
    const { login } = useAuth();
    return (
      <View style={Style.container}>
        <Image source={require('../../assets/logo_UNICEF.png')} />
        <Text style={{fontSize:24,fontFamily:'Poppins', fontWeight:'bold',margin:20,marginRight:35 }}>Connexion à mon compte UNICEF</Text>
        <ViewEmail/>
        <ViewPassword/>
        <View style={{marginHorizontal:25, marginBottom:40, marginTop:10, width:"85%", flexDirection:"row-reverse"}}>
          <Text onPress={() => navigation.navigate('ForgetPassword')} style={Style.text_button}> Mot de passe oublié ? </Text>
        </View>
        <ButtonLogin/>
        <View style={{flexDirection: 'row', alignSelf: "center", marginTop: 150}}>
          <Text style={{fontFamily:'Poppins'}}> Pas encore inscrit ? </Text>
          <Text onPress={() => navigation.navigate('SignUp')} style={Style.text_button}> S'inscrire </Text>    
        </View>
      </View>
    );
}

  
export default LoginView;


