const { GraphQLList, GraphQLID } = require('graphql');
const { User } = require('../models');
const { UserType } = require('./types')


const users = {
    type: new GraphQLList(UserType),
    description: 'Get all users from our database',
    resolve(parent, args){
        return User.find();
    }
};

const user = {
    type: UserType,
    description: 'Get one user from ID in database',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args){
        return User.findById(args.id)
    }
};

module.exports = {
    users,
    user
}