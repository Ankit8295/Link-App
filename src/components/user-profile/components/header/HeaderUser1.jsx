import "./style.css";
import React from "react";
import message from "assets/media/svg/message.svg";
import sun from "assets/media/svg/sun.svg";
import moon from "assets/media/svg/moon.svg";
import user from "assets/media/svg/user.jpg";
import menu from "assets/media/svg/menu.svg";
import search from "assets/media/svg/search.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  showProfileFn,
  showUserMenuFn,
  showFriendsListFn,
  darkModeFn,
} from "store/slices/action/actions";

export default function HeaderUser1() {
  const dispatch = useDispatch();
  const showUserMenu = useSelector((state) => state.user.showUserMenu);
  const showDark = useSelector((state) => state.user.darkMode);

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
  const darkMode = () => {
    dispatch(darkModeFn());
  };

  return (
    <>
      <div id="headerUser-1" className="theme">
        <div className="user-profile">
          <div>
            <img onClick={showUserProfile} src={user} alt="user-icon" />
          </div>
        </div>
        <div className="user-nav">
          <div className="dark-mode">
            <img
              onClick={darkMode}
              id="svg"
              src={showDark ? moon : sun}
              alt="theme-btn"
            />
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
        <label className="user-search-input theme">
          <img src={search} alt="search-icon" />
          <input type="search" placeholder="search friends" />
        </label>
      </div>
    </>
  );
}
