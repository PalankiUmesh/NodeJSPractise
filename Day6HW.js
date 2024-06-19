const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const db = require('./db')
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Welcome');
})

const menuRouter = require('./routers/menuRoute')
app.use('/menu', menuRouter);

PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('App is lisiting at port 3000');
})