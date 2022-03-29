import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeView from "../Views/HomeView";
import FAQView from "../Views/FAQView";
import AccountView from "../Views/AccountView";


const HomeTab = createBottomTabNavigator();

function TabNavigator(props: any) {
  return (
    <NavigationContainer>
      <HomeTab.Navigator>
        <HomeTab.Screen name="Home" component={HomeView}  options={{ headerShown: false }}/>
        <HomeTab.Screen name="Account" component={AccountView} options={{ headerShown: false }}/>
        <HomeTab.Screen name="FAQ" component={FAQView} options={{ headerShown: false }}/>
      </HomeTab.Navigator>
    </NavigationContainer>
  );
}



export default TabNavigator;