const axios = require('axios')

module.exports = async (req, res) => {
    id = req.params.id
    const query = `
        query ($id: ID!){
            post(id: $id){
            id
            title
            description
            songFile
            user{
                username
            }
        }
    }
`
    const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
        {
            query: query,
            variables: { id }
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    const post = data.data.post


    res.render('posts/editPost', { userLoggedIn: req.verifiedUser, post: post })
}