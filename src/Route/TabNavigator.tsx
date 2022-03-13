import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../Views/HomeView";
import FAQ from "../Views/FAQView";
import Account from "../Views/AccountView";

import Style from "../../Style";

const HomeTab = createBottomTabNavigator();

function TabNavigator(props: any) {
  return (
    <NavigationContainer>
      <HomeTab.Navigator>
        <HomeTab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <HomeTab.Screen name="Account" component={Account} />
        <HomeTab.Screen name="FAQ" component={FAQ} />
      </HomeTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default TabNavigator;