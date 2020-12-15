import React, { useState } from "react";
import "./register.styles.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import setAuthToken from "../../utils/setAuthToken";
const Register = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    axios
      .post("/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        const { token } = res.data;
        // // console.log(token);
        localStorage.setItem("jwtTokenTeams", JSON.stringify(token));
        // // //set Header for bearer
        setAuthToken(token);

        props.history.push("/");
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      Username
      <input
        className="item"
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        label="username"
        required
      />
      Email
      <input
        className="item"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        label="Email"
        required
      />
      Password
      <input
        className="item"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        label="Password"
        required
      />
      Confirm Password
      <input
        className="item"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
        label="Confirm Password"
        required
      />
      <button type="submit">SIGN UP</button>
    </form>
  );
};
export default withRouter(Register);
