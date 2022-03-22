import React, { useState } from "react";
import {Image, View, TextInput, StyleSheet } from "react-native";
import Style from "../../Style";

const ViewEmail = () => {
    const [email, setEmail] = useState('');
    return (
      <View style={Style.container_email}>
        <Image source={require('../../assets/@.png')} />
        <TextInput
        style={Style.input }
        placeholder="Adresse mail"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
        placeholderTextColor="#DDDEE1"
        />
      </View>
    );
  }
  
  export default ViewEmail;