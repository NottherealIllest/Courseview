// grab the mongoose module
var mongoose = require('mongoose');
var db       = require('../../config/db');
var university = require('./university');
var department = require('./department');
//var 
var courseSchema = new mongoose.Schema({
    coursecode        : String,
    coursename        : String,
    level       : String,
    times       : [],
    notes       : String,
    color       : String,
    university  : String,
    department  : String,
    programme  : String,
});

// define our course model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Course', courseSchema);