import React, { useState } from "react";
import {View, TextInput, Text  } from "react-native";
import Style from "../../../Style";

const FirstName = () => {
    const [email, setEmail] = useState('');
    return (
      <View style={Style.container_input_2}>
        <Text style={Style.text_input}>Prénom : </Text>
        <TextInput
        style={Style.input_2}
        placeholder="Adresse mail"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
        placeholderTextColor="#DDDEE1"
        autoCompleteType="name"
        importantForAutofill="auto"
        textContentType="name"
        autoCapitalize="words"
        />
      </View>
    );
  }
  
  export default FirstName;

