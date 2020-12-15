import React, { useState, useEffect } from "react";
import "../styles/footer.css";
import login from "../components/login/login.component";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
const Footer = () => {
  let history = useHistory();
  // to turn register/login button to my profile button I must refresh
  const [username, setUsername] = useState(false);

  useEffect(() => {
    if (localStorage.jwtTokenTeams) {
      const token = JSON.parse(localStorage.jwtTokenTeams);

      const decoded = jwt_decode(token);
      setUsername(decoded.username);
    }
  }, []);

  //   console.log(!username);
  return (
    <footer>
      <div className="linkovi">
        <a href="https://www.instagram.com/webcode.rs/?hl=sr">
          <img
            src="/images/social_media/ig.png"
            alt="instagram logo"
            className="logo"
          />
        </a>
        <a href="mailto:andrijagajicbusiness@gmail.com">
          <img
            src="/images/social_media/email.png"
            alt="email logo"
            className="logo"
          />
        </a>
        <a href="https://github.com/gajojr">
          <img
            src="/images/social_media/github.png"
            alt="github logo"
            className="logo"
          />
        </a>
      </div>
      {!username ? (
        <div className="login-register">
          <button
            onClick={() => history.push("/register")}
            className="adminButton"
          >
            register
          </button>

          <button
            onClick={() => history.push("/login")}
            className="adminButton"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="login-register">
          <a href="http://localhost:8080/user-page">
            <div className="adminButton">My profile</div>
          </a>
        </div>
      )}
    </footer>
  );
};

export default Footer;
