const express = require('express')
const postRouter = require('./routes/posts')
const userRouter = require('./routes/users')
const app = express()

app.set('view engine', 'ejs')

app.use('/posts', postRouter)

app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.render('../templates/views/index')
})

app.get('/aboutus', (req, res) => {
    res.render('../templates/views/aboutus')
})

app.use(express.static('public'))


app.listen(3000)