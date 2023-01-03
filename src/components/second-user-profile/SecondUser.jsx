import "./style.css";
import React from "react";
import user from "assets/media/svg/user.jpg";
import close from "assets/media/svg/close.svg";
import { useDispatch } from "react-redux";
import { showFriendProfileFn } from "store/user-slice/userSlice";
export default function SecondUser() {
  const dispatch = useDispatch();
  const closeFriendProfile = () => {
    dispatch(showFriendProfileFn());
  };
  return (
    <div id="user-2">
      <img
        onClick={closeFriendProfile}
        className="close-friend-profile"
        src={close}
        alt=""
      />

      <img className="friend-2" src={user} alt="" />
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
    </div>
  );
}
