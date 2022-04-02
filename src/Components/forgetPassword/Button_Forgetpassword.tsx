import React from "react";
import {Text, TouchableOpacity } from "react-native";
import Style from "../../../Style";

const ButtonForgetpassword = () => {
    return (
        <TouchableOpacity 
        style={Style.button_ForgetPassword}>
            <Text style={Style.button_Text}> Valider  </Text>
        </TouchableOpacity>
    );
  }

export default ButtonForgetpassword;

