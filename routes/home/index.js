const express = require('express')
const HomeRouter = express.Router()

HomeRouter.route('/')
    .get(require('./home.view'))
    .post(require('./register'))

HomeRouter.route('/aboutus')
    .get(require('./aboutus.view'))

HomeRouter.route('/login')
    .get(require('./login.view'))
    .post(require('./login'))

HomeRouter.route('/logout')
    .get(require('./logout'))

HomeRouter.route('/choose')
    .get(require('./choose.view'))

HomeRouter.route('/users')
    .get(require('./users.view'))

module.exports = HomeRouter