const { GraphQLString } = require("graphql");
const { User } = require("../models");
const brcrypt = require('bcrypt');
const { createJSONWebToken } = require('../util/auth')



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

module.exports = {
    register
}