import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import {Text, TouchableOpacity } from "react-native";
import Style from "../../../Style";

const ButtonLogin = (text) => {
    const { login } = useAuth();
    return (
        <TouchableOpacity 
        style={Style.button_View}
        onPress={() => login()} >
            <Text style={Style.button_Text}> {text} </Text>
        </TouchableOpacity>
    );
  }
  
  export default ButtonLogin;

