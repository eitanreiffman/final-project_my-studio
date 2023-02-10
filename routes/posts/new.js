const axios = require('axios')

module.exports = async (req, res) => {
    console.log(req.body)
    console.log(req.cookies)
    const postInputs = req.body;
    const postData = {
        title: postInputs.title,
        description: postInputs.description,
        songFile: postInputs.songFile,
        userId: req.verifiedUser._id
    }
    try {
        const mutation = `
        mutation ($title: String!, $description: String!, $songFile: String!, $userId: ID!){
            createPost(
                title: $title,
                description: $description,
                songFile: $songFile,
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
        const postId = data.data.createPost
        res.redirect(`/posts/${postId}`)
        console.log('Post successful')
    } catch(err){
        console.log(err)
        console.log('Post not successful')
    }
};