import React from "react";
import "./App.css";
import SecondUser from "./components/second-user-profile/SecondUser";
import TextArea from "./components/text-area/TextArea";
import UserProfile from "./components/user-profile/UserProfile";

function App() {
  return (
    <div id="App">
      <UserProfile />
      <TextArea />
      <SecondUser />
    </div>
  );
}

export default App;
