import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./auth.css";
import axios from "axios";


export default function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSwitch(value) {
    set_switch(value);
    console.log(_switch);
    setPassword("");
    setUsername("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (_switch) {
      axios
        .post("http://localhost:8000/api/auth/login", {
          username,
          password
        })
        .then(result => {
          if (result.data.accessToken) {
            localStorage.setItem("accessToken", result.data.accessToken);
            setIsLoggedIn(true);
            setUserUsername(username);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:8000/api/auth/register", {
          username,
          password
        })
        .then(result => {
          if (result.data.accessToken) {
            localStorage.setItem("accessToken", result.data.accessToken);
            setIsLoggedIn(true);
            setUserUsername(username);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }


  return (
    <div className="auth-box">
      <form className="auth-form" onSubmit={handleSubmit} >
        <div className="auth-form-header">
          <div
            className={_switch ? "active" : ""}
            id="header1"
            onClick={() => { handleSwitch(true) }}
          >
            Sign in
          </div>
          <div
            className={!_switch ? "active" : ""}
            id="header2"
            onClick={() => { handleSwitch(false) }}
          >
            Sign up
          </div>
        </div>
        <div className="auth-form-body">
          {_switch &&
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
          {!_switch &&
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
        </div>
      </form>
    </div>
  );
}
