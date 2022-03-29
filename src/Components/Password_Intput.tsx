import React, { useState } from "react";
import { Image, View, TextInput, TouchableOpacity } from "react-native";
import Style from "../../Style";

const ViewPassword = () => {
  const [password, setPassword] = useState('');

  const [yeux, setYeux] =  useState(true);

  let source_yeux = require('../../assets/croise-les-yeux.png');

  if(yeux == true)
    source_yeux = require('../../assets/croise-les-yeux.png');
  else
    source_yeux = require('../../assets/ouvert-les-yeux.png');
  
  
    return (
      <View style={Style.container_input}>
        <Image source={require('../../assets/fermer-a-cle.png')} />
        <TextInput
        style={Style.input}
        placeholder="Mot de Passe"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
        placeholderTextColor="#DDDEE1"
        secureTextEntry={yeux}
        autoCompleteType="password"
        importantForAutofill="auto"
        textContentType="password"
        />
        <TouchableOpacity onPress={ () => setYeux(ReturnBool(yeux))}>
          <Image source={source_yeux} />
        </TouchableOpacity>
      </View>
    );
}

function ReturnBool(test:Boolean){
  if(test===true)
    return false
  else
    return true
}

export default ViewPassword;
