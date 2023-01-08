import React from "react";
import { useNavigate } from "react-router";
import "./style.css";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div id="login-signup" className="login-Page">
      <h1>Login Your Account</h1>
      <form onSubmit={() => navigate("/home")} className="login_form form">
        <label>
          <input type="email" placeholder="your email" />
        </label>
        <label>
          <input type="password" placeholder="your password" />
        </label>
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
      <h3>
        if you don't have an account
        <span onClick={() => navigate("/signup")}> register</span>, here
      </h3>
    </div>
  );
}
