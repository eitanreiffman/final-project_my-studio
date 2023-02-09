const express = require('express')
const { connectDB } = require('./database');
const path = require('path');
const app = express()
const cookieParser = require('cookie-parser')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schema')
const { authenticate } = require('./middleware/auth')
const methodOverride = require('method-override')
const cors = require('cors')

app.use(cors())

const dotenv = require('dotenv')
dotenv.config();

connectDB();

// Every time I want to access the secret key, call this:
// process.env.JWT_SECRET;

app.use(express.static('public'))

app.use(cookieParser());
// Add Cookie Parser before Authenticate
app.use(authenticate);

app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true
}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/templates/views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

// URL Encoder must be executed before Routes are instantiated
const initRoutes = require('./routes');
initRoutes(app)


app.listen(3000)