// grab the mongoose module
var mongoose = require('mongoose');

var departmentSchema = new mongoose.Schema({
    name         : String,
    location     : String,
	description  : String,
	college		 : String
});

// define our course model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Department', departmentSchema);