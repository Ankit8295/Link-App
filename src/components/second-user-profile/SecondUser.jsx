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
      <div>
        <img className="friend-img" src={user} alt="" />
        <h2>Ijrdo Developer</h2>
        <h2>This is about</h2>
      </div>

      <div>
        <button>Clear Chat</button>
        <button>Block & Report</button>
        <button>Remove Friend</button>
      </div>
    </div>
  );
}
