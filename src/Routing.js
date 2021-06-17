import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {Home} from './components/Home'
import {Login} from './components/Login'
import {Admin} from './components/Admin'
import {Account} from './components/Account'
import {Categories} from './components/Categories'
import {Quiz} from './components/Quiz'
import {Contact} from './components/Contact'
import {Submit} from './components/Submit'
import {Leaderboard} from './components/Leaderboard'
import {About} from './components/About'
import {Questions} from './components/QuizPart/Questions'
import {Overview} from './components/QuizPart/Overview'


function Routing() {
  return (
  
    <div>
    {/*  <h1 className='animate-bounce'>Hello World</h1> */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/quiz/:qId">
          <Quiz />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/submit">
          <Submit />
        </Route>
        <Route exact path="/leaderboard">
          <Leaderboard />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/questions">
          <Questions />
        </Route>
        <Route exact path="/overview">
          <Overview />
        </Route>        
      </Switch>
    </div>
    
  );
}

export default Routing;
