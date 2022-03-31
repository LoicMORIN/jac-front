import React from "react";
import {Text, TouchableOpacity } from "react-native";
import Style from "../../../Style";

const ButtonSignUp = () => {
    return (
        <TouchableOpacity 
        style={Style.button_view_sign}>
            <Text style={Style.button_Text}> Valider  </Text>
        </TouchableOpacity>
    );
  }

export default ButtonSignUp;

