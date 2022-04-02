import React, { useState } from "react";
import {View, TextInput, Text  } from "react-native";
import Style from "../../../Style";

const FirstName = () => {
    const [firstname, setFirstName] = useState('');
    return (
      <View style={Style.container_input_2}>
        <Text style={Style.text_input}>Prénom : </Text>
        <TextInput
        style={Style.input_2}
        placeholder="Prénom"
        onChangeText={newFirstName => setFirstName(newFirstName)}
        defaultValue={firstname}
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

