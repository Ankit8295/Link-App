import "./style.css";
import React from "react";
import Header from "./components/header/Header";
import Message from "./components/msgArea/Message";
import InputMsg from "./components/inputMessage/InputMsg";
// import SecondUser from "components/second-user-profile/SecondUser";

export default function TextArea() {
  return (
    <>
      <div id="TextArea">
        <Header />
        <Message />
        <InputMsg />
      </div>
      {/* <SecondUser /> */}
    </>
  );
}
