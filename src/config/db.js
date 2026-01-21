const mongoose = require('mongoose');
require('dotenv').config()
const connectDB = async () => {
    console.log("mongoURl",process.env.MongoURL)
    try {
        await mongoose.connect(process.env.MongoURL);
        console.log("Connected!")
    } catch (error) {
        console.log("Error:", error)
        process.exit(1);
    }
}
module.exports = connectDB