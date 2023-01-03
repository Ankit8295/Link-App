import "./style.css";
import React from "react";
import message from "assets/media/svg/message.svg";
import sun from "assets/media/svg/sun.svg";
import user from "assets/media/svg/user.jpg";
import menu from "assets/media/svg/menu.svg";
import search from "assets/media/svg/search.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  showProfileFn,
  showUserMenuFn,
  showFriendsListFn,
} from "store/user-slice/userSlice";

export default function HeaderUser1() {
  const dispatch = useDispatch();
  const showUserMenu = useSelector((state) => state.user.showUserMenu);

  const showMenuHandler = () => {
    dispatch(showUserMenuFn());
  };
  const friendListHandler = () => {
    dispatch(showFriendsListFn());
  };
  const showUserProfile = (e) => {
    e.preventDefault();
    dispatch(showProfileFn());
    if (showUserMenu) {
      dispatch(showUserMenuFn());
    }
  };

  return (
    <>
      <div id="headerUser-1">
        <div className="user-profile">
          <div>
            <img onClick={showUserProfile} src={user} alt="user-icon" />
          </div>
        </div>
        <div className="user-nav">
          <div className="dark-mode">
            <img id="svg" src={sun} alt="theme-btn" />
          </div>
          <div className="user-friends">
            <img
              onClick={friendListHandler}
              id="svg"
              src={message}
              alt="message"
            />
          </div>
          <div className="profile-menu">
            {showUserMenu && (
              <div id="dropdown">
                <a onClick={showUserProfile} href="/">
                  Your Profile
                </a>
                <a href="/">Add Friends</a>
                <a href="/">Settings</a>
                <a href="/">Log Out</a>
              </div>
            )}
            <img
              id="svg"
              className="menu-btn"
              onClick={showMenuHandler}
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
