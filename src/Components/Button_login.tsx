import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import {Text, TouchableOpacity } from "react-native";
import Style from "../../Style";

const ViewEmail = () => {
    const { login } = useAuth();
    return (
        <TouchableOpacity 
        style={Style.button_View}
        onPress={() => login()} >
            <Text style={Style.button_Text}> Se connecter </Text>
        </TouchableOpacity>
    );
  }
  
  export default ViewEmail;

