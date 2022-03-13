import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext({
  isAuthentificated: false,
  login: () => {},
});
function AuthProvider({ children }: any) {
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  function login() {
    setIsAuthentificated(true);
  }
  return (
    <AuthContext.Provider value={{ isAuthentificated, login }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };