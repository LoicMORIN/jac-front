import React, { useState } from "react";
import {View, TextInput, Text } from "react-native";
import Style from "../../../Style";

const Password = () => {
    const [password, setPassword] = useState('');
    return (
      <View style={Style.container_input_2}>
        <Text style={Style.text_input}>Mot de passe : </Text>
        <TextInput
        style={Style.input_2}
        placeholder="Mot de passe"
        onChangeText={newPassword=> setPassword(newPassword)}
        defaultValue={password}
        placeholderTextColor="#DDDEE1"
        autoCompleteType="password"
        importantForAutofill="auto"
        textContentType="password"
        autoCapitalize="none"
        />
      </View>
    );
  }
  
  export default Password;

