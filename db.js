const mongoose = require('mongoose')
require('dotenv').config()

const mongoURL = 'mongodb://localhost:27017/NodeJSHw';
// const mongoURL = process.env.mongoDB_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Database connected")
});
db.on('disconnected', () => {
    console.log("Database disconnected")
})
db.on('error', (err) => {
    console.log(err);
})

module.exports = db;