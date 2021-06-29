import React, { useState, useEffect, useContext } from 'react'
import gal1 from './img/gal1.jpg'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import { fetchUser, fetchSubmittedByUser, updateUserName, updateUserEmail } from "../Controller";
import { UserContext } from "../context/UserContext";

export const Account = () => {
  const [user, setUser] = useContext(UserContext)
  const [details, setDetails] = useState(false)
  const [contributions, setContributions] = useState(false)
  const [name, setName] = useState('')
  const [newemail, setNewemail] = useState('')
  const queryString = require('query-string');

  useEffect(() => {
    fetchUser(user.id).then(res => {
      setDetails(res);
      setUser(res)
    })
    fetchSubmittedByUser(user.id).then(res => {
      setContributions(res);
    })// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateName = () => {
    if (name === '') alert('Please fill out the Field')
    else {
      const newName = queryString.stringify({
        nickname: name
      })
      updateUserName(user.id, newName).then(res => {
        if (res) {
          alert('Your Name has been changed')
          window.location.reload()
        }
        else console.log('Oops, something went wrong...')
      })
    }
  }

  const updateMail = () => {
    if (newemail === '') alert('Please fill out the Field')
    else {
      const newValue = queryString.stringify({
        email: newemail
      })
      updateUserEmail(user.id, newValue).then(res => {
        if (res) {
          alert('Your Email has been changed')
          window.location.reload()
        }
        else console.log('Oops, something went wrong...')
      })
    }
  }

  return (
    <div>
      <Navbar />
      <main className="profile-page">
        {/* Top Background Section Start */}
        <section className="relative block" style={{ height: "500px" }}>
          <img className="absolute top-0 w-full h-full bg-center bg-cover" src={gal1} alt="Background galaxy" />
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
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        {/* Account Content Section Start */}
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
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
                      <Link to='/home'>
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
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {details.answered && details.answered}
                        </span>
                        <span className="text-sm text-gray-500">Questions Answered</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {details.correct && details.correct}
                        </span>
                        <span className="text-sm text-gray-500">Correctly Answered</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {details.answered && Math.round((details.correct) * 1000 / (details.answered)) / 10}%
                        </span>
                        <span className="text-sm text-gray-500">Percentage</span>
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
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      {/* Changing User Info */}
                      <form >
                        <div className="mt-1">
                          <input onChange={e => setName(e.target.value.trim())} className="text-black appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Change Nickname" />
                        </div>
                        <button
                          className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={updateName}
                        >
                          Change Nickname
                        </button>
                        <div className="mt-1">
                          <input onChange={e => setNewemail(e.target.value.trim())} type='email' className="text-black appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Change Email" />
                        </div>
                        <div>
                          <button
                            className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={updateMail}
                          >
                            Change Email
                          </button>
                        </div>
                        <div className="mt-1">
                          <input type='password' className="text-black appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Old Password" />
                        </div>
                        <div className="mt-1">
                          <input type='password' className="text-black appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="New Password" />
                        </div>
                        <div>
                          <button
                            className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                          >
                            Change Password
                          </button>
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

    </div>


  )
}