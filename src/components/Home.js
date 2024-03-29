import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Workflow from './HomePart/Workflow';
import CTA from './HomePart/Cta';
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import About from './About'
import { UserContext } from "../context/UserContext";
import Logo from './img/LogoSmall.png'
import LaptopImg from '../images/laptop.webp'

const navigation = [
  { name: "Home", href: "./home" },
  { name: "Company", href: "./about" },
  { name: "Contact", href: "./contact" },
];

export const Home = () => {
  const [user] = useContext(UserContext)

  return (
    <div>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,50 50,100 0,100" />
          </svg>

          <Popover>
            {({ open }) => (
              <div>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="/home">
                          <span className="sr-only">Inquizable</span>
                          <img
                            className="h-8 w-auto sm:h-14 md:visible"
                            src={Logo}
                            alt='Inquizable Logo'
                          />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="font-medium text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                      {user.nickname ?
                      <Link
                      to="./categories"
                      className="signUp font-medium text-indigo-600 hover:text-indigo-500"
                    >
                     Continue
                    </Link>
                      : 
                      <Link
                        to="./login"
                        className="signUp font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Sign Up
                      </Link>}
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src={Logo}
                            alt="Inquizable Logo"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      {user.nickname ?
                      <Link
                      to="./categories"
                      className="signUp block w-full px-5 py-3 text-center font-medium text-indigo-600  hover:bg-gray-100"
                    >
                      Continue
                    </Link>
                      :
                      <Link
                        to="./login"
                        className="signUp block w-full px-5 py-3 text-center font-medium text-indigo-600  hover:bg-gray-100"
                      >
                        Sign Up
                      </Link>}
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            )}
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">A fun learning platform</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  where anyone can contribute
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Create your own gamified quiz and contribute to our platform.
                Challenge your relatives, friends and yourself. <br/>
                And become an Inquizer!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="../categories"
                    className=" Start-Btn w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  {!user.nickname && <Link
                    to="./login"
                    className="LogIn-Btn w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  md:py-4 md:text-lg md:px-10"
                  >
                    Log In
                  </Link>}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          rel="preload"
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full headerPic"
          src={LaptopImg}
          alt="Man with Laptop"
        />
      </div>
    </div>
      <Workflow />
      <About />
      <CTA />
      </div>
  );
};
