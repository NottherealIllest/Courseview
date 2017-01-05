// grab the mongoose module
var mongoose = require('mongoose');

var programmeSchema = new mongoose.Schema({
    name         : String,
    location     : String,
	  description  : String,
	  department	 : { type: String, ref: 'Department' }
});

// define our course model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Programme', programmeSchema);
