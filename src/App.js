import React from "react";
import Routes from "Routes";
import { useSelector } from "react-redux";
import "./App.css";
export default function App() {
  const darkMode = useSelector((state) => state.user.darkMode);
  return (
    <div id={darkMode ? "main-dark" : "main"} className="theme">
      <Routes />
    </div>
  );
}
