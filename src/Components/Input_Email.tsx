import React, { useState } from "react";
import {Image, View, TextInput } from "react-native";
import Style from "../../Style";

const Email = () => {
    const [email, setEmail] = useState('');
    return (
      <View style={Style.container_input}>
        <Image source={require('../../assets/@.png')} />
        <TextInput
        style={Style.input}
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

