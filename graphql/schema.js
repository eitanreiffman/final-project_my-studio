const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const queries = require('./queries')
const mutations = require('./mutations')

const QueryType = new GraphQLObjectType(
    {
        name: 'QueryType',
        description: 'Handles all of our queries',
        fields: queries
    }
)

const MutationType = new GraphQLObjectType(
    {
        name: 'MutationType',
        description: 'Handles all of our mutations',
        fields: mutations
    }
)

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})