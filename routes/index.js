module.exports = function(app){
    app.use('/', require('./home'))
    app.use('/posts', require('./posts'))
}