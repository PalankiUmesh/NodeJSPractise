const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const db = require('./db')
require('dotenv').config()
const passport = require('./auth')

const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`);
    next();
}

app.use(passport.initialize())
const localAuthMiddleware = passport.authenticate('local', {session : false});

app.use(logRequest);
app.get('/', localAuthMiddleware, (req, res) => {
    res.send('Welcome');
})

const menuRouter = require('./routers/menuRoute')
app.use('/menu', menuRouter);

PORT = process.env.PORT || 2000
app.listen(PORT, () => {
    console.log('App is lisiting at port ',PORT);
})