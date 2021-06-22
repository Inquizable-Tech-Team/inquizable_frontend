import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <div className="Navbar">
        <div
          onClick={onToggle}
          className={
            toggle
              ? "change"
              : "navbar1" && "navbar2" && "navbar3" && "NavbarInside"
          }
        >
          <div className="navBar1"></div>
          <div className="navBar2"></div>
          <div className="navBar3"></div>
        </div>
        {toggle ? (
          <React.Fragment>
            <div className="NavShow">
              <div className="Linkss">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Quiz</Link>
                <Link>Contact</Link>
              </div>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
};
export default Navbar;
