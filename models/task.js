const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
        unique : true
    }, 
    description : {
        type : String,
        required : true
    }, 
    priority: {
        type : String, 
        enum : ['High', 'Medium', 'Low'],
        default: 'Medium'
    },
    dueDate : {
        type : Date,
        required : true
    }
})

const task = mongoose.model('task', taskSchema)
module.exports = task