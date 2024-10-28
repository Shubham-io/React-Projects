import { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
 

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  if (getLocalStorage().employees == null && getLocalStorage().admin == null) {
    setLocalStorage();
  }
  useEffect(() => {
    const { employees, admin, loggedInUser } = getLocalStorage();
    setUserData({ employees, admin, loggedInUser });
  }, []);

 
  return (
    <div>
      <AuthContext.Provider value={{ userData, setUserData }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
