const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const { User, Post, Revision } = require('../models')



const UserType = new GraphQLObjectType(
    {
        name: 'User',
        description: 'User Type',
        fields: () => ({
            id: { type: GraphQLID },
            username: { type: GraphQLString },
            email: { type: GraphQLString },
            posts: {
                type: GraphQLList(PostType),
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
            songFile: { type: GraphQLString },
            revisions: {
                type: GraphQLList(RevisionType),
                resolve(parent, args){
                    return Revision.find( { postId: parent.id } )
                }
            },
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

const RevisionType = new GraphQLObjectType(
    {
        name: 'Revision',
        description: 'Revision Type',
        fields: () => ({
            id: { type: GraphQLID },
            description: { type: GraphQLString },
            songFile: { type: GraphQLString },
            userId: { type: GraphQLString },
            user: {
                type: UserType,
                resolve(parent, args){
                    return User.findById(parent.userId)
                }
            },
            postId: { type: GraphQLString }
        })
    }
)


module.exports = {
    UserType,
    PostType,
    RevisionType
};