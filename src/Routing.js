import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Admin } from "./components/Admin";
import { Account } from "./components/Account";
import { Categories } from "./components/Categories";
import { Quiz } from "./components/Quiz";
import Contact from "./components/Contact";
import { Submit } from "./components/Submit";
import { Leaderboard } from "./components/Leaderboard";
import About from "./components/About";
import Footer from "./components/Footer";
function Routing() {
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
        <Route exact path="/quiz">
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
        <Route exact path="/footer">
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default Routing;
