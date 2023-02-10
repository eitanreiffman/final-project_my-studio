const axios = require('axios')

module.exports = async (req, res) => {
    const postInputs = req.body;
    const postData = {
        description: postInputs.description,
        songFile: postInputs.songFile,
        userId: req.verifiedUser._id,
        postId: req.params.id
    }
    try {
        const mutation = `
        mutation ($description: String!, $songFile: String!, $userId: String!, $postId: String!){
            createRevision (
                description: $description,
                songFile: $songFile,
                userId: $userId,
                postId: $postId
            )
        }        
`
            const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
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

            res.redirect(`/posts/${postId}`)
            
        } catch(err) {
            console.log(err)
            console.log('unsuccessful post')
    }
};