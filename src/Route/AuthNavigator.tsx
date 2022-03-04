import React from "react";

import { useAuth } from "../Context/AuthContext";

import LoginView from "../Views/LoginView";
import SingupView from "../Views/SignupView";
function AuthNavigator(): any {
  const { isAuthentificated }: any = useAuth();
  if (!isAuthentificated) {
    return <LoginView />;
  } else {
    return <SingupView />;
  }
}

export default AuthNavigator;