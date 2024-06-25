const express = require('express')
const app = express();
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const menuItem = require('./models/menuItem')

passport.use(new LocalStrategy(async (un, pwd, done) => {
    try {
        const user = await menuItem.findOne({username : un});
        if(!user) return done(null, false, {message : 'Invalid username'})
        const isPasswordMatched = await user.comparePassword(pwd);
        if(isPasswordMatched) return done(null, user);
        else return done(null, false, {message : 'Invalid Password'})
    }
    catch(err) {
        return done(err);
    }
}))

module.exports = passport;