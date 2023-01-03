import SecondUser from "components/second-user-profile/SecondUser";
import React from "react";
import "./App.css";
import TextArea from "./components/text-area/TextArea";
import UserProfile from "./components/user-profile/UserProfile";

function App() {
  return (
    <div id="App">
      <UserProfile />
      <TextArea />
    </div>
  );
}

export default App;
