const axios = require('axios')

module.exports = async (req, res) => {
    const query = `
        query{
            posts {
            id
            title
            description
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

    res.render('posts', { posts: posts, user: req.verifiedUser })
}