import React, { useState } from "react";
import "./login.styles.css";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom";
export const Login = (props) => {
  // let history = useHistory();
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    //http request
    console.log(email, password);
    axios.post("/login", { email: email, password: password }).then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtTokenTeams", JSON.stringify(token));
      //set Header for bearer
      setAuthToken(token);

      props.history.push("/");
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      Login
      <input
        className="item"
        name="email"
        type="email"
        onChange={handleChange}
        value={email}
        label="email"
        required
      />
      <input
        className="item"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        label="Password"
        required
      />
      <button>login</button>
    </form>
  );
};
//With Router to get history.push
export default withRouter(Login);
