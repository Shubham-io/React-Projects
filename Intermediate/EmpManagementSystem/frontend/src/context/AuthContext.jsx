import axios from "axios";
import React, { useState, useEffect, createContext, useContext } from "react";

const UserContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.post(
            "http://localhost:3000/api/auth/verify",

            {}, // empty data body
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (response.data.success) {
            setUser(response.data.user);
          } else {
            setUser(null);
          }
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          setUser(null);
        }
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
export default AuthContext;
