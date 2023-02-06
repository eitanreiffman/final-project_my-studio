const express = require('express')
const HomeRouter = express.Router()

HomeRouter.route('/')
    .get(require('./home.view'))

HomeRouter.route('/aboutus')
    .get(require('./aboutus.view'))

module.exports = HomeRouter