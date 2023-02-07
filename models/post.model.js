const mongoose = require('mongoose')

// const postSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     genres: {
//         type: Array,
//         required: false
//     },
//     description: {
//         type: String,
//         required: false
//     },
//     file: {
//         type: Buffer,
//         required: true        
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// })

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)



module.exports = mongoose.model('Post', postSchema)