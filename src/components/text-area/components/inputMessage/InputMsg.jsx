import "./style.css";
import React from "react";
import sendMsg from "assets/media/svg/sendmsg.svg";
import sendFile from "assets/media/svg/sendFiles.svg";

export default function InputMsg() {
  return (
    <div id="Input-msg">
      <img src={sendFile} alt="" />
      <input type="text" />
      <img src={sendMsg} alt="" />
    </div>
  );
}
