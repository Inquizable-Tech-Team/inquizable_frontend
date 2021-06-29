import React, { Fragment, useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [user] = useContext(UserContext)
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Fragment>
      <div className="Navbar xs:ml-6 sm:ml-4">
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
          <Fragment>
            <div className="NavShow">
              <div className="Linkss">
                <Link to='/home'>Home</Link>
                {!user.nickname && <Link to='/login'>Login & Register</Link>}
                {user.nickname &&
                  <Fragment>
                    <Link to='/categories'>Start a Quiz</Link>
                    <Link to='/leaderboard'>Leaderboard</Link>
                    <Link to='/submit'>Submit a Question</Link>
                    <Link to='/account'>Account</Link>
                  </Fragment>}
                {user.admin===1 && <Link to='/admin'>Admin Pannel</Link>}
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                {user.nickname && <Link to='/login' onClick={(() => localStorage.clear())}>Logout</Link>}
              </div>
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};
export default Navbar;
