import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Logo from './img/logo.png'
import BrainIMG from './img/brain.jpg'
import {loginFunction, registrationFunction} from '../Controller'

const queryString = require('query-string');

export const Login = ({ setJwt }) => {
const [email, setEmail] = useState('')
const [name, setName] = useState('')
const [password, setPassword] = useState('')

let history = useHistory();
/* Function happens on click "signin" */
const signIn = (e) => {
  e.preventDefault();
  const user = queryString.stringify({
    email: email,
    pw: password
  });
  loginFunction(user).then(res => {
    if (res === 'Email does not exists') alert('Email does not exist');
    else if (res) {
      localStorage.setItem("jwt", res);
      setJwt(res); /* Will trigger useEffect in App.js to decode the token from LocalStorage */
      history.push('./categories');/* Redirect to start a game if successfully logged in */
    }
    else alert('Oops, something went wrong...');
  })
}
/* Function happens on click "register" */
const register = (e) => {
  e.preventDefault()
  const newUser = queryString.stringify({
    nickname: name,
    email: email,
    pw: password,
    points: 10
  })
  registrationFunction(newUser).then(res => {
    if (res === 'Email already exists') alert('Email already exists')
    else if (res) {
      alert('User created, please login now')
      document.getElementById("registerForm").reset()
    }
    else alert('Oops, something went wrong...')
  })
}
  
    return (
      <div className="min-h-screen bg-white flex">
      <div className="hidden lg:block relative w-0 flex-1">
        <a href="/home">
      <img className="absolute inset-0 h-full w-full object-cover" src={BrainIMG} alt=""/>
      </a>
    </div>
    <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img  src={Logo} alt="Workflow"/>
        </div>
        <div className="mt-8">
          <div className="mt-6">
            <form className="space-y-6" autoComplete="off" onSubmit={register} id='registerForm'>
            <h2 className="xs:text-left sm:text-left md:text-left font-bold text-gray-700">You can register here:</h2>
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input onChange={((e) => setName(e.target.value))} id="name" name="name" type="name" autoComplete="name" required className="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input onChange={((e) => setEmail(e.target.value))} id="email" name="email" type="email" autoComplete="email" required className="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input onChange={((e) => setPassword(e.target.value))} id="password" name="password" type="password" autoComplete="current-password" required className="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
              </div>
              <div>
                <input type="submit" value='Register' className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
              </div>
              </form>
              <h2 className="xs:text-left sm:text-left md:text-left font-bold text-gray-700 mt-5 mb-5">You can log in here:</h2>
              <form className="space-y-6" autoComplete="off" onSubmit={signIn}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">
                  Email address
                </label>
                <div className="mt-1">
                  <input onChange={((e) => setEmail(e.target.value))}id="email" name="email" type="email" autoComplete="email" required className="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input onChange={((e) => setPassword(e.target.value))} id="password" name="password" type="password" autoComplete="current-password" required className="text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
              </div>
              <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                 <h1>Forgot your password?</h1>
              
              </div>
            </div>
              <div>
                <input type="submit" value='Sign in' className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  
    )
}
