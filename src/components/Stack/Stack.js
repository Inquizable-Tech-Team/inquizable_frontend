import React from "react";
import "./Stack.css";
import ReactLogo from "../img/reactjs.png";
import TailwindLogo from "../img/tailwind.png";
import MySQLLogo from "../img/MySQL.png";

export default function Stack() {
  return (
    <>
      <div className="text-center mb-4">
        <h1>Tech Stacks</h1>
      </div>
      <div className="max-w-md mx-auto bg-white xs:block sm:block md:flex lg:flex rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={ReactLogo}
              alt="React Logo"
            />
          </div>
          <div className="p-8">
            <div className="StackColor uppercase tracking-wide text-sm">
              <h1 className="StackColor font-bold">ReactJS</h1>
            </div>
            <p className="mt-2 text-gray-500">
              React (also known as React.js or ReactJS) is a free and
              open-source front-end JavaScript library for building user
              interfaces or UI components. It is maintained by Facebook and a
              community of individual developers and companies. React can be
              used as a base in the development of single-page or mobile
              applications.
            </p>
            <a
              href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
              target="_blank"
              rel="noreferrer"
            >
              <button className="StackColor ml-auto mt-2 flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
                <span>Read more</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white xs:block sm:block md:flex lg:flex rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={TailwindLogo}
              alt="Tailwind Logo"
            />
          </div>
          <div className="p-8">
            <div className="StackColor uppercase tracking-wide text-sm">
              <h1 className="StackColor font-bold">Tailwind CSS</h1>
            </div>
            <p className="mt-2 text-gray-500">
              A utility-first CSS framework for rapid UI development. Created by
              @adamwathan , developed in collaboration with @reinink ,
              @steveschoger , and @davidhemphill .
            </p>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <button className="StackColor ml-auto mt-2 flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
                <span>Read more</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white xs:block sm:block md:flex lg:flex rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={MySQLLogo}
              alt="MySQL Logo"
            />
          </div>
          <div className="p-8">
            <div className="StackColor uppercase tracking-wide text-sm">
              <h1 className="StackColor font-bold">MySQL</h1>
            </div>
            <p className="mt-2 text-gray-500">
              MySQL is an open-source relational database management system
              (RDBMS). Its name is a combination of "My", the name of co-founder
              Michael Widenius's daughter, and "SQL", the abbreviation for
              Structured Query Language. A relational database organizes data
              into one or more data tables in which data types may be related to
              each other; these relations help structure the data. SQL is a
              language programmers use to create, modify and extract data from
              the relational database, as well as control user access to the
              database.
            </p>
            <a href="https://en.wikipedia.org/wiki/MySQL" target="_blank" rel="noreferrer">
              <button className="StackColor ml-auto mt-2 flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
                <span>Read more</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
