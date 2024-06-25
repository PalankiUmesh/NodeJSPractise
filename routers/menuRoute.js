const express = require('express')
const router = express.Router();
const menuItem = require('./../models/menuItem')
const {jwdAuthMiddleware, generateToken} = require('./../jwt');

router.get('/', jwdAuthMiddleware, async (req, res) => {
    try {
        const data = await menuItem.find();
        console.log('Menu fetched');
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
        res.status(500).json({Error: 'Internal server error'})
    }
})

router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await menuItem.findOne({username : username})
        if(!user || !(user.comparePassword(password))) return res.status(401).json({Error : 'Invalid username or password'})
        const payload = {
            id : user.id,
            username : user.username
        }
        const token = generateToken(payload)
        res.status(200).json({user: user, token : token}) 
    }
    catch(err) {
        console.log(err);
        res.status(500).json({Error : 'Internal server error'})
    }
})

router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const dataSave = new menuItem(data);
        const response = await dataSave.save();
        const payload = {
            id : response.id,
            username : response.username
        } 
        const token = generateToken(payload)
        console.log('Data saved');
        res.status(200).json({response : response, token : token})
    }
    catch(err) {
        console.log(err);
        res.status(500).json({Error: 'Internal server error'})
    }
})

router.get('/:taste', async (req, res) => {
    try {
        const tasteType = req.params.taste;
        if(tasteType == 'spicy' || tasteType == 'sour' || tasteType == 'sweet') {
            const response = await menuItem.find({taste : tasteType})
            console.log('Menu fetched');
            res.status(200).json(response)
        } else {
            res.status(404).json({Error : 'Invalid taste type'})
        }
    }
    catch(err) {
        console.log(err);
        res.status(500).json({Error : 'Internal server error'})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        const menuUpdatedData = req.body;
        const response = await menuItem.findByIdAndUpdate(menuId, menuUpdatedData, {
            new : true,
            runValidators : true
        })
        if(!response) {
            res.status(404).json({Error: 'Invalid menu Id'})
        }
        console.log('Item fetched')
        res.status(200).json(response)
    }
    catch(err) {
        console.log(err)
        res.status(500).json({Error : 'Internal server error'})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        const response = await menuItem.findByIdAndDelete(menuId);
        if(!response) {
            res.status(404).json({Error : 'Invalid menu id'})
        }
        console.log('Menu deleted')
        res.status(200).json({message : 'Menu item deleted'})
    }
    catch(err) {
        console.log(err)
        res.status(500).json({Error : 'Internal server error'})
    }
})

module.exports = router;