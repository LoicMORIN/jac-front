import {Text, View, Button  } from 'react-native';
import React from 'react';

import Style from '../../Style';

function SignUpView({navigation}:any) {
    return (
      <View style={Style.container}>
        <Text>Ecran d'inscription </Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Password" onPress={() => navigation.navigate('ForgetPassword')} />
      </View>
    );
  }

  
  export default SignUpView;


