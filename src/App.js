import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import TextArea from "./components/text-area/TextArea";
import UserProfile from "./components/user-profile/UserProfile";

function App() {
  const darkMode = useSelector((state) => state.user.darkMode);
  return (
    <div id={darkMode ? "App-dark" : "App"} className="theme">
      <UserProfile />
      <TextArea />
    </div>
  );
}

export default App;
