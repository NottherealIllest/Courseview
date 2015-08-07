// grab the mongoose module
var mongoose = require('mongoose');
var department = require('./department');

var collegeSchema = new mongoose.Schema({
    name         : String,
    departments  : [department],
    location     : String
});

// define our course model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('College', collegeSchema);