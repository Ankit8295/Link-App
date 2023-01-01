import "./style.css";
import React, { useState } from "react";
import message from "assets/media/svg/message.svg";
import sun from "assets/media/svg/sun.svg";
import user from "assets/media/svg/user.jpg";
import menu from "assets/media/svg/menu.svg";
import search from "assets/media/svg/search.svg";
import DropDown from "common/dropdown/DropDown";

export default function HeaderUser1() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const showMenu = () => {
    setShowUserMenu((prev) => !prev);
  };
  window.onclick = function CloseDropDown(e) {
    if (!e.target.matches(".menu-btn")) {
      setShowUserMenu(false);
    }
    return;
  };
  const options = ["Your Profile", "Add Friends", "Settings", "Log Out"];
  return (
    <>
      <div id="headerUser-1">
        <div className="user-profile">
          <div>
            <img src={user} alt="user-icon" />
          </div>
        </div>
        <div className="user-nav">
          <div className="dark-mode">
            <img src={sun} alt="theme-btn" />
          </div>
          <div className="user-friends">
            <img src={message} alt="message" />
          </div>
          <div className="profile-menu">
            {showUserMenu && <DropDown menu={options} />}
            <img
              className="menu-btn"
              onClick={showMenu}
              src={menu}
              alt="menu-btn"
            />
          </div>
        </div>
      </div>
      <div id="search-user-friends">
        <label className="user-search-input">
          <img src={search} alt="search-icon" />
          <input type="search" placeholder="search friends" />
        </label>
      </div>
    </>
  );
}
