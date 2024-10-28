import { useState, useEffect, useContext } from "react";

import Login from "./components/Auth/Login";
import EmpDashboard from "./components/Dashboard/EmpDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
 
import { AuthContext } from "./context/AuthProvider";

function App() {
  const { userData, setUserData } = useContext(AuthContext);
 

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // setting role and data of user
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    } 
 
  }, []);

  // handling the login of amdin or employee
  const handleLogin = (email, password) => {
    if (userData) {
      // cheking for admin
      const admin = userData.admin.find(
        (e) => email == e.email && password == e.password
      );
      if (admin) {
        setUser("admin");
        setLoggedInUserData(admin);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: admin })
        );
        return;
      }

      // cheking for employee
      const employee = userData.employees.find(
        (e) => email == e.email && password == e.password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return;
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
 

      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* rendering admin or employee Dashboard based on the credentials */}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : user === "employee" ? (
        <EmpDashboard changeUser={setUser} data={loggedInUserData} />
      ) : (
        ""
      )}
   
    </>
  );
}

export default App;
