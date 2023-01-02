import "./style.css";
import user from "assets/media/svg/user.jpg";
import back from "assets/media/svg/back.svg";
import React from "react";
import { useDispatch } from "react-redux";
import { showProfileFn } from "store/user-slice/userSlice";
export default function UserInfo() {
  const dispatch = useDispatch();
  const closeUserProfile = () => {
    dispatch(showProfileFn());
  };

  return (
    <div id="profile">
      <img src={user} alt="" />
      <div className="profile-details">
        <div className="user-info name">
          <h2>Your Name</h2>
          <label>
            <input value="Ankit" id="input" type="text" />
          </label>
        </div>
        <div className="user-info about">
          <h2>About</h2>
          <label>
            <input value="nothing" id="input" type="text" />
          </label>
        </div>
      </div>
      <img onClick={closeUserProfile} className="go-back" src={back} alt="" />
    </div>
  );
}
