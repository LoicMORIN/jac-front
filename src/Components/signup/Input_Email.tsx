import React, { useState } from "react";
import {View, TextInput, Text  } from "react-native";
import Style from "../../../Style";

const Email = () => {
    const [email, setEmail] = useState('');
    return (
      <View style={Style.container_input_2}>
        <Text style={Style.text_input}>Adresse mail : </Text>
        <TextInput
        style={Style.input_2}
        placeholder="Adresse mail"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
        placeholderTextColor="#DDDEE1"
        keyboardType='email-address'
        autoCompleteType="email"
        importantForAutofill="auto"
        textContentType="emailAddress"
        autoCapitalize="none"
        />
      </View>
    );
  }
  
  export default Email;

