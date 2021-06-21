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
import {useState, useEffect} from 'react'
import Footer from "./components/Footer";
import jwt_decode from 'jwt-decode'

function Routing() {
  const [jwt, setJwt] = useState(false)
  const [user, setUser] = useState(false)


let history = useHistory();


  useEffect(() => {
    if (jwt) {
      const decoded = jwt_decode(jwt)
      if (Date.now() >= decoded.exp*1000) {
        alert('Session expired, please login again')
        localStorage.clear()
        setUser(false)
        setJwt(false)
        history.push('./login')
      }
      else if (decoded.user) {
        setUser(decoded.user.rows[0])
        console.log(decoded.user.rows[0])
      }
      else {
        localStorage.clear()
        setUser(false)
        setJwt(false)
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
          <Login jwt={jwt} setJwt={setJwt}/>
        </Route>
        <Route exact path="/admin">
          <Admin user={user} />
        </Route>
        <Route exact path="/account">
          <Account user={user} />
        </Route>
        <Route exact path="/categories">
          <Categories user={user} />
        </Route>
        <Route exact path="/quiz/:qId">
          <Quiz user={user} />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/submit">
          <Submit user={user} />
        </Route>
        <Route exact path="/leaderboard">
          <Leaderboard user={user} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default Routing;
