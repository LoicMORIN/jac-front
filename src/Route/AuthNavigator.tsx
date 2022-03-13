import React from "react";
import { useAuth } from "../Context/AuthContext";
import LoginView from "../Views/LoginView";
import TabNavigator from "./TabNavigator";

function AuthNavigator(): any {
  const { isAuthentificated }: any = useAuth();
  if (!isAuthentificated) {
    return <LoginView />;
  } else {
    return <TabNavigator />;
  }
}


export default AuthNavigator;
