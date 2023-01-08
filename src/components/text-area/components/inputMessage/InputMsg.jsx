import "./style.css";
import React from "react";
import sendMsg from "assets/media/svg/sendmsg.svg";
import smiley from "assets/media/svg/smiley.svg";
import sendFile from "assets/media/svg/sendFiles.svg";

export default function InputMsg() {
  return (
    <div id="Input-msg" className="theme">
      <img id="svg" src={smiley} alt="" />
      <img id="svg" src={sendFile} alt="" />
      <input type="text" />
      <img id="svg" src={sendMsg} alt="" />
    </div>
  );
}
