import React from 'react';
import {Text, View,Image } from 'react-native';
import Style from '../../Style';

function SignUpView({navigation}:any) {
  return (
    <View style={Style.container}>
      <Image style={{marginBottom:"6%"}} source={require('../../assets/logo_UNICEF.png')} />
      <Text style={{fontSize:24,fontFamily:'Poppins', fontWeight:'bold',margin:"4%",marginRight:"28%" }}> Création de mon compte UNICEF</Text>
    </View>
  );
};

export default SignUpView;


  


  
    

  
  
  