// grab the mongoose module
var mongoose = require('mongoose');
var programme = require('./programme');

var departmentSchema = new mongoose.Schema({
    name         : String,
    programme  : [programme],
    location     : String
});

// define our course model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('department', departmentSchema);