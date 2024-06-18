const mongoose = require('mongoose')

const mongoURL = 'mongodb://localhost:27017/NodeJSHw';

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