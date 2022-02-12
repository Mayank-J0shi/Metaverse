import "./login.css";
import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Metaverse</h3>
          <span className="loginDesc">
            Come into the meta world around you on Metaverse.
          </span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              required
              minLength={6}
              type="password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
