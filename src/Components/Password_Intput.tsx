import React, { useState } from "react";
import { Image, View, TextInput } from "react-native";
import Style from "../../Style";

const ViewPassword = () => {
const [password, setPassword] = useState('');
    return (
      <View style={Style.container_input}>
        <Image source={require('../../assets/fermer-a-cle.png')} />
        <TextInput
        style={Style.input}
        placeholder="Mot de Passe"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
        placeholderTextColor="#DDDEE1"
        />
        <Image source={require('../../assets/croise-les-yeux.png')} />
      </View>
    );
  }
  
  export default ViewPassword;