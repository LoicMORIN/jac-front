import React from "react";
import {Image, View } from "react-native";
import Style from "../../Style";

const ViewLogo = () => {
    return (
      <View style={Style.container}>
          <Image source={require('../../assets/logo_UNICEF.png')} />
      </View>
    );
  }
  
  export default ViewLogo;