import "./style.css";
import React from "react";
import message from "assets/media/svg/message.svg";
import sun from "assets/media/svg/sun.svg";
import user from "assets/media/svg/user.svg";
import menu from "assets/media/svg/menu.svg";
import search from "assets/media/svg/search.svg";

export default function HeaderUser1() {
  return (
    <>
      <div id="headerUser-1">
        <div className="user-profile">
          <img src={user} alt="user-icon" />
        </div>
        <div className="user-nav">
          <div className="dark-mode">
            <img src={sun} alt="theme-btn" />
          </div>
          <div className="user-friends">
            <img src={message} alt="message" />
          </div>
          <div className="profile-menu">
            <img src={menu} alt="menu-btn" />
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
