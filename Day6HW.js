const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const db = require('./db')

app.get('/', (req, res) => {
    res.send('Welcome');
})

const menuRouter = require('./routers/menuRoute')
app.use('/menu', menuRouter);


app.listen(3000, () => {
    console.log('App is lisiting at port 3000');
})