const express = require('express')
const HomeRouter = express.Router()

HomeRouter.route('/')
    .get(require('./home.view'))
    .post(require('./register'))

HomeRouter.route('/aboutus')
    .get(require('./aboutus.view'))

HomeRouter.route('/login')
    .get(require('./login.view'))

module.exports = HomeRouter