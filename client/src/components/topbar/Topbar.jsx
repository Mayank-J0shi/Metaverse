import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate()
  const { user,dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const logoutHandler = (e) => {
    dispatch({ type: "LOGIN_START"});
    navigate("/");
  };

  const chatIconClickHandler=()=>{
    navigate("messenger");
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Metaverse</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <Link  to="/" style={{ textDecoration: "none", color: "white" }}>
          <span className="topbarLink">Homepage</span>
        </Link>
        <Link to={`/profile/${user.username}`} style={{ textDecoration: "none", color: "white" }}>
          <span className="topbarLink">Timeline</span>
        </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat onClick={chatIconClickHandler}/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.jpg"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
        <button className="logoutButton" onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
}