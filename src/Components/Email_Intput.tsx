import React, { useState } from "react";
import {Image, View, TextInput, StyleSheet } from "react-native";
import Style from "../../Style";

const ViewEmail = () => {
    const [email, setEmail] = useState('');
    return (
      <View style={Style.container_email}>
        <Image source={require('../../assets/@.png')} />
        <TextInput
        style={{
          alignSelf: "stretch",
          width: "auto",
          minWidth: 50,
        }}
        placeholder="Email"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
        />
      </View>
    );
  }
  
  export default ViewEmail;