import React from "react";
import { useSelector } from "react-redux";
import HeaderUser1 from "./components/header/HeaderUser1";
import Chats from "./components/user-chats/Chats";
import UserInfo from "./components/user-info/UserInfo";
import FriendsList from "./components/friends-list/FriendsList";
import "./style.css";
export default function UserProfile() {
  const showProfile = useSelector((state) => state.user.showProfile);
  const showFriends = useSelector((state) => state.user.showFriends);
  return (
    <div id="user-1">
      {showProfile ? (
        <UserInfo />
      ) : (
        <>
          <HeaderUser1 />
          {showFriends ? <FriendsList /> : <Chats />}
        </>
      )}
    </div>
  );
}
