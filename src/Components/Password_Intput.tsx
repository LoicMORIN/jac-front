import React from "react";
import { Image, View } from "react-native";
import Style from "../../Style";

const ViewPassword = () => {
    return (
      <View style={Style.container}>
        <Image source={require('../../assets/fermer-a-cle.png')} />
        <Image source={require('../../assets/croise-les-yeux.png')} />
      </View>
    );
  }
  
  export default ViewPassword;