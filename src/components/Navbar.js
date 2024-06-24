import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import axios from "axios";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [Likes, setLikes] = useState(null);
  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };
  const likes = async () => {
    const response = await axios.get("https://likes-server.vercel.app/likes");
    const data = await response.data;
    const lengthh = await data.length;
    setLikes(lengthh);
    console.log(Likes);
  };
  useEffect(() => {
    likes();
  }, []);

  return (
    <div className="Navbar App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <span className="L">L</span>
        <p>Lavaraju</p>
      </div>
      <div className="nav-menu">
        <ul>
          <li style={{ marginRight: "20px" }}>
            <FcLike
              style={{
                top: "18px",
                position: "absolute",
              }}
            />
            <i
              style={{
                fontSize: "10px",
                fontWeight: "1000",
                color: "black",
                position: "absolute",
                top: "18px",
                marginLeft: "14px",
                backgroundColor: "black",
                color: "aquamarine",
                borderRadius: "50%",
                padding: "1px",
              }}
            >
              {Likes}
            </i>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-menu">
        <li onClick={toggleHandler}>
          <FcLike style={{ marginRight: "26px" }} />
          <i
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              marginRight: "56px",
              marginTop: "18px",
              backgroundColor: "black",
              color: "aquamarine",
              fontSize: "8px",
              fontWeight: "1000",
              padding: "1px",
              borderRadius: "50%",
            }}
          >
            {Likes}
          </i>
          <FiMenu />
        </li>
        <div className={toggleMenu ? "showmenu" : "hidemenu"}>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
