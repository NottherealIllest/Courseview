var express = require('express')
    , app = express()
    , body = require('body-parser')
    , methodOverride = require('method-override')
    , port = (process.env.PORT || 3000)
    , env = process.env.NODE_ENV || 'development';;

app.use(express.static(__dirname + '/public'))
app.use(body.json())
app.use(body.urlencoded({extended:true}))
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')) 

var forceSsl = function (req, res, next) {
    console.log("Request is: ", req.headers['x-forwarded-proto']);
    if (req.headers['x-forwarded-proto'] !== 'https') {
        var url = ['https://', req.get('Host'), '/#',req.url].join('');
        console.log(url);
        return res.redirect(url);
    }
    return next();
 };

 
console.log("Currently in: ", env);
if (env === 'production') {
    app.use(forceSsl);
    console.log("Yea!!! Feeling secure");
}

// routes ==================================================
require('./app/routes')(app) // configure our routes

app.listen(port, function(){
   console.log("Timetable running on port:" + port); 
});

exports = module.exports.app;