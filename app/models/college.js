// grab the mongoose module
var mongoose = require('mongoose');

var collegeSchema = new mongoose.Schema({
	university	 : String,
    name         : String,
    location     : String,
	description  : String
});

// define our course model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('College', collegeSchema);