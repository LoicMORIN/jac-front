import React, { useState } from "react";
import {Text, View, TouchableOpacity } from "react-native";
import Style from "../../Style";

const ViewEmail = () => {
    const [email, setEmail] = useState('');
    return (
      <View style={[Style.button_View,{flex:0.1}]}>
        <TouchableOpacity>
            <Text style={Style.button_Text}> </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export default ViewEmail;

