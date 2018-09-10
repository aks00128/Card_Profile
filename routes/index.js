function routes(app) {
    require('./profileRoutes')(app);
    require('./loginRoutes')(app);
}
module.exports = routes