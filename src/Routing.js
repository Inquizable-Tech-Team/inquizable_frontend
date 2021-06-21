import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import {Home} from './components/Home'
import {Login} from './components/Login'
import {Admin} from './components/Admin'
import {Account} from './components/Account'
import {Categories} from './components/Categories'
import {Quiz} from './components/Quiz'
import Contact from './components/Contact'
import {Submit} from './components/Submit'
import {Leaderboard} from './components/Leaderboard'
import About from './components/About'
import React, {useState, useEffect} from 'react'
import Footer from "./components/Footer";
import jwt_decode from 'jwt-decode'

function Routing() {
  const [jwt, setJwt] = useState(false)
  const [profileHooks, setProfileHooks] = useState({})
  let history = useHistory();
useEffect(() => {
  const token = localStorage.jwt
  if (token) {
      const decoded = jwt_decode(token)
      if (Date.now() >= decoded.exp*1000) {
        alert('Session expired, please login again')
        localStorage.clear()
        history.push('./login')
      }
      else {
          setProfileHooks({
          id: decoded.user.rows[0].id,
          nickname: decoded.user.rows[0].nickname,
          email: decoded.user.rows[0].email,
          points: decoded.user.rows[0].points,
          answered: decoded.user.rows[0].answered,
          correct: decoded.user.rows[0].correct,
          admin: decoded.user.rows[0].admin
      })
      }
  }
}, [jwt])


  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login setJwt={setJwt}/>
        </Route>
        <Route exact path="/admin">
        {profileHooks.nickname && profileHooks.admin===1 ? <Admin user={profileHooks}/> : <Home />}
        </Route>
        <Route exact path="/account">
        {profileHooks.nickname ? <Account user={profileHooks}/> : <Login />}
        </Route>
        <Route exact path="/categories">
         {profileHooks.nickname ? <Categories user={profileHooks}/> : <Login />}
        </Route>
        <Route exact path="/quiz/:qId">
        {profileHooks.nickname ? <Quiz user={profileHooks}/> : <Login />}
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/submit">
        {profileHooks.nickname ? <Submit user={profileHooks}/> : <Login />}
        </Route>
        <Route exact path="/leaderboard">
        {profileHooks.nickname ? <Leaderboard user={profileHooks}/> : <Login />}
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/:anything?">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default Routing;
