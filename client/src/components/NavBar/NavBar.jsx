import UserButton from "../UserButton/UserButton";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <img src="/general/search.svg" alt="Search" />
        <input type="text" placeholder="Search" />
      </div>
      <UserButton />
    </div>
  );
};

export default NavBar;
