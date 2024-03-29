import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import Admin from './components/Admin/Admin'
import { Account } from './components/Account'
import { Categories } from './components/Categories'
import { Quiz } from './components/Quiz'
import Contact from './components/Contact'
import { Submit } from './components/Submit'
import { Leaderboard } from './components/Leaderboard'
import About from './components/About'
import Impressum from './components/Impressum'
import Teams from './components/Teams'
import React, { useState, useEffect, useContext } from 'react'
import Footer from "./components/Footer";
import jwt_decode from 'jwt-decode'
import { UserContext } from './context/UserContext'
import PopupBtn from './components/Chat/popupBtn'


function Routing() {
  const [jwt, setJwt] = useState(false)
  const [user, setUser] = useContext(UserContext)

  let history = useHistory();

  /* Triggers at the Start and when the user logges in. Will decode the jwt Token and save it to Context */
  useEffect(() => {
    const token = localStorage.jwt
    if (token) {
      const decoded = jwt_decode(token)
/* If Token is expired Logout */
      if (Date.now() >= decoded.exp * 1000) {
        alert('Session expired, please login again')
        localStorage.clear()
        setUser({})
        history.push('./home')
        window.location.reload()
      } 
      else {/* Sets the Context with all this Information */
        setUser({
          id: decoded.user.rows[0].id,
          nickname: decoded.user.rows[0].nickname,
          email: decoded.user.rows[0].email,
          points: decoded.user.rows[0].points,
          answered: decoded.user.rows[0].answered,
          correct: decoded.user.rows[0].correct,
          admin: decoded.user.rows[0].admin
        })
      }
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwt])


  return (
    <div> {/* Routing System Starts here */}
      <Switch>
        <Route exact path="/">
          {/* <Redirect to="/home" /> */}
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login setJwt={setJwt} />
        </Route>
        <Route exact path="/admin"> {/* Admin Route */}
          {user.nickname && user.admin === 1 ? <Admin /> : <Login setJwt={setJwt} />}
        </Route>
        <Route exact path="/account">
          {user.nickname ? <Account /> : <Login setJwt={setJwt} />}
        </Route>
        <Route exact path="/categories">
          {user.nickname ? <Categories /> : <Login setJwt={setJwt} />}
        </Route>
        <Route exact path="/quiz/:qId">
          {user.nickname ? <Quiz /> : <Login setJwt={setJwt} />}
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/submit">
          {user.nickname ? <Submit /> : <Login setJwt={setJwt} />}
        </Route>
        <Route exact path="/leaderboard">
          {user.nickname ? <Leaderboard /> : <Login setJwt={setJwt} />}
        </Route>
       <Route exact path="/about">
         <About />
        </Route>
        <Route exact path="/impressum">
        <Impressum />
        </Route>
        <Route exact path="/team">
        <Teams />
        </Route>
        <Route path="*"> {/* Redirect to bring you to the homepage if page does not exist */}
          <Redirect to="/home" />
        </Route>
      </Switch>
      {user.nickname && <PopupBtn />} {/* Chat Window Button */}
      <Footer />
    </div>
  );
}



export default Routing;
