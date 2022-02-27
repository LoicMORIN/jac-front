import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Button  } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login '}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Se connecter"
      onPress={() =>
        navigation.navigate('Login')
      }
    />
  );
};
const LoginScreen = ({ navigation, route }) => {
  return <Text> Connecté </Text>;
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
