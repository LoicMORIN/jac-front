import React, { useState } from "react";
import {View, TextInput, Text  } from "react-native";
import Style from "../../../Style";

const Birthdate = () => {
    const [email, setEmail] = useState('');
    return (
      <View style={Style.container_input_2}>
        <Text style={Style.text_input}>Date d'anniversaire : </Text>
        <TextInput
        style={Style.input_2}
        placeholder="Adresse mail"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
        placeholderTextColor="#DDDEE1"
        keyboardType='numeric'
        autoCompleteType="cc-exp-year"
        importantForAutofill="auto"
        autoCapitalize="none"
        />
      </View>
    );
  }
  
  export default Birthdate;

