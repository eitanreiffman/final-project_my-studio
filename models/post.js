const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genres: {
        type: Array,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    file: {
        type: Buffer,
        required: true        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema)