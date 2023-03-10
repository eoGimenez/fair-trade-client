import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import userService from "../services/user.services";

const userContext = createContext();

function UserProviderWrapper({ children }) {

    
  const [usersCTX, SetUserCTX] = useState([]);

  const getUsers = () => {
    userService.getUsers()
      .then((result) => {
       /*  console.log("RESULT-GET USER", result); */
        SetUserCTX(result.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);
 console.log("userCXT:", usersCTX.length)
  return (
    <userContext.Provider value={{ usersCTX, getUsers }}>
      {children}
    </userContext.Provider>
  );
}

export { userContext, UserProviderWrapper };
