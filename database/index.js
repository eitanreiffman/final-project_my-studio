const mongoose = require('mongoose');


const connectDB = async () => {
    mongoose.set('strictQuery', false)
    const connection = await mongoose.connect('mongodb+srv://eitanreiffman:mypass@cluster0.xccmlaj.mongodb.net/?retryWrites=true&w=majority');
    console.log('MongoDB Connected!')
};


module.exports = { connectDB }