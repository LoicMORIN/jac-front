import React from "react";
import { Text, View } from "react-native";

import ViewEmail from '../Components/Email_Intput';

import Style from "../../Style";

function ForgetPassword({navigation}:any) {
    return(
        <View style={Style.container}> 
            <Text style={{fontSize:40,fontWeight:"500",fontFamily:"Poppins",marginHorizontal:20}}> Mot de passe oublié ? </Text>
            <Text style={{fontSize:30,fontWeight:"400",fontFamily:"Poppins",marginHorizontal:20}}> Aide avec le mot de passe </Text>
            <Text style={{fontSize:18,fontFamily:"Poppins",textAlign:"center"}}> Saisissez l'adresse e-mail associé à votre compte.  </Text>
            <ViewEmail/>
            <Text style={Style.text_button} onPress={() => navigation.navigate('Login')}> Annuler ? </Text>
        </View>
    )

}

export default ForgetPassword; 