import "./style.css";
import React from "react";
import Header from "./components/header/Header";
import Message from "./components/msgArea/Message";
import InputMsg from "./components/inputMessage/InputMsg";
import SecondUser from "components/second-user-profile/SecondUser";
import { useSelector } from "react-redux";

export default function TextArea() {
  const showFriendProfile = useSelector(
    (state) => state.user.showFriendProfile
  );
  return (
    <>
      <div id="TextArea">
        <div className="main">
          <Header />
          <Message />
          <InputMsg />
        </div>
        {showFriendProfile && (
          <div className="friend">
            <SecondUser />
          </div>
        )}
      </div>
    </>
  );
}
