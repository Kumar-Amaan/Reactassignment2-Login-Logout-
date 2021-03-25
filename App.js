import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const admin = {
    email: "Singhal@admin.com",
    password: "12345",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (data) => {
    console.log(data);

    if (data.email == admin.email && data.password == admin.password) {
      console.log("Logged In");
      setUser({
        name: data.name,
        email: data.email,
      });
    } else {
      console.log("Error");
      setError("Invalid Details!");
    }
  };

  const Logout = () => {
    // console.log("Logout");
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome,<span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
