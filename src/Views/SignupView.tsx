import {Text, View, Button  } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Style from '../../Style';

function SingUpView({navigation}:any) {
    return (
      <View style={Style.container}>
        <Text>Ecran d'inscription </Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Password" onPress={() => navigation.navigate('ForgetPassword')} />
      </View>
    );
  }

  
  export default SingUpView;


