const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('../templates/views/index')
})

app.get('/aboutus', (req, res) => {
    res.render('../templates/views/aboutus')
})

app.use(express.static('public'))

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(3000)