const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const db = require('./db')
const task = require('./models/task')
const menuItem = require('./models/menuItem')

app.get('/', (req, res) => {
    console.log("Welcome");
})

// GET method for menu
app.get('/menu', async (req, res) => {
    try {
        const data = await menuItem.find();
        console.log("Menu fetched");
        res.status(200).json(data);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({Error: "Internal Server Error"})
    }
})

// POST method for menu
app.post('/menu', async (req,res) => {
    try {
        const data = req.body;
        const menuItemData = new menuItem(data);
        const response = await menuItemData.save();
        console.log("Menu Saved")
        res.status(200).json(response)
    }
    catch(err) {
        console.log(err);
        res.status(500).json({Error: "Internal Server Error"})
    }
})

// GET method for task
app.get('/task', async (req, res) => {
    try {
        const data = await task.find();
        console.log("Task Fetched");
        res.status(200).json(data);
    }
    catch(err) {
        console.log(err)
        res.status(500).json({Error: "Internal Server Error"})
    }
})

// POST methood for task
app.post('/task', async (req, res) => {
    try {
        const data = req.body;
        const taskData = new task(data);
        const respose = await taskData.save();
        console.log("Task Saved");
        res.status(200).json(respose)
    }
    catch(err) {
        console.log(err)
        res.status(500).json({Error : "Internal Server Error"})
    }
})

app.listen(3000, () => {
    console.log("App is lisiting at port 3000");
})