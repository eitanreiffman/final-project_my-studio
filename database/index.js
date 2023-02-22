// Instantiating Mongoose, which we installed
const mongoose = require('mongoose');

// Asynchronous function to connect to our MongoDB database
const connectDB = async () => {
    // Setting our Mongoose StrictQuery to false due to a deprecation warning from Mongoose - will be default across the board in Mongoose 7
    mongoose.set('strictQuery', false)
    // Instantiating our Mongoose-MongoDB connection
    // Calling our hidden MONGO_URI link located in our .env file
    const connection = await mongoose.connect(process.env.MONGO_URI);
    // Confirming connection
    console.log('MongoDB Connected!')
};

// Exporting file
module.exports = { connectDB }