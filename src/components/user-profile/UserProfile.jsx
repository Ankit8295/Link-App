import React from "react";
import HeaderUser1 from "./components/header/HeaderUser1";
import Chats from "./components/user-chats/Chats";
import "./style.css";
export default function UserProfile() {
  return (
    <div id="user-1">
      <HeaderUser1 />
      <Chats />
    </div>
  );
}
