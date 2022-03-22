import React from "react";
import { Image, View, TextInput } from "react-native";
import Style from "../../Style";

const ViewPassword = () => {
    return (
      <View style={Style.container_password}>
        <Image source={require('../../assets/fermer-a-cle.png')} />

        <Image source={require('../../assets/croise-les-yeux.png')} />
      </View>
    );
  }
  
  export default ViewPassword;