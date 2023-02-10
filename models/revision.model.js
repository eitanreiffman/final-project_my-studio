const mongoose = require('mongoose')


const revisionSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        songFile: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        postId: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)



module.exports = mongoose.model('Revision', revisionSchema)