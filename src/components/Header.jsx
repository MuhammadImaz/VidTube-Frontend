import React from "react";
import "./Header.css";
import logo from "E:/Front-end/youtube/src/Assets/logo.png";
import SearchIcon from "E:/Front-end/youtube/src/Assets/search.png";
import Upload from "E:/Front-end/youtube/src/Assets/upload.png";
import More from "E:/Front-end/youtube/src/Assets/more.png";
import Notifications from "E:/Front-end/youtube/src/Assets/notification.png";
import Profile from "E:/Front-end/youtube/src/Assets/jack.png";
import menu from "E:/Front-end/youtube/src/Assets/menu.png";

function Header() {
  return (
    <div className="Header">
      <div className="Left-Side">
        <img src={menu} alt="Search" className="search-icon" />
        <div className="img">
          <img src={logo} alt="" title="Youtube"></img>
        </div>
      </div>

      <div className="search">
        <input type="text" placeholder="Search" />

        <div className="icon">
          <img src={SearchIcon} alt="Search" className="search-icon" />
        </div>
      </div>

      <div className="Right-Side">
        <img src={Upload} alt="Search" className="search-icon" />
        <img src={More} alt="Search" className="search-icon" />

        <img src={Notifications} alt="Search" className="search-icon" />
        <img src={Profile} alt="Search" className="search-icon" />
      </div>
    </div>
  );
}

export default Header;
