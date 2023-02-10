const axios = require('axios')

module.exports = async (req, res) => {
    let id = req.params.id
    let title = req.body.title
    let description = req.body.description
    let songFile = req.body.songFile
    const mutation = `
    mutation(
        $id: ID!,
        $title: String!,
        $description: String!,
        $songFile: String!
            ){
        editPost(id: $id, title: $title, description: $description, songFile: $songFile){
          id
          user{
            username
          }
        }
      }
`
    const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
    {
        query: mutation,
        variables: { 
            id: id,
            title: title,
            description: description,
            songFile: songFile
         }
    },
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
)

    res.redirect(`/posts/${id}`)
}