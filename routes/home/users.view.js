const axios = require('axios')

module.exports = async (req, res) => {
    const query = `
    query{
        users {
        id
        username
        email
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
    const users = data.data.users
    console.log(users)
    res.render('users', { users: users, user: req.verifiedUser })
}