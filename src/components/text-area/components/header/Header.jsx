import "./style.css";
import user from "assets/media/svg/user.jpg";
import search from "assets/media/svg/search.svg";
import menu from "assets/media/svg/menu.svg";
import React, { useState } from "react";
import { showFriendProfileFn } from "store/user-slice/userSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const [showChatSearch, setShowChatSearch] = useState(false);
  const [UserMenu, setUserMenu] = useState(false);
  const showSearch = () => {
    setShowChatSearch((prev) => !prev);
  };
  const showUserMenuFn = () => {
    setUserMenu((prev) => !prev);
  };
  window.onclick = function CloseDropDown(e) {
    if (!e.target.matches(".menu-user")) {
      setUserMenu(false);
    }
    return;
  };
  const friendProfileHandler = (e) => {
    e.preventDefault();
    dispatch(showFriendProfileFn());
  };
  return (
    <div id="textArea">
      <div className="user-friend">
        <div className="user-img">
          <img onClick={friendProfileHandler} src={user} alt="" />
        </div>
        <p>Ankit verma</p>
      </div>
      <div className="textarea-options">
        <label>
          {showChatSearch && <input type="search" placeholder="search chat" />}
          <img
            id="svg"
            className="chat-search-bar"
            onClick={showSearch}
            src={search}
            alt=""
          />
        </label>
        <img
          id="svg"
          className="menu-user"
          onClick={showUserMenuFn}
          src={menu}
          alt=""
        />
      </div>
      {UserMenu && (
        <div id="dropdown">
          <a onClick={friendProfileHandler} href="/">
            User info
          </a>
          <a href="/">Clear Chat</a>
          <a href="/">Report & Block</a>
          <a href="/">Remove Friend</a>
        </div>
      )}
    </div>
  );
}
