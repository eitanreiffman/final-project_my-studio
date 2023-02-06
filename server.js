const express = require('express')
const { connectDB } = require('./database');
const path = require('path');
const app = express()
const cookieParser = require('cookie-parser')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schema')

const dotenv = require('dotenv')
dotenv.config();

connectDB();

// Every time I want to access the secret key, call this:
// process.env.JWT_SECRET;

app.use(cookieParser());
// Add Cookie Parser before Authenticate


app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true
}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/templates/views'))


const postRouter = require('./routes/posts')
app.use('/posts', postRouter)

app.use(express.urlencoded({ extended: true }));

const initRoutes = require('./routes');
initRoutes(app)

app.use(express.static('public'))

app.listen(3000)