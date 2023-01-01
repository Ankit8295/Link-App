import "./style.css";
import user from "assets/media/svg/user.jpg";
import search from "assets/media/svg/search.svg";
import menu from "assets/media/svg/menu.svg";
import React, { useState } from "react";
import DropDown from "common/dropdown/DropDown";

export default function Header() {
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
  const options = [
    "User info",
    "Clear Chat",
    "Report & Block",
    "Remove Friend",
  ];

  return (
    <div id="textArea">
      <div className="user-friend">
        <div className="user-img">
          <img src={user} alt="" />
        </div>
        <p>Ankit verma</p>
      </div>
      <div className="textarea-options">
        <label>
          {showChatSearch && <input type="search" />}
          <img
            className="chat-search-bar"
            onClick={showSearch}
            src={search}
            alt=""
          />
        </label>
        <img className="menu-user" onClick={showUserMenuFn} src={menu} alt="" />
      </div>
      {UserMenu && <DropDown menu={options} />}
    </div>
  );
}
