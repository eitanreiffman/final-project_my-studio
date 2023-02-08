const { GraphQLList, GraphQLID } = require('graphql');
const { User, Post } = require('../models');
const { UserType, PostType } = require('./types')


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

const posts = {
    type: new GraphQLList(PostType),
    description: 'Get posts from database',
    resolve(parent, args){
        return Post.find();
    }
};

const post = {
    type: PostType,
    description: 'Get one post from ID in database',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args){
        return Post.findById(args.id)
    }
};

module.exports = {
    users,
    user,
    posts,
    post
}