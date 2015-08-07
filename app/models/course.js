// grab the mongoose module
var mongoose = require('mongoose');
var db       = require('../../config/db');
var university = require('./university');
var department = require('./department');
//var 
var courseSchema = new mongoose.Schema({
    university  : String,
    department  : String,
    code        : String,
    name        : String,
    location    : String,
    level       : String,
    department  : String,
    note        : String,
    color       : String,
    day         : String,
    time        : String
});

// define our course model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Course', courseSchema);