import React from 'react';
import {Text, ScrollView} from 'react-native';
import Style from '../../Style';

import ButtonSignUp from "../Components/signup/Button_SignUp";

import Email from "../Components/signup/Input_Email";
import LastName from "../Components/signup/Input_LastName";
import FirstName from "../Components/signup/Input_FirstName";
import Birthdate from "../Components/signup/Input_Birthdate";
import Password from "../Components/signup/Input_Password";
import PasswordConfirm from "../Components/signup/Input_PasswordConfirm";

function SignUpView({navigation}:any) {
  return (
    <ScrollView style={Style.container}>
      <Text style={{fontSize:24,fontFamily:'Poppins', fontWeight:'bold',margin:"4%",marginTop:200}}>Création de mon compte UNICEF</Text>
    <Email/>
    <LastName/>
    <FirstName/>
    <Birthdate/>
    <Password/>
    <PasswordConfirm/>
    <ButtonSignUp/>
    <Text style={[Style.text_button,{marginVertical:30, alignSelf:"center"}]} onPress={() => navigation.navigate('Login')}> Annuler ? </Text>
    </ScrollView>
  );
}

export default SignUpView;


  


  
    

  
  
  