import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const HomeTab = createBottomTabNavigator();

function TabNavigator(props: any) {
  return (
    <NavigationContainer>
      <HomeTab.Navigator>
        <HomeTab.Screen
          name="Home"
          component={}
          options={{ headerShown: false }}
        />
        <HomeTab.Screen name="List" component={} />
      </HomeTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default TabNavigator;