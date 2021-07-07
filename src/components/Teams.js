import React from "react";
import { useLocation } from "react-router-dom";
import "./Teams.css";
import OEPIC from '../images/oe.jpg'
import MATPIC from '../images/mat.jpg'
import DIPPIC from '../images/dip.jpg'
import JOEPIC from '../images/joe.jpg'
import BRIANPIC from '../images/brian.jpg'
import Navbar from "./Navbar";

export default function Teams() {
  let location = useLocation();
  return (
    <>
      {location.pathname.toLowerCase()==='/team' && <Navbar />} {/* Only display Navbar if path is /team */}
      <h1 className="text-center mt-10">The Inquizable-Tech-Team</h1>
      {/* Start of Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 mb-12">
        {/* Ömer */}
        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              src={OEPIC}
              alt="Ömer Ügür Profile"
              className="h-full w-full"
            />
          </div>
          <h2 className="mt-4 font-bold text-xl TeamColor">Ömer Ügür</h2>
          <h6 className="mt-2 text-sm font-medium TeamColor">Founder</h6>
          <p className="text-xs text-gray-500 text-center mt-3">
            Full-Stack Web App Developer <br />
            Passionated Quiz Gamer. Loves Challenges!
          </p>
          <ul className="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href="https://github.com/oemerueguer"
                target="_blank"
                rel="noreferrer"
                className="IconEffect flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://de.linkedin.com/in/%C3%B6mer-%C3%BCg%C3%BCr-83546163"
                target="_blank"
                rel="noreferrer"
                className="IconEffect flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        {/* Matthias */}
        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              src={MATPIC}
              alt="Matthias v. Schmettow Profile"
              className="h-full w-full"
            />
          </div>
          <h2 className="mt-4 font-bold text-xl TeamColor">Matthias v. Schmettow</h2>
          <h6 className="mt-2 text-sm font-medium TeamColor">Co-Founder</h6>
          <p className="text-xs text-gray-500 text-center mt-3">
          Full-Stack Web App Developer <br />
          Inquizer by conviction. Loves to see the community grow!
          </p>
          <ul className="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href="https://github.com/MatthiasvsGitHub"
                target="_blank"
                rel="noreferrer"
                className="IconEffect flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://de.linkedin.com/in/matthias-von-schmettow"
                target="_blank"
                rel="noreferrer"
                className="IconEffect flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        {/* Dipali */}
        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              src={DIPPIC}
              alt="Dipali Bedarkar Profile"
              className="h-full w-full"
            />
          </div>
          <h2 className="mt-4 font-bold text-xl TeamColor">Dipali Bedarkar</h2>
          <h6 className="mt-2 text-sm font-medium TeamColor">Co-Founder</h6>
          <p className="text-xs text-gray-500 text-center mt-3">
          Full-Stack Web App Developer <br />
          Enjoy the game and have fun. Just be inquizable!
          </p>
          <ul className="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href="https://github.com/Dipalibedarkar"
                target="_blank"
                rel="noreferrer"
                className="IconEffect flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://de.linkedin.com/in/dipali-bedarkar-944018138"
                target="_blank"
                rel="noreferrer"
                className="IconEffect flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        {/* Joey */}
        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              src={JOEPIC}
              alt="Joey Ammar Profile"
              className="h-full w-full"
            />
          </div>
          <h2 className="mt-4 font-bold text-xl TeamColor">Joey Ammar</h2>
          <h6 className="mt-2 text-sm font-medium TeamColor">Co-Founder</h6>
          <p className="text-xs text-gray-500 text-center mt-3">
          Full-Stack Web App Developer <br />
          Always eager to learn something new.
          </p>
          <ul className="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href="https://github.com/joey-ammar"
                target="_blank"
                rel="noreferrer"
                className="IconEffect flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://de.linkedin.com/in/joey-ammar"
                target="_blank"
                rel="noreferrer"
                className="IconEffect flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        {/* Brian */}
        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              src={BRIANPIC}
              alt="Brian Cordisco Profile"
              className="h-full w-full"
            />
          </div>
          <h2 className="mt-4 font-bold text-xl TeamColor">Brian Cordisco</h2>
          <h6 className="mt-2 text-sm font-medium TeamColor">Co-Founder</h6>
          <p className="text-xs text-gray-500 text-center mt-3">
            Full-Stack Web App Developer <br />
            Best platform to expand your knowledge and have fun while doing it.  Made for the inquizative mind!
          </p>
          <ul className="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href="https://github.com/desiredstate2021"
                target="_blank"
                rel="noreferrer"
                className="IconEffect flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://de.linkedin.com/in/brian-cordisco-500250205"
                target="_blank"
                rel="noreferrer"
                className="IconEffect flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
