const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const MenuSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    }, 
    price : {
        type: Number, 
        required: true
    }, 
    taste: {
        type : String,
        enum:['sweet', 'spicy', 'sour'],
        required : true
    }, 
    is_drink: {
        type : Boolean,
        default : false
    }, 
    ingridients : {
        type : [String],
        default : [],
    },
    num_sales: {
        type : Number, 
        default : 0
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

MenuSchema.pre('save', async function(next) {
    const menu = this;
    if(!menu.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(menu.password, salt);
        menu.password = hashedPass;
        next();
    }
    catch(err) {
        return next(err);
    }
})

MenuSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password)
        return isMatch;
    }
    catch(err) {
        throw err;
    }
}

const menuItem = mongoose.model('menuItem', MenuSchema);
module.exports = menuItem