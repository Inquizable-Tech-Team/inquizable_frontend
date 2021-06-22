import React, { Fragment } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ user }) => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Fragment>
      {console.log(user)}
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
                    <Link to='/login' onClick={(() => localStorage.clear())}>Logout</Link>
                  </Fragment>}
                {user.admin===1 && <Link to='/admin'>Admin Pannel</Link>}
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
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
