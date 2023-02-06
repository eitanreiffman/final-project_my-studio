const axios = require('axios');

module.exports = async (req, res) => {
    if (req.body.password !== req.body.confirmPass){
        res.send({ error: 'Invalid. Your passwords do not match.' })
    } else {
        try {
            const mutation = `
            mutation ($username: String!, $email: String!, $password: String!){
                register(username: $username, email: $email, password: $password)
            }
            `
            const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
                {
                    query: mutation,
                    variables: {
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const JsonWebToken = data.data.register
            res.cookie('JsonWebToken', JsonWebToken, { httpOnly: true })
            res.redirect('/login')
        } catch(err) {
            console.log(err)
            res.redirect('/')
        }
    }
}