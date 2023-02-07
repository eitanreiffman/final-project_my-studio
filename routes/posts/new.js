const axios = require('axios')

module.exports = async (req, res) => {
    console.log(req.body)
    console.log(req.cookies)
    const postInputs = req.body;
    const postData = {
        title: postInputs.title,
        description: postInputs.description,
        userId: req.verifiedUser._id
    }
    try {
        const mutation = `
        mutation ($title: String!, $description: String!, $userId: ID!){
            createPost(
                title: $title,
                description: $description,
                userId: $userId
            )
        }
    `
        const { data } = await axios.post(
            process.env.GRAPHQL_ENDPOINT,
            {
                query: mutation,
                variables: postData
            },
            {
                header: {
                    'Content-Type': 'application/json'
                }
            }
        )
        console.log(data)
    } catch(err){
        console.log(err)
        console.log('Post not successful')
    }
    console.log('Post successful')
    res.redirect('/posts')
};


// module.exports = async (req, res) => {
//     const songInputs =  req.body
//     console.log(songInputs)
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
// }