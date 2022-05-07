import React, { useState, useContext, useEffect, createContext } from "react";



const AuthContext = createContext({
  isAuthentificated: false,
  login: (email_login:string,password_login:string) => {},
});
function AuthProvider({ children }: any) {
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  const [data, setData] = useState([]);
  function login(email_login:string,password_login:string) {
    const requestOption = {
      method: "GET",
      headers:{'Content-Type':'application/json'},
    }
    const getUsers = async () => {
      try {
       const response = await fetch('localhost:3000/users');
       const json = await response.json();
       setData(json);
     } catch (error) {
       console.error(error);
     }
    }
    return ([data.email, data.password]);
    
    
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