const express = require("express");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-auth");
const keys = require("../config");
const chalk = require("chalk");
let = {};

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

// using Github login
passport.use(new GithubStrategy({
    clientID: keys.GITHUB.clientID,
    clientSecret: keys.GITHUB.clientSecret,
    callbackURL: "/auth/github/callback"
},
(accessToken, refreshToken, profile, cb) => {
    console.log(chalk.blue(JSON.stringify(profile)));
    user = { ...profile };
    return cb(null, profile);
}));


// using Google Login

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE.clientID,
      clientSecret: keys.GOOGLE.clientSecret,
      callbackUrl: "/auth/google/callback",
    },

    (accesToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

const app = express();
app.use(cors());
app.use(passport.initialize());


app.get("/auth/github", passport.authenticate("github"));
app.get("/auth/github/callback",
    passport.authenticate("github"),
    (req, res) => {
        res.redirect("/profile");
    });


app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/profile");
  }
);
