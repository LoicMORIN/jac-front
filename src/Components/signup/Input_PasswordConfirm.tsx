import React, { useState } from "react";
import {View, TextInput, Text } from "react-native";
import Style from "../../../Style";

const PasswordConfirm = () => {
    const [email, setEmail] = useState('');
    return (
      <View style={Style.container_input_2}>
        <Text style={Style.text_input}>Confirmation du mot de passe : </Text>
        <TextInput
        style={Style.input_2}
        placeholder="Adresse mail"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
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

