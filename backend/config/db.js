require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI_SHOPPING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB connection SUCCESS");

    } catch(err) {
        console.error("MongoDB connection FAIL");
        process.exit(1);

    }
}

module.exports = connectDB;