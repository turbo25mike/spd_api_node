module.exports = function (app) {
        app.use('/api/work', require('./api/work'));
};
