// Instantiating our Express variable, and taking in Express.js itself
const express = require('express')
// Instantiating the function that connects us to our MongoDB database, drawing from our database module
const { connectDB } = require('./database');
// Calling on Node's Path module to allow us to work with file and directory paths
const path = require('path');
// Defining our app variable as being powered by Express (creating an Express application)
const app = express()
// Instantiating our Cookie Parser which we installed with NPM
const cookieParser = require('cookie-parser')
// Instantiating GraphQL HTTP Middleware which we installed
const { graphqlHTTP } = require('express-graphql')
// Calling our GraphQL schema that we defined in a separate module
const schema = require('./graphql/schema')
// Calling our Authenticate function that we defined in the middleware/auth.js module
const { authenticate } = require('./middleware/auth')
// Instantiating the MethodOverride function which allows us to override Delete requests in forms
const methodOverride = require('method-override')
// Instantiating CORS, or Cross-Origin Resource Sharing
const cors = require('cors')
// Instantiating dotenv which we installed, and which allows us to load variables from .env file
const dotenv = require('dotenv')

// Passing Cors function into our app
app.use(cors())

// Calling our dotenv function
// Config loads .env file contents into process.env
// For instance, every time I want to access the secret key, call this:
// process.env.JWT_SECRET;
dotenv.config();

// Connecting to our MongoDB database
connectDB();


// Specifying root directory from which we're serving our static files
app.use(express.static('public'))

// Parsing our cookie headers which will populate req.cookies with object keyed by cookie names
app.use(cookieParser());

// Add Cookie Parser before Authenticate
app.use(authenticate);

// Telling our app to use the schema from our GraphQL modules, and calling GraphQLHTTP
// Setting GraphiQL to true enables GraphiQL mode, which is the Integrated Development Environment to work on
app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true
}))

// Setting our view engine template to EJS, which we installed
app.set('view engine', 'ejs')
// Telling our views to be nested on top of '/templates/views/' when called
app.set('views', path.join(__dirname, '/templates/views'))

// Url Encoded is middleware that parses urlencoded bodies
// Only looks at requests where the Content-Type header matches the type option
// URL Encoder must be executed before Routes are instantiated below
app.use(express.urlencoded({ extended: true }));
// Gives option to override form requests, such as Delete
app.use(methodOverride('_method'))

// Instantiating our main routes network, which calls on the Routes Index module
const initRoutes = require('./routes');
// Passing our app into our Routes Network
initRoutes(app)

// Telling our App which Host to listen to - in this case we tell it to listen to 3000
app.listen(3000)