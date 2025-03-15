import "./sideBar.css";
import logo from "../../../public/general/logo.png";
import homeIcon from "../../../public/general/home.svg";
import createIcon from "../../../public/general/create.svg";
import updateIcon from "../../../public/general/updates.svg";
import messageIcon from "../../../public/general/messages.svg";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="menuIcons">
        <a href="" className="menuIcon">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <a href="" className="menuIcon">
          <img src={homeIcon} alt="Home" />
        </a>
        <a href="" className="menuIcon">
          <img src={createIcon} alt="Create" />
        </a>
        <a href="" className="menuIcon">
          <img src={updateIcon} alt="Update" />
        </a>
        <a href="" className="menuIcon">
          <img src={messageIcon} alt="Message" />
        </a>
      </div>
      <a href="" className="menuIcon">
        <img src="/general/settings.svg" alt="Logo" />
      </a>
    </div>
  );
};

export default SideBar;
