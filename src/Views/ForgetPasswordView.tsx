import React from "react";
import { Text, View } from "react-native";

import ViewEmail from '../Components/Email_Intput';

import Style from "../../Style";

function ForgetPassword({navigation}:any) {
    return(
        <View style={Style.container}> 
            <Text style={{fontSize:25,fontWeight:"500",fontFamily:"Poppins",marginHorizontal:20}}> Mot de passe oublié ? </Text>
            <Text style={{fontSize:18,fontWeight:"400",fontFamily:"Poppins",margin:20}}> Aide avec le mot de passe </Text>
            <Text style={{fontSize:14,fontFamily:"Poppins",textAlign:"center",margin:30}}> Saisissez l'adresse e-mail associé à votre compte.  </Text>
            <ViewEmail/>
            <Text style={[Style.text_button,{marginTop:30}]} onPress={() => navigation.navigate('Login')}> Annuler ? </Text>
        </View>
    )

}

export default ForgetPassword; 