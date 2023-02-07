const axios = require('axios');

module.exports = async (req, res, next) => {
    try {
        const mutation = `
        mutation ($username: String!, $password: String!){
            login (
                username: $username
                password: $password
            )
        }
        `
        const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
            {
                query: mutation,
                variables: {
                    username: req.body.username,
                    password: req.body.password
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        const JsonWebToken = data.data.login;
        res.cookie('JsonWebToken', JsonWebToken, { httpOnly: true });
        console.log('Successful Login')
        res.redirect('/choose');
    } catch(err) {
        console.log(err);
        console.log('Failure to login')
        res.redirect('/login')
    }
}