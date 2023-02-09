const axios = require('axios')

module.exports = async (req, res) => {
    const query = `
        query{
            posts {
            id
            title
            description
            userId
            user {
                username
            }
        }
    }
`
    const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
        {
            query: query,
            variables: null
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    const posts = data.data.posts
    console.log(posts)

    res.render('posts', { posts: posts, userLoggedIn: req.verifiedUser })
}