const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
    email: String  
})

const Email = mongoose.model('email', emailSchema);

module.exports = Email;