const { GraphQLString, GraphQLID } = require("graphql");
const { User, Post } = require("../models");
const brcrypt = require('bcrypt');
const { createJSONWebToken } = require('../util/auth')
const { PostType } = require('./types')


const register = {
    type: GraphQLString,
    description: "Register a new user",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve (parent, args){
        const checkUser = await User.findOne({ email: args.email })
        if (checkUser){
            throw new Error('Sorry, a user with this email already exists. Please choose another one.')
        }
        const { username, email, password } = args;
        const passwordHash = await brcrypt.hash(password, 10);
        const user = new User({ username, email, password: passwordHash });
        await user.save();
        const token = createJSONWebToken(user);
        return token
    }
};

const login = {
    type: GraphQLString,
    description: 'Log user into the database',
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args){
        const user = await User.findOne({ username: args.username });
        const hashedPassword = user?.password || ""
        const correctPassword = await brcrypt.compare(args.password, hashedPassword);
        if (!user || !correctPassword){
            throw new Error('Sorry, invalid credentials.')
        }
        const token = createJSONWebToken(user);
        return token
    }
};


const createPost = {
    type: GraphQLID,
    description: 'Create a new post',
    args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        songFile: { type: GraphQLString },
        userId: { type: GraphQLID }
    },
    async resolve(parent, args){
        const post = new Post({
            title: args.title,
            description: args.description,
            songFile: args.songFile,
            userId: args.userId
        });

        post.save()
        return post.id
        // res.redirect(`/posts/${post.id}`)
    }
}

const deletePost = {
    type: PostType,
    description: 'Delete a specific post by ID',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args){
        return Post.findByIdAndDelete(args.id)
    }

}

const editPost = {
    type: PostType,
    description: 'Edit a specific post by the ID',
    args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        songFile: { type: GraphQLString }
    },
    resolve(parent, args){
        return Post.findByIdAndUpdate(args.id, {
            title: args.title,
            description: args.description,
            songFile: args.songFile
        })
    }
}

module.exports = {
    register,
    login,
    createPost,
    deletePost,
    editPost
}