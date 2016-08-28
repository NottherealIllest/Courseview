var express = require('express')
    , app = express()
    , body = require('body-parser')
    , methodOverride = require('method-override')
    , port = (process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'))
app.use(body.json())
app.use(body.urlencoded({extended:true}))
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')) 

var forceSsl = function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
 };

 app.configure(function () {

    if (env === 'production') {
        app.use(forceSsl);
    }

    // other configurations etc for express go here...
})

// routes ==================================================
require('./app/routes')(app) // configure our routes

app.listen(port, function(){
   console.log("Timetable running on port:" + port); 
});

exports = module.exports.app;