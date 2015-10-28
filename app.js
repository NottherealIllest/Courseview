var express = require('express')
    , app = express()
    , body = require('body-parser')
    , methodOverride = require('method-override')
    , port = 3000;

app.use(express.static(__dirname + '/public'))
app.use(body.json())
app.use(body.urlencoded({extended:true}))
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')) 

// routes ==================================================
require('./app/routes')(app) // configure our routes

app.listen(port,function(){
   console.log("Timetable running on port:" + port); 
});

exports = module.exports.app;