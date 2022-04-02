import React from "react";
import {Text, TouchableOpacity } from "react-native";
import Style from "../../../Style";

const ButtonSignUp = () => {
    return (
        <TouchableOpacity 
        style={Style.button_ForgetPassword}
         >
            <Text style={Style.button_Text}> Créer mon compte ! </Text>
        </TouchableOpacity>
    );
  }
  
  export default ButtonSignUp;
;

