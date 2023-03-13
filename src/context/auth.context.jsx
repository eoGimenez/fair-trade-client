import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import authService from "../services/auth.service";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("patata");

  const navigate = useNavigate()

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  
  const authenticateUser = () => {
    console.log("CARGANDO USUARIO")
    setIsLoading(true);
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      authService
        .verify()
        .then((response) => {
         /*  const user = response.data; */
          console.log("VERIFY AUTH CTX", response.data)
          setIsLoggedIn(true);
          setUser(response.data);
          setIsLoading(false);
        })
        .catch((error) => {

          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
 
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    // Upon logout, remove the token from the localStorage
    removeToken();
    authenticateUser();
    navigate('/')
  };

  useEffect(() => {
    // Run this code once the AuthProviderWrapper component in the App loads for the first time.
    // This effect runs when the application and the AuthProviderWrapper component load for the first time.
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
