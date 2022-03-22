import React, { useState } from "react";
import { Image, View, TextInput } from "react-native";
import Style from "../../Style";

const ViewPassword = () => {
const [password, setPassword] = useState('');
    return (
      <View style={Style.container_password}>
        <Image source={require('../../assets/fermer-a-cle.png')} />
        <TextInput
        style={{
          alignSelf: "stretch",
          width: "auto",
          minWidth: 50,
          marginLeft: 20,
          marginRight: 20,
        }}
        placeholder="Mot de Passe"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
        />
        <Image source={require('../../assets/croise-les-yeux.png')} />
      </View>
    );
  }
  
  export default ViewPassword;