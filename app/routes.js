
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    var apiRoutes = require('./routes/api');
    app.use('/api', apiRoutes);

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
		
		res.redirect('/#' + req.url);
        //res.sendFile('index.html', {root:  __dirname + '/public/'}); // load our public/index.html file
		
    });

};