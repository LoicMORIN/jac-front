import React from "react";
import {Text, TouchableOpacity } from "react-native";
import Style from "../../../Style";

type Props = {
    handlePress: () => void
}

const ButtonLogin: React.FC<Props> = ({handlePress}) => {
    return (
        <TouchableOpacity 
        style={Style.button_Login}
        onPress={() => handlePress()} >
            <Text style={Style.button_Text}> Se connecter </Text>
        </TouchableOpacity>
    );
  }
  
  export default ButtonLogin;

