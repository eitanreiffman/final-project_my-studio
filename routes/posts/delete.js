const axios = require('axios')

module.exports = async (req, res) => {
        let id = req.params.id
        const mutation = `
        mutation($id: ID!){ deletePost( id: $id ){ id } }
`
        const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
            {
                query: mutation,
                variables: { id: id } 
            },
            {
                headers: {
                    'Content-Type': 'application/json'
            }
        }
    )


    res.redirect('/posts')
}