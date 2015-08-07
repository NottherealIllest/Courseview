
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    var apiRoutes = require('./routes/api');
    app.use('/api', apiRoutes);

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        console.log(req.url);
        res.sendfile('../public/index.html'); // load our public/index.html file
    });

};