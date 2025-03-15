import { useState } from "react";
import "./UserButton.css";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  //Temp user
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="User" />
      <img
        src="/general/arrow.svg"
        alt="Arrow"
        className="arrowButton"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Settings</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / sign Up
    </a>
  );
};

export default UserButton;
