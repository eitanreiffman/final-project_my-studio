const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const { User, Post } = require('../models')



const UserType = new GraphQLObjectType(
    {
        name: 'User',
        description: 'User Type',
        fields: () => ({
            id: { type: GraphQLID },
            username: { type: GraphQLString },
            email: { type: GraphQLString },
            posts: {
                type: PostType,
                resolve(parent, args){
                    return Post.find( { userId: parent.id } )
                }
            }
        })
    }
);

const PostType = new GraphQLObjectType(
    {
        name: 'Post',
        description: 'Post Type',
        fields: () => ({
            id: { type: GraphQLID },
            title: { type: GraphQLString },
            description: { type: GraphQLString },
            userId: { type: GraphQLID },
            user: {
                type: UserType,
                resolve(parent, args){
                    return User.findById(parent.userId)
                }
            }
        })
    }
)


module.exports = {
    UserType,
    PostType
};