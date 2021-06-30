import React, { useState, useEffect, useContext } from "react";
import gal1 from "./img/gal1.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {
  fetchUser,
  fetchSubmittedByUser,
  updateUserName,
  updateUserEmail,
  updateUserPw,
} from "../Controller";
import { UserContext } from "../context/UserContext";

export const Account = () => {
  const [user, setUser] = useContext(UserContext);
  const [details, setDetails] = useState(false);
  const [contributions, setContributions] = useState(false);
  const [name, setName] = useState("");
  const [newemail, setNewemail] = useState("");
  const [oldPw, setOldPw] = useState("");
  const [newPass, setNewPass] = useState("");
  const queryString = require("query-string");

  useEffect(() => {
    fetchUser(user.id).then((res) => {
      setDetails(res);
      setUser(res);
    });
    fetchSubmittedByUser(user.id).then((res) => {
      setContributions(res);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateName = () => {
    if (name === "") alert("Please fill out the Field");
    else {
      const newName = queryString.stringify({
        nickname: name,
      });
      updateUserName(user.id, newName).then((res) => {
        if (res) {
          alert("Your Name has been changed");
          window.location.reload();
        } else alert("Oops, something went wrong...");
      });
    }
  };

  const updateMail = () => {
    if (newemail === "") alert("Please fill out the Field");
    else {
      const newValue = queryString.stringify({
        email: newemail,
      });
      updateUserEmail(user.id, newValue).then((res) => {
        if (res) {
          alert("Your Email has been changed");
          window.location.reload();
        } else alert("Oops, something went wrong...");
      });
    }
  };

  const updatePassword = () => {
    if (oldPw === "" || newPass === "") alert("Please fill out all Fields");
    else {
      const passInfo = queryString.stringify({
        email: details.email,
        newPw: newPass,
        pw: oldPw,
      });
      updateUserPw(user.id, passInfo).then((res) => {
        if (res) {
          alert("Your Password has been changed");
          window.location.reload();
        } else alert("Oops, something went wrong...");
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="profile-page">
        {/* Top Background Section Start */}
        <section className="relative block" style={{ height: "500px" }}>
          <img
            className="absolute top-0 w-full h-full bg-center bg-cover"
            src={gal1}
            alt="Background galaxy"
          />
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 100 2560 100 100 100"
              ></polygon>
            </svg>
          </div>
        </section>
        {/* Account Content Section Start */}
        <section className="relative py-16 Bg-Color">
          <div className="container xs:mx-auto sm:mx-auto  md:mx-auto px-4 xs:w-5/5 sm:w-4/5 md:w-4/5">
            <div className="relative flex flex-col min-w-0 break-words bg-white xs:w-full sm:w-full md:w-full lg:w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      {/*                       <img
                        alt="..."
                        src={Profilepic}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      /> */}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Link to="/home">
                        <button
                          className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Back To Home
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="xs:block sm:block md:flex lg:flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {details.answered ? details.answered : 0}
                        </span>
                        <span className="text-sm text-gray-500">
                          Questions Answered
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {details.correct ? details.correct : 0}
                        </span>
                        <span className="text-sm text-gray-500">
                          Correctly Answered
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {details.correct
                            ? Math.round(
                                (details.correct * 1000) / details.answered
                              ) / 10
                            : 0}
                          %
                        </span>
                        <span className="text-sm text-gray-500">
                          Percentage
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Displaying User Info */}
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                    {details.nickname && details.nickname}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold">
                    <i className="fas fa-envelope mr-2 text-lg text-gray-500"></i>
                    {details.email && details.email}
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-star mr-2 text-lg text-gray-500"></i>
                    Points: {details.points && details.points}
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-check mr-2 text-lg text-gray-500"></i>
                    Contributions: {contributions && contributions}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center xs:block sm:block md:flex lg:flex">
                    <div className="w-full lg:w-10/12 px-4">
                      {/* Changing User Info */}
                      <form className="xs:block sm:block md:flex lg:flex md:flex-wrap lg:flex-wrap">
                        <div className="mt-1">
                          <input
                            onChange={(e) => setName(e.target.value.trim())}
                            className="text-black appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Change Nickname"
                          />
                        </div>
                        <button
                          className="xs:mt-1 sm:mt-1 md:mt-2 md:ml-2 lg:ml-2 bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={updateName}
                        >
                          Change Nickname
                        </button>
                        <div className="xs:mt-1 sm:mt-1 md:mt-1 lg:mt-1 md:ml-6 lg:ml-8">
                          <input
                            onChange={(e) => setNewemail(e.target.value.trim())}
                            type="email"
                            className="text-black appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Change Email"
                          />
                        </div>
                        <div>
                          <button
                            className="xs:mt-1 sm:mt-1 md:mt-2 md:ml-2 lg:ml-2 bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={updateMail}
                          >
                            Change Email
                          </button>
                        </div>
                        <div className="xs:block sm:block md:flex lg:flex xs:mt-2 sm:mt-2 md:mt-6 lg:mt-6">
                          <div className="xs:mt-1 sm:mt-1 md:mt-1 lg:mt-1">
                            <input
                              onChange={(e) => setOldPw(e.target.value)}
                              type="password"
                              className="text-black appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              placeholder="Old Password"
                            />
                          </div>
                          <div className="xs:mt-1 sm:mt-1 md:mt-1 lg:mt-1 md:ml-2">
                            <input
                              onChange={(e) => setNewPass(e.target.value)}
                              type="password"
                              className="text-black appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              placeholder="New Password"
                            />
                          </div>
                          <div>
                            <button
                              className="xs:mt-1 sm:mt-1 md:mt-2 lg:mt-2 xs:ml-0 sm:ml-0 md:ml-2 bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                              type="button"
                              style={{ transition: "all .15s ease" }}
                              onClick={updatePassword}
                            >
                              Change Password
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
