const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");



const UserType = new GraphQLObjectType(
    {
        name: 'User',
        description: 'User Type',
        fields: () => ({
            id: { type: GraphQLID },
            username: { type: GraphQLString },
            email: { type: GraphQLString }
        })
    }
);


module.exports = {
    UserType
};