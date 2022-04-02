import React, { useState } from "react";
import {View, TextInput, Text } from "react-native";
import Style from "../../../Style";

const PasswordConfirm = () => {
    const [passwordconfirm, setPasswordConfirm] = useState('');
    return (
      <View style={Style.container_input_2}>
        <Text style={Style.text_input}>Confirmation du mot de passe : </Text>
        <TextInput
        style={Style.input_2}
        placeholder="Confirmation mot de passe"
        onChangeText={newPasswordConfirm => setPasswordConfirm(newPasswordConfirm)}
        defaultValue={passwordconfirm}
        placeholderTextColor="#DDDEE1"
        autoCompleteType="password"
        importantForAutofill="auto"
        textContentType="password"
        autoCapitalize="none"
        />
      </View>
    );
  }
  
  export default PasswordConfirm;

