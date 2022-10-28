import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isScroll, setScroll] = useState(false);

  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => setScroll((window.onscroll = null));
  };
  return (
    <div className={isScroll ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png?20170904093427"
            alt="Netflix_image"
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icons" />
          <span>KID</span>

          <NotificationsIcon className="icons" />
          <img
            src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis="
            alt="profile_pic"
          />
          <div className="profile">
            <ArrowDropDownIcon className="icons" />
            <div className="options">
              <span>Settings</span>
              <span>LogOut</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
