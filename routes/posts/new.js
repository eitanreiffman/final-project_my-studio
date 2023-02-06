const Post = require('../../models/post.model')

const axios = require('axios')

module.exports = async (req, res) => {
    const songInputs =  req.body
    console.log(songInputs)
    // const post = new Post({
    //     title: req.body.title,
    //     // genres: req.body.genres,
    //     description: req.body.description,
    //     // file: req.body.file
    // })
    // try {
    //     post = await post.save()
    //     res.redirect(`/posts/${post.id}`)
    // } catch (err) {
    //     res.render('posts/new', { post: post })
    // }

}