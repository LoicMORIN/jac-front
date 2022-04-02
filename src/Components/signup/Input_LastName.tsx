import React, { useState } from "react";
import {View, TextInput, Text  } from "react-native";
import Style from "../../../Style";

const LastName = () => {
    const [lastname, setLastName] = useState('');
    return (
      <View style={Style.container_input_2}>
        <Text style={Style.text_input}>Nom de famille : </Text>
        <TextInput
        style={Style.input_2}
        placeholder="Nom de famille"
        onChangeText={newLastName => setLastName(newLastName)}
        defaultValue={lastname}
        placeholderTextColor="#DDDEE1"
        autoCompleteType="name"
        importantForAutofill="auto"
        textContentType="familyName"
        autoCapitalize="words"
        />
      </View>
    );
  }
  
  export default LastName;

