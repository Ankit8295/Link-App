import React from "react";
import { useNavigate } from "react-router";
import "./style.css";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div id="login-signup" className="Signup-Page">
      <h1>Register Your Account</h1>
      <form onSubmit={() => navigate("/login")} className="signup_form form">
        <label>
          <input type="text" placeholder="your name" />
        </label>
        <label>
          <input type="email" placeholder="your email" />
        </label>
        <label>
          <input type="password" placeholder="your password" />
        </label>
        <button type="submit" className="login_btn">
          Register
        </button>
      </form>
      <h3>
        already have an account
        <span onClick={() => navigate("/login")}> Login</span>, here
      </h3>
    </div>
  );
}
